import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 scroll-mt-20 bg-secondary/20 border-y-2 border-border">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12">
          <div className="inline-block">
            <span className="text-accent font-semibold">About Us</span>
            <span className="text-muted-foreground ml-2">/ Our foundation</span>
          </div>
          <div className="h-px bg-border mt-4" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="gradient-text">Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
            We transform your ideas into market-ready solutions, managing technical complexities as your interim technology partner so you can focus on your core business.
          </p>
          
          <div className="text-center">
            <a 
              href="/leadership" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Meet Our Leadership Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
