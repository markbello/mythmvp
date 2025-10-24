import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();
  
  const features = [
    {
      title: "Proven Track Record",
      description: "With decades of combined experience in both multinational enterprises and nimble startups, our portfolio includes projects that have generated millions in ARR.",
      ref: card1Ref,
      isVisible: card1Visible
    },
    {
      title: "Versatile Expertise",
      description: "We've built and scaled apps across industries—each solution customized to your unique market needs and budget.",
      ref: card2Ref,
      isVisible: card2Visible
    },
    {
      title: "Collaborative Partnership",
      description: "We join your team. We're highly collaborative, honest and feedback oriented. We match your energy and your pace.",
      ref: card3Ref,
      isVisible: card3Visible
    }
  ];

  return (
    <section id="about" className="py-24 scroll-mt-20 bg-secondary/20 border-y-2 border-border">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="gradient-text">Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
            We transform your ideas into market-ready solutions, managing technical complexities as your interim technology partner so you can focus on your core business.
          </p>
          
          <div className="text-center mb-12">
            <a 
              href="/leadership" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Meet Our Leadership Team →
            </a>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                ref={feature.ref}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <CheckCircle2 
                    className={`w-6 h-6 text-primary shrink-0 mt-1 ${
                      feature.isVisible ? 'animate-burst-delayed' : 'opacity-0 scale-0'
                    }`}
                  />
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
