import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 pt-28 pb-24 md:py-0">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(/assets/hero-bg-abstract.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-secondary/40 to-primary/10" />
      
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          We Don&apos;t Just Build Products.{" "}
          <br />
          We Build{" "}
          <span className="gradient-text">Momentum</span>.
        </h1>
        
        <p className="text-left md:text-center text-lg md:text-xl text-muted-foreground max-w-4xl md:mx-auto mb-8 leading-relaxed">
          Whether launching something new or modernizing outdated technology, we deliver{" "}
          <strong className="text-foreground">Proof of Concepts</strong>,{" "}
          <strong className="text-foreground">Minimum Viable Products</strong>, and{" "}
          <strong className="text-foreground">Complete Builds</strong> that drive growth and high-value exits.
        </p>
        
        <p className="text-left md:text-center text-lg md:text-xl text-muted-foreground max-w-4xl md:mx-auto mb-12">
          We empower you to <strong className="text-foreground">start building right away</strong>. 
          We can own builds end-to-end, or work alongside your Head of Tech. 
          Our services flex to any stage and any team.
        </p>
        
        <Button size="lg" className="text-lg px-8 py-6 hover-scale" onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
