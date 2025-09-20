import { Card } from "@/components/ui/card";

interface InfoboxItem {
  label: string;
  value: string | React.ReactNode;
}

interface WikiInfoboxProps {
  title: string;
  image?: string;
  items: InfoboxItem[];
}

export function WikiInfobox({ title, image, items }: WikiInfoboxProps) {
  return (
    <div className="w-full max-w-wiki-infobox bg-wiki-infobox-bg border border-wiki-border float-right ml-4 mb-4 clear-right">
      <div className="text-center bg-wiki-toc-bg border-b border-wiki-border p-2">
        <h2 className="font-bold text-sm">{title}</h2>
      </div>
      
      {image && (
        <div className="p-2 text-center border-b border-wiki-border">
          <img 
            src={image} 
            alt={`${title} photo`}
            className="w-full max-w-[250px] h-auto mx-auto border border-wiki-border-light"
          />
        </div>
      )}
      
      <table className="w-full">
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-wiki-border-light last:border-b-0">
              <td className="p-2 text-xs font-bold text-wiki-text-muted bg-wiki-toc-bg align-top w-24">
                {item.label}
              </td>
              <td className="p-2 text-xs align-top">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}