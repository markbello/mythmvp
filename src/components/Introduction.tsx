import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Rocket, Users, Layers, Shield } from "lucide-react";

const Introduction = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: icon1Ref, isVisible: icon1Visible } = useScrollAnimation();
  const { ref: icon2Ref, isVisible: icon2Visible } = useScrollAnimation();
  const { ref: icon3Ref, isVisible: icon3Visible } = useScrollAnimation();
  const { ref: icon4Ref, isVisible: icon4Visible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-24 bg-background relative scroll-mt-20 border-t-2 border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
      <div ref={ref} className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12">
          <div className="inline-block">
            <span className="text-accent font-semibold">Introduction</span>
            <span className="text-muted-foreground ml-2">/ The way we work</span>
          </div>
          <div className="h-px bg-border mt-4" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Rapid builds, tailored solutions, and{" "}
          <span className="gradient-text">technology transformations</span> - trusted by founders and owners across industries.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          We partner with leaders in e-commerce, D2C, B2B, education, healthcare, finance, and more to accelerate innovation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card ref={icon1Ref} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Rocket className={`w-8 h-8 mb-4 text-primary ${icon1Visible ? 'icon-animate' : 'opacity-0 scale-0'}`} />
            <h3 className="text-xl font-bold mb-4">Rapid Delivery</h3>
            <p className="text-muted-foreground">
              We launch faster. Architecture and org design in days, products in 3–6 months. On average, Myth projects save clients 9 months to launch and $175K in tech debt. A recent Myth MVP build following this framework enabled an acquisition worth $20M in 18 months.
            </p>
          </Card>
          
          <Card ref={icon2Ref} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Users className={`w-8 h-8 mb-4 text-primary ${icon2Visible ? 'icon-animate' : 'opacity-0 scale-0'}`} />
            <h3 className="text-xl font-bold mb-4">Team Development</h3>
            <p className="text-muted-foreground">
              We help you scale teams the right way - advising on org structure, guiding technical recruiting, and facilitating contract-to-hire on builds so you can evaluate engineers before making a long-term commitment.
            </p>
          </Card>
          
          <Card ref={icon3Ref} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Layers className={`w-8 h-8 mb-4 text-primary ${icon3Visible ? 'icon-animate' : 'opacity-0 scale-0'}`} />
            <h3 className="text-xl font-bold mb-4">Tailored Solutions</h3>
            <p className="text-muted-foreground">
              From enterprise-grade infrastructure to lean, cost-efficient builds, we design solutions aligned with your strategy and financial goals.
            </p>
          </Card>
          
          <Card ref={icon4Ref} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Shield className={`w-8 h-8 mb-4 text-primary ${icon4Visible ? 'icon-animate' : 'opacity-0 scale-0'}`} />
            <h3 className="text-xl font-bold mb-4">Engineering Without Pitfalls</h3>
            <p className="text-muted-foreground">
              Avoid costly technical mistakes or resolve existing tech debt. We've learned the hard way so that you don't have to.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
