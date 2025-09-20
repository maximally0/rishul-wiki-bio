interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface WikiTableOfContentsProps {
  items: TOCItem[];
}

export function WikiTableOfContents({ items }: WikiTableOfContentsProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-wiki-toc-bg border border-wiki-border p-4 mb-6 inline-block">
      <div className="font-bold text-sm mb-2">Contents</div>
      <ol className="text-sm">
        {items.map((item, index) => (
          <li key={item.id} className="mb-1">
            <span 
              className="wiki-link cursor-pointer"
              onClick={() => handleScroll(item.id)}
            >
              {index + 1} {item.title}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}