import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import danImage from "@/assets/dan-van-tran.png";
import smitImage from "@/assets/smit-gujarathi.png";
import roswellImage from "@/assets/roswell-hobbs.png";

const Leadership = () => {
  const leaders = [
    {
      name: "Dan Van Tran",
      title: "Rapid Innovation Catalyst & Disruption Strategist",
      bio: "Dan (DVT) is a dynamic technology leader with nearly two decades of experience transforming complex challenges into rapid, scalable solutions. He excels at building agile MVPs and crafting disruptive product strategies that drive startup success and yield high-value exits. DVT also specializes in guiding startups through early-stage development, offering interim technical leadership and facilitating the recruitment of permanent technology executives and teams. With a rich background spanning multinational enterprises to three-person startups—including FactSet, Flatiron Health, his own cofounded venture Zenauction, and Collectors—DVT has a proven knack for turning bold ideas into market-ready innovations.",
      image: danImage,
      linkedin: "https://www.linkedin.com/in/dantran/"
    },
    {
      name: "Smit Gujarathi",
      title: "Startup Architect & Tactical Engineering Builder",
      bio: "With over 15 years at the forefront of technological innovation, Smit excels in turning groundbreaking ideas into scalable, market-ready products. His extensive background—from multinational enterprises to nimble startups—includes leading roles at Blackrock and Flatiron Health, as well as co-founding a startup that achieved a multi-million-dollar exit. Smit's expertise and entrepreneurial drive have been central to our clients' success.",
      image: smitImage,
      linkedin: "#"
    },
    {
      name: "Roswell Hobbs",
      title: "Strategic Operations & Innovation Scaling Specialist",
      bio: "Roswell brings over a decade of leadership and operational expertise to the team, she has lead high-growth initiatives in technology-driven companies. Known for orchestrating and executing complex, high-impact projects at organizations like Flatiron Health and Hailo, she has a unique ability to translate strategic visions into actionable, tech-enabled outcomes. At Collectors, she has helped to triple the valuation, quadruple headcount, and drive global scale while completing a full Operational and tech/UX overhaul. Roswell's hands-on approach and commitment to driving rapid innovation make her an essential partner in transforming ideas into market realities.",
      image: roswellImage,
      linkedin: "#"
    }
  ];

  return (
    <section id="leadership" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced leaders driving innovation and excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mb-6 object-cover bg-secondary"
                />
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary font-medium mb-4">{leader.title}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {leader.bio}
                </p>
                <a 
                  href={leader.linkedin}
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`${leader.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
