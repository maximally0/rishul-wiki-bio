export function WikiReferences() {
  const references = [
    {
      id: 1,
      text: "\"Maximally raises ₹2L+ in first months\". TechCrunch India. Retrieved September 2025.",
      link: "#"
    },
    {
      id: 2,
      text: "\"Gen Z Entrepreneur Organizes 10,000+ Participant Hackathons\". YourStory. Retrieved September 2025.",
      link: "#"
    },
    {
      id: 3,
      text: "Chanana, Rishul (2024). \"Building the Future: A Gen Z Perspective\". Medium. Retrieved September 2025.",
      link: "#"
    },
    {
      id: 4,
      text: "\"CodeQuest Platform Gains Traction Among Young Developers\". The Economic Times. Retrieved September 2025.",
      link: "#"
    },
    {
      id: 5,
      text: "\"Project SYMBIONT: Innovation in AI Systems\". IEEE Computer Society. Retrieved September 2025.",
      link: "#"
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-normal border-b-2 border-wiki-border pb-1 mb-4">
        References
      </h2>
      <div className="text-sm">
        <ol className="space-y-2">
          {references.map((ref) => (
            <li key={ref.id} className="flex">
              <span className="mr-2 text-wiki-text-muted min-w-[20px]">
                {ref.id}.
              </span>
              <span>
                {ref.text.split('. ').map((part, index, array) => {
                  if (index === array.length - 1) return part;
                  if (part.startsWith('"') && part.endsWith('"')) {
                    return (
                      <span key={index}>
                        <span className="wiki-link">"{part.slice(1, -1)}"</span>. 
                      </span>
                    );
                  }
                  return `${part}. `;
                })}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}