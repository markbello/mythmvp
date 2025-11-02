import { GetStaticProps } from "next";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mythmvp.com";
  return {
    props: {
      siteUrl,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

interface HomeProps {
  siteUrl: string;
}

export default function Home({ siteUrl }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          Myth MVP - We Build Momentum | Proof of Concepts, MVPs, and Complete
          Builds
        </title>
        <meta
          name="description"
          content="Whether launching something new or modernizing outdated technology, we deliver Proof of Concepts, Minimum Viable Products, and Complete Builds that drive growth and high-value exits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
          type="image/png"
        />
        <meta property="og:title" content="Myth MVP - We Build Momentum" />
        <meta
          property="og:description"
          content="We deliver Proof of Concepts, MVPs, and Complete Builds that drive growth and high-value exits."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${siteUrl}/cropped-myth-mvp-logomark-270x270.png`}
        />
        <meta property="og:image:width" content="270" />
        <meta property="og:image:height" content="270" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content={`${siteUrl}/cropped-myth-mvp-logomark-270x270.png`}
        />
        <link
          rel="apple-touch-icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
        />
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
