const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar({ LinkComponent }) {
  return (
    <nav className="flex flex-wrap gap-3">
      {links.map((link) => (
        <LinkComponent
          key={link.path}
          to={link.path}
          className="rounded-xl bg-indigo-50 px-4 py-2
            text-sm font-semibold text-indigo-700
            transition hover:bg-indigo-600 hover:text-white"
        >
          {link.label}
        </LinkComponent>
      ))}
    </nav>
  );
}