import { GetStaticProps } from "next";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Leadership from "@/components/Leadership";
import WhyChooseUs from "@/components/WhyChooseUs";
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

interface LeadershipPageProps {
  siteUrl: string;
}

export default function LeadershipPage({ siteUrl }: LeadershipPageProps) {
  return (
    <>
      <Head>
        <title>Leadership - Myth MVP | Meet Our Team</title>
        <meta
          name="description"
          content="Meet the leadership team at Myth MVP. Learn about our experienced founders and their expertise in building successful products and companies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
          type="image/png"
        />
        <meta property="og:title" content="Leadership - Myth MVP" />
        <meta
          property="og:description"
          content="Meet the leadership team at Myth MVP."
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
        <Leadership />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
