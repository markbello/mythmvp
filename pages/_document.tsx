import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/cropped-myth-mvp-logomark-270x270.png"
        />
        <meta name="theme-color" content="#0066cc" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
