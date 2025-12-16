export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex gap-2 text-sm">
      {items.map((item, i) => (
        <span key={i} className={i === items.length - 1 ? "font-medium" : "text-[#5f9a4c]"}>
          {item}{i !== items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
