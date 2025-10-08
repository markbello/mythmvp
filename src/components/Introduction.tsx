import { Card } from "@/components/ui/card";

const Introduction = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block">
            <span className="text-accent font-semibold">Introduction</span>
            <span className="text-muted-foreground ml-2">/ Welcome To The Start Of Your Next Disruption</span>
          </div>
          <div className="h-px bg-border mt-4" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Building technical designs, roadmaps, products, and teams for{" "}
          <span className="gradient-text">next-generation startups and leaders</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          We partner with leaders in e-commerce, D2C, B2B, healthcare, finance, and more to accelerate innovation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Rapid Innovation</h3>
            <p className="text-muted-foreground">
              Launch new ideas quickly with architecture and organizational design plans typically 
              delivered in days or weeks, and projects typically delivered in 3–6 months.
            </p>
          </Card>
          
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Agile MVP Development</h3>
            <p className="text-muted-foreground">
              From concept to MVP in record time—one of our projects helped a company go from idea 
              to POC in 1–2 months and to a scalable MVP in 6 months, leading to an acquisition valued 
              in the tens of millions in less than 2 years.
            </p>
          </Card>
          
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Tailored Solutions</h3>
            <p className="text-muted-foreground">
              Whether you're seeking enterprise-grade infrastructure or low cash burn approaches, 
              we build and implement technical plans that meet your strategic goals.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
