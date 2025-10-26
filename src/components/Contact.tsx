import { Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  
  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="inline-block">
              <span className="text-accent font-semibold">Contact</span>
              <span className="text-muted-foreground ml-2">/ Let's connect</span>
            </div>
            <div className="h-px bg-border mt-4" />
          </div>
          
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your idea into <span className="gradient-text">reality?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Reach out and let's build the future together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-center">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">Ignite your project!</p>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:launch@mythmvp.com" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  launch@mythmvp.com
                </a>
              </div>
            </div>
            
            <div className="space-y-3 text-center">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">Prefer a direct call?</p>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:2013050515" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  (201) 305-0515
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
