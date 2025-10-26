import { Card } from "@/components/ui/card";
import { Rocket, Code, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: icon1Ref, isVisible: icon1Visible } = useScrollAnimation();
  const { ref: icon2Ref, isVisible: icon2Visible } = useScrollAnimation();
  const { ref: icon3Ref, isVisible: icon3Visible } = useScrollAnimation();
  const { ref: icon4Ref, isVisible: icon4Visible } = useScrollAnimation();
  
  const services = [
    {
      icon: Rocket,
      iconClass: "icon-rocket",
      ref: icon1Ref,
      isVisible: icon1Visible,
      title: "MVP Development",
      description: "Transform your vision into a working product with our rapid MVP development process."
    },
    {
      icon: Code,
      iconClass: "icon-code",
      ref: icon2Ref,
      isVisible: icon2Visible,
      title: "Technical Architecture",
      description: "Build scalable, robust technical foundations that grow with your business."
    },
    {
      icon: Users,
      iconClass: "icon-users",
      ref: icon3Ref,
      isVisible: icon3Visible,
      title: "Team Building",
      description: "Assemble and manage high-performing technical teams tailored to your needs."
    },
    {
      icon: Zap,
      iconClass: "icon-zap",
      ref: icon4Ref,
      isVisible: icon4Visible,
      title: "Product Strategy",
      description: "Develop comprehensive roadmaps that align technology with business objectives."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative scroll-mt-20 border-t-2 border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-primary/5 to-transparent" />
      <div ref={ref} className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12">
          <div className="inline-block">
            <span className="text-accent font-semibold">Services</span>
            <span className="text-muted-foreground ml-2">/ What we offer</span>
          </div>
          <div className="h-px bg-border mt-4" />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life and scale your business
          </p>
          <div className="mt-6">
            <a 
              href="/case-studies" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Case Studies & Testimonials →
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={service.ref}
              className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <service.icon className={`w-12 h-12 mb-4 text-primary ${service.isVisible ? service.iconClass : 'opacity-0'}`} />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
