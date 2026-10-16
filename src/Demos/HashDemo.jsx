import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function HashContent() {
  const location = useLocation();

  return (
    <div className="space-y-6">
      <Navbar LinkComponent={Link} />

      <div className="rounded-xl bg-slate-950 p-4 text-white">
        <p className="text-xs text-slate-400">
          CURRENT ROUTE
        </p>
        <code className="mt-2 block break-all text-sm text-emerald-300">
          {location.pathname}
        </code>
        <p className="mt-2 text-xs text-slate-400">
          Check the browser address bar for the # symbol.
        </p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function HashDemo() {
  return (
    <HashRouter>
      <HashContent />
    </HashRouter>
  );
}