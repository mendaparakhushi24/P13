export default function RouterCard({
  title,
  description,
  color,
  children,
}) {
  return (
    <section className="rounded-2xl border border-slate-200
      bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className={`mb-4 h-1.5 w-16 rounded-full ${color}`} />
      <h2 className="text-xl font-bold text-slate-800">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
      <div className="mt-5">{children}</div>
    </section>
  );
}