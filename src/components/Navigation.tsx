import { Button } from "@/components/ui/button";
import logo from "@/assets/myth-mvp-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="MYTH MVP" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/leadership" className="text-foreground hover:text-primary transition-colors">
              Leadership
            </a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </a>
            <a href="/#contact">
              <Button>
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
