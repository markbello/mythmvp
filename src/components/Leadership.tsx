import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Co-Founder Name 1",
      title: "Co-Founder & CEO",
      bio: "Brief bio highlighting expertise, background, and credibility. Previous roles and achievements that establish trust.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "Co-Founder Name 2",
      title: "Co-Founder & CTO",
      bio: "Brief bio highlighting technical expertise, background, and credibility. Previous roles and achievements that establish trust.",
      image: "/placeholder.svg",
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
