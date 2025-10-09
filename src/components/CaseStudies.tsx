import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Client Project 1",
      industry: "FinTech",
      challenge: "Brief description of the client's challenge or pain point",
      solution: "How Myth MVP addressed the challenge",
      results: [
        "Specific metric or outcome achieved",
        "Time to market or efficiency gain",
        "Business impact or value delivered"
      ],
      testimonial: {
        quote: "Client testimonial highlighting the value and impact of working with Myth MVP.",
        author: "Client Name",
        position: "Position, Company"
      }
    },
    {
      title: "Client Project 2",
      industry: "HealthTech",
      challenge: "Brief description of the client's challenge or pain point",
      solution: "How Myth MVP addressed the challenge",
      results: [
        "Specific metric or outcome achieved",
        "Time to market or efficiency gain",
        "Business impact or value delivered"
      ],
      testimonial: {
        quote: "Client testimonial highlighting the value and impact of working with Myth MVP.",
        author: "Client Name",
        position: "Position, Company"
      }
    },
    {
      title: "Client Project 3",
      industry: "E-Commerce",
      challenge: "Brief description of the client's challenge or pain point",
      solution: "How Myth MVP addressed the challenge",
      results: [
        "Specific metric or outcome achieved",
        "Time to market or efficiency gain",
        "Business impact or value delivered"
      ],
      testimonial: {
        quote: "Client testimonial highlighting the value and impact of working with Myth MVP.",
        author: "Client Name",
        position: "Position, Company"
      }
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies & Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from real partnerships
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">{study.industry}</Badge>
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <blockquote className="italic text-muted-foreground mb-3">
                  "{study.testimonial.quote}"
                </blockquote>
                <p className="text-sm font-medium text-foreground">
                  {study.testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {study.testimonial.position}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
