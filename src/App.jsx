import { useState } from "react";

import RouterCard from "./Components/RouterCard";
import HashDemo from "./Demos/HashDemo";
import MemoryDemo from "./Demos/MemoryDemo";
import StaticDemo from "./Demos/StaticDemo";

const demos = [
  {
    id: "hash",
    title: "HashRouter",
    subtitle: "URL-based routing",
    color: "bg-indigo-500",
    description: "Uses the URL hash to navigate between pages.",
  },
  {
    id: "memory",
    title: "MemoryRouter",
    subtitle: "In-memory routing",
    color: "bg-sky-500",
    description: "Stores navigation history in memory.",
  },
  {
    id: "static",
    title: "StaticRouter",
    subtitle: "Fixed-location routing",
    color: "bg-amber-500",
    description: "Renders a predefined route, commonly on a server.",
  },
];

export default function App() {
  const [active, setActive] = useState("hash");

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-gradient-to-r from-indigo-700
        via-violet-700 to-purple-800 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="inline-flex rounded-full border
            border-white/20 bg-white/10 px-4 py-2 text-sm">
            React Practical • Routing Demonstration
          </div>

          <h1 className="mt-5 text-3xl font-extrabold
            tracking-tight sm:text-5xl">
            React Router Explorer
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7
            text-indigo-100 sm:text-base">
            Explore HashRouter, MemoryRouter, and StaticRouter
            with interactive demonstrations and reusable components.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-lg bg-white/10 px-3 py-2">
              ⚛️ React
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-2">
              🎨 Tailwind CSS
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-2">
              🧭 React Router
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:px-8">
        <section>
          <h2 className="text-2xl font-bold">
            Choose a router
          </h2>
          <p className="mt-2 text-slate-500">
            Select a card to launch its demonstration.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {demos.map((demo) => (
              <RouterCard
                key={demo.id}
                title={demo.title}
                description={demo.description}
                color={demo.color}
              >
                <p className="mb-4 text-xs font-medium uppercase
                  tracking-wider text-slate-400">
                  {demo.subtitle}
                </p>

                <button
                  onClick={() => setActive(demo.id)}
                  className={`w-full rounded-xl px-4 py-3
                    text-sm font-bold transition
                    focus:outline-none focus:ring-4
                    focus:ring-indigo-200 ${
                      active === demo.id
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-indigo-100"
                    }`}
                >
                  {active === demo.id
                    ? "Currently Active ✓"
                    : "Try This Router →"}
                </button>
              </RouterCard>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border
          border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between
            gap-3 border-b border-slate-200 px-5 py-5 sm:px-7">
            <div>
              <h2 className="text-xl font-bold">
                Live Demonstration
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Navigate between Home, About, and Contact.
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1
              text-xs font-bold text-emerald-700">
              ● Demo Ready
            </span>
          </div>

          <div className="p-5 sm:p-7">
            {active === "hash" && <HashDemo />}
            {active === "memory" && <MemoryDemo />}
            {active === "static" && <StaticDemo />}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">
            What did you learn?
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="font-bold text-indigo-300">HashRouter</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Good for static hosting when server configuration
                for client-side routes is limited.
              </p>
            </div>
            <div>
              <p className="font-bold text-sky-300">MemoryRouter</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Good for unit tests, isolated flows, and environments
                without browser URL navigation.
              </p>
            </div>
            <div>
              <p className="font-bold text-amber-300">StaticRouter</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Good for server-side rendering with a known request URL.
              </p>
            </div>
          </div>
        </section>

        <footer className="pb-4 text-center text-sm text-slate-500">
          Built with React Components and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}