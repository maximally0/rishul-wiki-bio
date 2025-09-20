export function WikipediaSidebar() {
  const navigationItems = [
    { label: "Main page", active: false },
    { label: "Contents", active: false },
    { label: "Current events", active: false },
    { label: "Random article", active: false },
    { label: "About Wikipedia", active: false },
    { label: "Contact us", active: false },
  ];

  const interactionItems = [
    { label: "Help", active: false },
    { label: "Learn to edit", active: false },
    { label: "Community portal", active: false },
    { label: "Recent changes", active: false },
    { label: "Upload file", active: false },
  ];

  const toolsItems = [
    { label: "What links here", active: false },
    { label: "Related changes", active: false },
    { label: "Upload file", active: false },
    { label: "Special pages", active: false },
    { label: "Permanent link", active: false },
    { label: "Page information", active: false },
    { label: "Cite this page", active: false },
    { label: "Get shortened URL", active: false },
  ];

  const SidebarSection = ({ title, items }: { title: string; items: typeof navigationItems }) => (
    <div className="mb-4">
      <h3 className="text-xs font-bold text-wiki-text-muted uppercase mb-2 px-2">
        {title}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="wiki-link block py-1 px-2 text-xs hover:bg-wiki-border-light cursor-pointer">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-wiki-sidebar-width bg-wiki-sidebar-bg border-r border-wiki-border-light h-full fixed top-0 left-0 pt-24 pb-4 overflow-y-auto">
      <SidebarSection title="Navigation" items={navigationItems} />
      <SidebarSection title="Interaction" items={interactionItems} />
      <SidebarSection title="Tools" items={toolsItems} />
      
      <div className="px-2 mt-6">
        <div className="text-xs text-wiki-text-small">
          <div className="mb-2">
            <span className="wiki-link">Download as PDF</span>
          </div>
          <div className="mb-2">
            <span className="wiki-link">Printable version</span>
          </div>
        </div>
      </div>

      <div className="px-2 mt-6">
        <h3 className="text-xs font-bold text-wiki-text-muted uppercase mb-2">
          In other projects
        </h3>
        <div className="text-xs space-y-1">
          <div><span className="wiki-link">Wikimedia Commons</span></div>
          <div><span className="wiki-link">Wikidata item</span></div>
        </div>
      </div>

      <div className="px-2 mt-6">
        <h3 className="text-xs font-bold text-wiki-text-muted uppercase mb-2">
          Languages
        </h3>
        <div className="text-xs space-y-1">
          <div><span className="wiki-link">हिन्दी</span></div>
          <div><span className="wiki-link">ਪੰਜਾਬੀ</span></div>
          <div><span className="wiki-link">español</span></div>
          <div><span className="wiki-link">français</span></div>
          <div><span className="wiki-link">deutsch</span></div>
        </div>
      </div>
    </div>
  );
}