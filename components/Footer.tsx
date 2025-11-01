import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Image src="/assets/myth-mvp-logo.png" alt="MYTH MVP" width={100} height={32} className="h-8 mb-2 w-auto" />
            <p className="text-sm text-muted-foreground">
              Building your company&apos;s momentum
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/leadership" className="hover:text-primary transition-colors">Leadership</Link>
            <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
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
