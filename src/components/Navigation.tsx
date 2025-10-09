import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/myth-mvp-logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <img src={logo} alt="MYTH MVP" className="h-12" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="/#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a href="/leadership" className="text-foreground hover:text-primary transition-colors">
              Leadership
            </a>
            <a 
              href="/#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </a>
            <a 
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
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
