interface WikiSectionProps {
  id: string;
  title: string;
  level?: 1 | 2 | 3;
  children: React.ReactNode;
}

export function WikiSection({ id, title, level = 2, children }: WikiSectionProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const getHeadingClass = () => {
    switch (level) {
      case 1:
        return "text-3xl font-normal border-b-[3px] border-wiki-border pb-1 mt-8 mb-4";
      case 2:
        return "text-xl font-normal border-b-2 border-wiki-border pb-1 mt-6 mb-3";
      case 3:
        return "text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2";
      default:
        return "text-xl font-normal border-b-2 border-wiki-border pb-1 mt-6 mb-3";
    }
  };

  return (
    <section id={id} className="mb-6">
      <HeadingTag className={getHeadingClass()}>
        {title}
      </HeadingTag>
      <div className="text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}