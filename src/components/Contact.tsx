import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to transform your idea into reality? Get in touch with us today.
          </p>
          
          <div className="flex items-center justify-center gap-3 text-lg">
            <Mail className="w-6 h-6 text-primary" />
            <a 
              href="mailto:contact@mythmvp.com" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              contact@mythmvp.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
