import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Linkedin, ExternalLink } from "lucide-react";
import danImage from "@/assets/dan-van-tran.png";
import smitImage from "@/assets/smit-gujarathi.png";
import roswellImage from "@/assets/roswell-hobbs.png";

const Leadership = () => {
  const teamMembers = [
    {
      name: "Dan Van Tran",
      title: "Rapid Innovation Catalyst & Disruption Strategist",
      bio: [
        "Dan (DVT) is a dynamic technology leader with nearly two decades of experience transforming complex challenges into rapid, scalable solutions. He excels at building agile MVPs and crafting disruptive product strategies that drive startup success and yield high-value exits.",
        "DVT also specializes in guiding startups through early-stage development, offering interim technical leadership and facilitating the recruitment of permanent technology executives and teams.",
        "With a rich background spanning multinational enterprises to three-person startups—including FactSet, Flatiron Health, his own cofounded venture Zenauction, and Collectors—DVT has a proven knack for turning bold ideas into market-ready innovations. His strategic leadership also extends to active roles in angel investing and community boards, underscoring his commitment to nurturing emerging talent and advancing technology."
      ],
      image: danImage,
      linkedin: "https://www.linkedin.com/in/dantran/",
      links: [
        {
          title: "Advancements with Ted Danson: Disrupting the Collectibles Industry",
          url: "https://advancementstv.com/collectors-authentication/"
        },
        {
          title: "Cornell Tech: How to Navigate Tech Transformation",
          url: "https://pca.st/episode/e3b553d7-ab3a-419a-82ae-e8d2578a83c8"
        },
        {
          title: "Tech Debt to Tech Triumph: Dan Van Tran's Playbook for Technical Transformation",
          url: "https://www.round.tech/blog/tech-debt-to-tech-triumph-dan-van-trans-playbook-for-technical-transformation"
        },
        {
          title: "AWS: Collectors Leverages Custom Cloud Solutions to Drive Innovation",
          url: "https://www.linkedin.com/posts/dantran_collectors-leverages-custom-cloud-solutions-activity-7052739141653913600-vsL4"
        },
        {
          title: "Lead The Team: The Executive Revolutionizing the Collectibles Industry",
          url: "https://open.spotify.com/episode/1Sp2heQI42KJuarZmwS0yU"
        }
      ]
    },
    {
      name: "Smit Gujarathi",
      title: "Startup Architect & Tactical Engineering Builder",
      bio: [
        "With over 15 years at the forefront of technological innovation, Smit excels in turning groundbreaking ideas into scalable, market-ready products.",
        "His extensive background—from multinational enterprises to nimble startups—includes leading roles at Blackrock and Flatiron Health, as well as co-founding a startup that achieved a multi-million-dollar exit.",
        "Smit's expertise and entrepreneurial drive have been central to our clients' success."
      ],
      image: smitImage,
      linkedin: "#",
      links: [
        {
          title: "Digitizing Antiques Roadshow: How This One-Stop Shop is Changing Collectibles",
          url: "https://www.builtinla.com/articles/digitizing-antiques-roadshow-how-one-stop-shop-changing-collectibles"
        }
      ]
    },
    {
      name: "Roswell Hobbs",
      title: "Strategic Operations & Innovation Scaling Specialist",
      bio: [
        "Roswell brings over a decade of leadership and operational expertise to the team, she has lead high-growth initiatives in technology-driven companies.",
        "Known for orchestrating and executing complex, high-impact projects at organizations like Flatiron Health and Hailo, she has a unique ability to translate strategic visions into actionable, tech-enabled outcomes.",
        "At Collectors, she has helped to triple the valuation, quadruple headcount, and drive global scale while completing a full Operational and tech/UX overhaul. Roswell's hands-on approach and commitment to driving rapid innovation make her an essential partner in transforming ideas into market realities."
      ],
      image: roswellImage,
      linkedin: "https://www.linkedin.com/in/roswell-hobbs-59409659/"
    }
  ];

  return (
    <section id="leadership" className="pt-32 pb-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced leaders driving innovation and excellence
          </p>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:shadow-lg transition-all flex flex-col self-start"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-6 object-cover bg-secondary"
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-primary font-medium mb-4 text-center text-sm">{member.title}</p>
              </div>
              <div className="text-muted-foreground mb-6 leading-relaxed text-left text-sm space-y-3">
                {Array.isArray(member.bio) ? (
                  member.bio.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))
                ) : (
                  <p>{member.bio}</p>
                )}
              </div>
              
              {/* Links section for DVT */}
              {member.links && member.links.length > 0 && (
                <div className="mt-4 mb-4">
                  <p className="font-semibold mb-3 text-sm">Learn more:</p>
                  <ul className="space-y-2">
                    {member.links.slice(0, 3).map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 text-xs"
                        >
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          <span className="line-clamp-2">{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  {member.links.length > 3 && (
                    <Accordion type="single" collapsible className="mt-2">
                      <AccordionItem value="more-links" className="border-none">
                        <AccordionTrigger className="text-xs text-primary hover:text-primary/80 py-2">
                          See More
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {member.links.slice(3).map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a 
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 text-xs"
                                >
                                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                  <span className="line-clamp-2">{link.title}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </div>
              )}
              
              <div className="flex justify-center">
                <a 
                  href={member.linkedin}
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
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
