/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  titleTemplate: "%s",
  defaultTitle: "AI Keyboard",
  description: "Generate anything at your keyboard",
  canonical: "https://aikeyboard.app",
  openGraph: {
    url: "https://aikeyboard.app",
    title: "AI Keyboard",
    description: "Generate anything at your keyboard",
    images: [
      {
        url: "/SEO_image.png",
        alt: "AI Keyboard og-image",
      },
    ],
    site_name: "Ai Keyboard",
  },
  twitter: {
    handle: "@kevinahmad",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
