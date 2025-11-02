import { GetStaticProps } from "next";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import CaseStudies from "@/components/CaseStudies";
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

interface CaseStudiesPageProps {
  siteUrl: string;
}

export default function CaseStudiesPage({ siteUrl }: CaseStudiesPageProps) {
  return (
    <>
      <Head>
        <title>Case Studies - Myth MVP | Our Work and Success Stories</title>
        <meta
          name="description"
          content="Explore our portfolio of successful projects including Proof of Concepts, MVPs, and complete builds that have driven growth and high-value exits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
          type="image/png"
        />
        <meta property="og:title" content="Case Studies - Myth MVP" />
        <meta
          property="og:description"
          content="Explore our portfolio of successful projects and case studies."
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
        <CaseStudies />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
