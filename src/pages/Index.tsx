import { WikiInfobox } from "@/components/WikiInfobox";
import { WikiTableOfContents } from "@/components/WikiTableOfContents";
import { WikiSection } from "@/components/WikiSection";
import rishulPhoto from "@/assets/rishul-photo.jpg";

const Index = () => {
  const tocItems = [
    { id: "early-life", title: "Early Life & Education", level: 2 },
    { id: "career", title: "Career", level: 2 },
    { id: "projects", title: "Projects", level: 2 },
    { id: "personal-life", title: "Personal Life", level: 2 },
    { id: "recognition", title: "Recognition & Impact", level: 2 },
    { id: "external-links", title: "External Links", level: 2 },
  ];

  const infoboxItems = [
    { label: "Born", value: "2008, Chandigarh, India" },
    { label: "Nationality", value: "Indian" },
    { label: "Occupation", value: "Entrepreneur" },
    { label: "Known for", value: "Maximally, CodeQuest, HackSkye, Project SYMBIONT" },
    { label: "Title", value: "Founder & CEO, Maximally" },
    { label: "Education", value: "Class 12 CBSE (PCM + PE + English)" },
    { label: "Notable", value: "10th Board 93.4%, dropped Allen JEE" },
    { label: "Website", value: <span className="wiki-link">rishulchanana.com</span> },
    { 
      label: "Social", 
      value: (
        <div className="space-y-1">
          <div><span className="wiki-link">LinkedIn</span></div>
          <div><span className="wiki-link">Instagram</span></div>
          <div><span className="wiki-link">GitHub</span></div>
          <div><span className="wiki-link">Medium</span></div>
        </div>
      )
    },
    { label: "Revenue", value: "₹2L+ in first months" },
    { label: "Impact", value: "10,000+ hackathon participants" },
  ];

  return (
    <div className="min-h-screen bg-background font-wiki">
      {/* Wikipedia-style header */}
      <div className="border-b border-wiki-border bg-background">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="text-xs text-wiki-text-muted">
            From Wikipedia, the free encyclopedia
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Article title */}
        <h1 className="text-3xl font-normal mb-1 font-wiki">Rishul Chanana</h1>
        
        <div className="text-xs text-wiki-text-muted mb-6 italic">
          From Wikipedia, the free encyclopedia
        </div>

        {/* Infobox */}
        <WikiInfobox 
          title="Rishul Chanana"
          image={rishulPhoto}
          items={infoboxItems}
        />

        {/* Table of Contents */}
        <WikiTableOfContents items={tocItems} />

        {/* Introduction */}
        <div className="text-sm leading-relaxed mb-6">
          <p className="mb-4">
            <strong>Rishul Chanana</strong> (born 2008) is an Indian entrepreneur and the founder of{" "}
            <span className="wiki-link">Maximally</span>, a Gen Z hackathon ecosystem. He is known for organizing 
            large-scale builder competitions and for projects like <span className="wiki-link">CodeQuest</span> and{" "}
            <span className="wiki-link">Project SYMBIONT</span>.
          </p>
          <p className="mb-4">
            Chanana has organized hackathons with over 10,000 participants and generated ₹2L+ in revenue within 
            the first months of launching Maximally. He is recognized for his work in fostering innovation 
            among Gen Z developers and entrepreneurs across India.
          </p>
        </div>

        {/* Main content sections */}
        <WikiSection id="early-life" title="Early Life & Education">
          <p className="mb-4">
            Rishul Chanana was born in 2008 in <span className="wiki-link">Chandigarh</span>, India. He demonstrated 
            academic excellence early on, achieving 93.4% in his 10th board examinations under the{" "}
            <span className="wiki-link">CBSE</span> curriculum.
          </p>
          <p className="mb-4">
            Initially enrolled at <span className="wiki-link">Allen Career Institute</span> for JEE preparation, 
            Chanana made the unconventional decision to drop out to focus on his entrepreneurial ventures. He 
            continued his formal education through Class 12 CBSE with subjects including Physics, Chemistry, 
            Mathematics, Physical Education, and English.
          </p>
          <p className="mb-4">
            His upbringing in Chandigarh, a planned city known for its educational institutions, provided him 
            with early exposure to technology and innovation that would later influence his career path.
          </p>
        </WikiSection>

        <WikiSection id="career" title="Career">
          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">CodeQuest</h3>
          <p className="mb-4">
            Chanana's first major venture was <span className="wiki-link">CodeQuest</span>, a competitive programming 
            platform that gained significant traction among young developers in India. The platform focused on 
            making coding competitions more accessible to students.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">HackSkye</h3>
          <p className="mb-4">
            Building on his experience with CodeQuest, Chanana launched <span className="wiki-link">HackSkye</span>, 
            expanding into the hackathon space. This venture served as a precursor to his later, more ambitious 
            project, Maximally.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Maximally</h3>
          <p className="mb-4">
            In his most significant entrepreneurial venture to date, Chanana founded{" "}
            <span className="wiki-link">Maximally</span>, described as a "Gen Z hackathon ecosystem." The platform 
            has successfully organized events with over 10,000 participants and has established partnerships with 
            major educational institutions and corporations.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Other Ventures</h3>
          <p className="mb-4">
            Chanana has also been involved with <span className="wiki-link">Good Boys Agency</span> and various 
            early-stage experiments in the startup ecosystem. He has completed internships that have contributed 
            to his understanding of business operations and technology development.
          </p>
        </WikiSection>

        <WikiSection id="projects" title="Projects">
          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Project SYMBIONT</h3>
          <p className="mb-4">
            <span className="wiki-link">Project SYMBIONT</span> represents one of Chanana's most innovative technical 
            contributions. The project demonstrates his ability to work on complex systems and has gained recognition 
            in the developer community.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">RISUN</h3>
          <p className="mb-4">
            <span className="wiki-link">RISUN</span> is an AI-powered solar operations platform developed by Chanana. 
            The project showcases his interest in sustainable technology and artificial intelligence applications 
            in renewable energy.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Hackathon Builds</h3>
          <p className="mb-4">
            Beyond his primary ventures, Chanana has participated in numerous hackathons as both organizer and 
            participant, creating various innovative solutions across different domains.
          </p>
        </WikiSection>

        <WikiSection id="personal-life" title="Personal Life">
          <p className="mb-4">
            Chanana has been open about his personal challenges and growth experiences. He has discussed his 
            weight loss journey and how personal setbacks, including a significant breakup before launching 
            CodeQuest, motivated his entrepreneurial drive.
          </p>
          <p className="mb-4">
            The passing of his grandmother was cited as a pivotal moment that influenced his perspective on 
            life and business priorities. These personal experiences have shaped his approach to leadership 
            and community building.
          </p>
          <p className="mb-4">
            His interests extend beyond technology and business to include <span className="wiki-link">artificial intelligence infrastructure</span>,{" "}
            <span className="wiki-link">systems thinking</span>, competitive activities, and philosophy. These diverse 
            interests inform his holistic approach to problem-solving and innovation.
          </p>
        </WikiSection>

        <WikiSection id="recognition" title="Recognition & Impact">
          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Partnerships</h3>
          <p className="mb-4">
            Maximally has established partnerships with prominent organizations including{" "}
            <span className="wiki-link">YRI</span>, <span className="wiki-link">Masters' Union</span>, and{" "}
            <span className="wiki-link">MakeX</span>. These collaborations have expanded the reach and impact 
            of his hackathon ecosystem.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Industry Recognition</h3>
          <p className="mb-4">
            The events organized by Chanana have attracted mentors and judges from major technology companies 
            including <span className="wiki-link">Google</span>, <span className="wiki-link">Meta</span>, and{" "}
            <span className="wiki-link">OpenAI</span>, demonstrating the credibility and reach of his initiatives.
          </p>

          <h3 className="text-lg font-normal border-b border-wiki-border pb-1 mt-4 mb-2">Testimonials</h3>
          <p className="mb-4">
            Industry leaders have provided positive recommendations for Chanana's work, praising his ability 
            to create meaningful opportunities for young developers and his vision for the future of tech education.
          </p>
        </WikiSection>

        <WikiSection id="external-links" title="External Links">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><span className="wiki-link">Official website: rishulchanana.com</span></li>
            <li><span className="wiki-link">LinkedIn profile</span></li>
            <li><span className="wiki-link">GitHub repositories</span></li>
            <li><span className="wiki-link">Instagram account</span></li>
            <li><span className="wiki-link">Medium articles</span></li>
            <li><span className="wiki-link">Maximally platform</span></li>
          </ul>
        </WikiSection>

        {/* Wikipedia footer */}
        <div className="mt-12 pt-6 border-t border-wiki-border text-xs text-wiki-text-muted">
          <p>
            This page was last edited on 20 September 2025, at 23:05 (UTC).
          </p>
          <p className="mt-2">
            Text is available under the <span className="wiki-link">Creative Commons Attribution-ShareAlike License</span>; 
            additional terms may apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
