import { Search, Menu } from "lucide-react";

export function WikipediaHeader() {
  return (
    <div className="bg-wiki-nav-bg border-b border-wiki-nav-border">
      {/* Top black bar */}
      <div className="bg-black text-white text-xs">
        <div className="max-w-none px-4 py-1 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="wiki-link text-white">English</span>
            <span className="wiki-link text-white">español</span>
            <span className="wiki-link text-white">français</span>
            <span className="wiki-link text-white">русский</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="wiki-link text-white">Log in</span>
            <span className="wiki-link text-white">Create account</span>
          </div>
        </div>
      </div>

      {/* Main Wikipedia header */}
      <div className="bg-white">
        <div className="max-w-none px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="md:hidden">
              <Menu size={20} />
            </button>
            <div className="flex items-center space-x-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg" 
                alt="Wikipedia" 
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">Wikipedia</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Wikipedia"
                className="w-full px-3 py-1 border border-wiki-border rounded text-sm"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-wiki-text-muted" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <span className="wiki-link hidden md:inline">Contribute</span>
            <span className="wiki-link hidden md:inline">Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
}