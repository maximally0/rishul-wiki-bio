import { Edit3 } from "lucide-react";

interface WikiEditButtonProps {
  sectionTitle: string;
}

export function WikiEditButton({ sectionTitle }: WikiEditButtonProps) {
  return (
    <span className="float-right ml-2">
      <span className="wiki-link text-xs flex items-center gap-1 hover:bg-wiki-edit-bg px-1 py-0.5 rounded cursor-pointer">
        <Edit3 size={12} />
        edit
      </span>
    </span>
  );
}