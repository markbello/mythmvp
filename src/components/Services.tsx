import { Card } from "@/components/ui/card";
import { Rocket, Code, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Transform your vision into a working product with our rapid MVP development process."
    },
    {
      icon: Code,
      title: "Technical Architecture",
      description: "Build scalable, robust technical foundations that grow with your business."
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Assemble and manage high-performing technical teams tailored to your needs."
    },
    {
      icon: Zap,
      title: "Product Strategy",
      description: "Develop comprehensive roadmaps that align technology with business objectives."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life and scale your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-all hover:scale-105 duration-300"
            >
              <service.icon className="w-12 h-12 mb-4 text-primary" />
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
