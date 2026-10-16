import {
  StaticRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function StaticContent() {
  const location = useLocation();

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-amber-50 p-4">
        <p className="font-semibold text-amber-900">
          Static rendering mode
        </p>
        <p className="mt-1 text-sm text-amber-800">
          This router renders a fixed location. Navigation
          links are intentionally not provided.
        </p>
      </div>

      <div className="rounded-xl bg-slate-950 p-4 text-white">
        <p className="text-xs text-slate-400">
          RENDERED LOCATION
        </p>
        <code className="mt-2 block text-lg text-amber-300">
          {location.pathname}
        </code>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function StaticDemo() {
  return (
    <StaticRouter location="/about">
      <StaticContent />
    </StaticRouter>
  );
}