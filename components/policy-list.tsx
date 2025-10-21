import { ShieldCheck } from "lucide-react";

interface PolicyListProps {
  items: string[];
}

export function PolicyList({ items }: PolicyListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded border border-amber/15 bg-white/5 p-3 text-sm text-bone/85"
        >
          <ShieldCheck className="mt-0.5 h-5 w-5 text-amber" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
