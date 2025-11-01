import { GetStaticProps } from 'next';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // Revalidate every hour
  };
};

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies - MYTH MVP | Our Work and Success Stories</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful projects including Proof of Concepts, MVPs, and complete builds that have driven growth and high-value exits." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Case Studies - MYTH MVP" />
        <meta property="og:description" content="Explore our portfolio of successful projects and case studies." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen">
        <Navigation />
        <CaseStudies />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

