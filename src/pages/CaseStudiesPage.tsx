import Navigation from "@/components/Navigation";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
