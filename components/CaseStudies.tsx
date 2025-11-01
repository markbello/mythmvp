import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  const testimonials = [
    {
      industry: "HealthTech",
      title: "Clarity & Confidence in Health Tech Product Strategy",
      company: "Goldenscript",
      description: "Goldenscript needed structure and focus in their product and technology strategy. Myth MVP introduced formal frameworks that clarified priorities, strengthened the roadmap, and gave the team confidence to execute.",
      quote: "Partnering with Myth MVP gave us the clarity and confidence we were missing. They introduced formal frameworks that helped us structure our technology roadmap and added depth to our product strategy. Their approach cut through the noise and made it clear what we actually needed to focus on. The engagement was a success, and I'd highly recommend Myth MVP to any early-stage team looking for strong technical leadership and strategic guidance.",
      author: "Founder, Goldenscript"
    },
    {
      industry: "EdTech",
      title: "Roadmap Acceleration in Ed Tech",
      company: "HappiKid",
      description: "HappiKid needed both technical leadership and UX design support. Myth MVP strengthened their product roadmap, built a strong foundation, and gave the founder confidence in the strategy ahead.",
      quote: "Myth MVP provided the technical leadership and UX design expertise my team was missing. Their generous and highly communicative approach helped strengthen our product roadmap, solidify our technical foundation, and accelerate the path to development of our Ed Tech platform. I left our engagement with greater confidence in my strategy and a clear understanding of the path to success.",
      author: "Founder, HappiKid"
    },
    {
      industry: "Publishing",
      title: "Legacy Modernization Success",
      company: "Stocks and News",
      description: "After 26 years online, Stocks and News needed a full modernization. We rebuilt their entire platform with an SEO-friendly architecture — preserving decades of intellectual property while improving discoverability and donations.",
      quote: "Throughout the process, I worked with a single engineer who was always available through the discovery and production process and for an exchange of ideas. I couldn't be more pleased with the result, my intellectual property has been preserved, and, having a site that exists off donations, received three new ones in my first week that I know I wouldn't have otherwise. I strongly recommend Myth MVP, Dan, and his team.",
      author: "President, Stocks and News"
    }
  ];

  const activeCaseStudies = [
    {
      industry: "FinTech AI",
      title: "FP&A AI Startup",
      description: "Myth MVP is in active partnership with an AI-driven financial analysis startup to accelerate their product vision. We've stepped in as their on-demand CTO to clarify and execute on the technical roadmap. Through a retainer-based model, we provide ongoing technical leadership, architectural oversight, and strategic guidance to scale their platform. Beyond strategy, our team has been hands-on in recruiting and onboarding core technical talent, while also plugging in key experts in AI and security compliance to strengthen the product's foundation. By working closely with leadership, we've aligned engineering priorities, built out the team, and set a clear roadmap toward delivering on the company's ambitious, data-driven vision."
    },
    {
      industry: "HealthTech",
      title: "Drug Transparency Startup",
      description: "Myth MVP is partnering with a healthcare startup providing medical practices with transparent drug pricing data. We're delivering both on-demand CTO services and a production-ready MVP. Our team provides strategic technology leadership and has facilitated our first successful contract > permanent transition for a Head of Tech role. In addition to on-demand CTO support, we are architecting and building the company's insights platform, including scalable backend systems, robust data ingestion pipelines, and a user-friendly dashboard for real-time pricing, trends, and savings analysis. By embedding specialized expertise in data engineering, AI, and security readiness, we are ensuring the platform is both powerful and compliant. Together with our client, we are laying the foundation for a scalable product rollout to early customers while positioning the company for rapid growth."
    }
  ];

  return (
    <section id="case-studies" className="pt-32 pb-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies & Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We don&apos;t sell services you don&apos;t need. We only take on clients we believe in, and we only charge for work that drives clear results.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Client <span className="gradient-text">Testimonials</span>
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">{testimonial.industry}</Badge>
                  <h4 className="text-2xl font-bold mb-3">{testimonial.title}</h4>
                  <p className="text-muted-foreground mb-4">{testimonial.description}</p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <blockquote className="italic text-muted-foreground mb-3">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.author}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Case Studies Section */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Active <span className="gradient-text">Case Studies</span>
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {activeCaseStudies.map((caseStudy, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">{caseStudy.industry}</Badge>
                  <h4 className="text-2xl font-bold mb-3">{caseStudy.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
