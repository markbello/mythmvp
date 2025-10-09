import logo from "@/assets/myth-mvp-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="MYTH MVP" className="h-8 mb-2" />
            <p className="text-sm text-muted-foreground">
              Building your company's momentum
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/leadership" className="hover:text-primary transition-colors">Leadership</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Myth MVP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
