import { GetStaticProps } from 'next';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // Revalidate every hour
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>MYTH MVP - We Build Momentum | Proof of Concepts, MVPs, and Complete Builds</title>
        <meta 
          name="description" 
          content="Whether launching something new or modernizing outdated technology, we deliver Proof of Concepts, Minimum Viable Products, and Complete Builds that drive growth and high-value exits." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="MYTH MVP - We Build Momentum" />
        <meta property="og:description" content="We deliver Proof of Concepts, MVPs, and Complete Builds that drive growth and high-value exits." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Introduction />
        <Services />
        <HowWeWork />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

