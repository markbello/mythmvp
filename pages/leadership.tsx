import { GetStaticProps } from 'next';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import Leadership from "@/components/Leadership";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // Revalidate every hour
  };
};

export default function LeadershipPage() {
  return (
    <>
      <Head>
        <title>Leadership - MYTH MVP | Meet Our Team</title>
        <meta 
          name="description" 
          content="Meet the leadership team at MYTH MVP. Learn about our experienced founders and their expertise in building successful products and companies." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Leadership - MYTH MVP" />
        <meta property="og:description" content="Meet the leadership team at MYTH MVP." />
        <meta property="og:type" content="website" />
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

