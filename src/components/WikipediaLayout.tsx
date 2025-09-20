import { WikipediaHeader } from "./WikipediaHeader";
import { WikipediaSidebar } from "./WikipediaSidebar";

interface WikipediaLayoutProps {
  children: React.ReactNode;
}

export function WikipediaLayout({ children }: WikipediaLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <WikipediaHeader />
      <div className="flex">
        <WikipediaSidebar />
        <main className="flex-1 ml-wiki-sidebar-width">
          <div className="p-wiki-content-padding">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}