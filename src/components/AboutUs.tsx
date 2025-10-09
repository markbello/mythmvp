import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      title: "Proven Track Record",
      description: "With decades of combined experience in both multinational enterprises and nimble startups, our portfolio includes projects that have generated millions in ARR."
    },
    {
      title: "Versatile Expertise",
      description: "We've built and scaled apps across industries—each solution customized to your unique market needs and budget."
    },
    {
      title: "Collaborative Partnership",
      description: "We join your team. We're highly collaborative, honest and feedback oriented. We match your energy and your pace."
    }
  ];

  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="gradient-text">Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
            We transform your ideas into market-ready solutions, managing technical complexities as your interim technology partner so you can focus on your core business.
          </p>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary transition-colors"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
