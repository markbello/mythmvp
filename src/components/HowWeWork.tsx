import { Card } from "@/components/ui/card";
import { Search, Zap, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowWeWork = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "On-Demand CTO + Growth Partner Services & Technical Team Recruitment",
      description: "Navigating the complexities of technology leadership and team building can be challenging for emerging startups. Myth MVP offers On-Demand CTO + Growth Partner services, providing strategic technical direction and overseeing development to ensure alignment with your business objectives. Additionally, we assist in evaluating and hiring a permanent CTO and initial tech team, ensuring a seamless transition and sustained growth."
    },
    {
      number: "02",
      icon: Search,
      title: "Discovery",
      description: "We start by understanding your idea, challenges, and strategic goals, developing them into concrete technical strategy and design documents that include both organizational and technical details."
    },
    {
      number: "03",
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Our experienced team builds agile proof-of-concepts and MVPs to validate your vision."
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Iterate & Scale",
      description: "Based on real-world feedback, we refine your product and build scalable solutions that propel your business forward."
    }
  ];

  return (
    <section id="how-we-work" className="py-24 scroll-mt-20 bg-secondary/30 border-y-2 border-border">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process takes you from concept to market-ready product
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-300 relative group"
            >
              <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors duration-300">
                {step.number}
              </div>
              <step.icon className="w-12 h-12 mb-4 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-muted-foreground relative z-10">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
