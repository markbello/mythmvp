import { Card } from "@/components/ui/card";

const Introduction = () => {
  return (
    <section id="about" className="py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Rapid Delivery</h3>
            <p className="text-muted-foreground">
              We launch faster. Architecture and org design in days, products in 3–6 months. On average, Myth projects save clients 9 months to launch and $175K in tech debt.
            </p>
          </Card>
          
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Team Development</h3>
            <p className="text-muted-foreground">
              We help you scale teams the right way - advising on org structure, guiding technical recruiting, and facilitating contract-to-hire on builds so you can evaluate engineers before making a long-term commitment.
            </p>
          </Card>
          
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Agile Product Development</h3>
            <p className="text-muted-foreground">
              Proof of Concept in 2 months, scalable MVP in 6 months. A recent Myth MVP build following this framework enabled an acquisition worth $20M in 18 months.
            </p>
          </Card>
          
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Tailored Solutions</h3>
            <p className="text-muted-foreground">
              From enterprise-grade infrastructure to lean, cost-efficient builds, we design solutions aligned with your strategy and financial goals.
            </p>
          </Card>
          
          <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 gradient-text">Engineering Without Pitfalls</h3>
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
