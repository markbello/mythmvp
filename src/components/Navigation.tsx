import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/myth-mvp-logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      // Already on homepage, just scroll
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage first, then scroll
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handlePageNav = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img src={logo} alt="Myth MVP" className="h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=open]:bg-primary/10">
                Home <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem
                  onClick={(e) => handleNavClick(e as any, "about")}
                  className="py-3 cursor-pointer hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                >
                  About Us
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => handleNavClick(e as any, "services")}
                  className="py-3 cursor-pointer hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                >
                  Services
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => handleNavClick(e as any, "how-we-work")}
                  className="py-3 cursor-pointer hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                >
                  How We Work
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="/leadership"
              className="text-foreground hover:text-primary transition-colors"
            >
              Leadership
            </a>
            <a
              href="/case-studies"
              className="text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>
              <Button>Contact Us</Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex flex-col space-y-3">
                  <span className="text-lg font-medium text-foreground">
                    Home
                  </span>
                  <div className="flex flex-col space-y-2 pl-4">
                    <a
                      href="/#about"
                      onClick={(e) => handleNavClick(e, "about")}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="/#services"
                      onClick={(e) => handleNavClick(e, "services")}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="/#how-we-work"
                      onClick={(e) => handleNavClick(e, "how-we-work")}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      How We Work
                    </a>
                  </div>
                </div>
                <a
                  href="/leadership"
                  onClick={() => handlePageNav("/leadership")}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  Leadership
                </a>
                <a
                  href="/case-studies"
                  onClick={() => handlePageNav("/case-studies")}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  <Button className="w-full">Contact Us</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
