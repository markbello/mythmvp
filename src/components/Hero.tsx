import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We Don't Just Build MVPs.{" "}
          <br />
          We Build Your Company's{" "}
          <span className="gradient-text">Momentum</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          At Myth MVP, we turn your <strong className="text-foreground">bold ideas</strong> into{" "}
          <strong className="text-foreground">agile, scalable solutions</strong>—fast. Whether you're 
          launching a new innovation or evolving outdated technology, our team delivers proof-of-concepts, 
          MVPs, and fully operational products that drive{" "}
          <strong className="text-foreground">growth</strong> and{" "}
          <strong className="text-foreground">high-value exits</strong>.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
          We empower you to <strong className="text-foreground">start building your vision immediately</strong>, 
          whether you're awaiting the hire of a full-time CTO or already have an existing Head of Tech. 
          Our services ensure <strong className="text-foreground">seamless progress at any stage</strong>.
        </p>
        
        <Button size="lg" className="glow-effect text-lg px-8 py-6">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
