import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mythmvp.com";
  return {
    props: {
      siteUrl,
    },
  };
};

interface NotFoundProps {
  siteUrl: string;
}

export default function NotFound({ siteUrl }: NotFoundProps) {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | MYTH MVP</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
          type="image/png"
        />
        <meta
          property="og:image"
          content={`${siteUrl}/cropped-myth-mvp-logomark-270x270.png`}
        />
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
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <Link
            href="/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
