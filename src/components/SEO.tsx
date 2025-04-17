
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

const SEO = ({ title, description, image, article, keywords, canonicalUrl, structuredData }: SEOProps) => {
  const { pathname } = useLocation();
  const seo = {
    title: title || "Maximally - Learn Real-World Skills for Indian Teenagers",
    description: description || "Join India's premier skill development platform for teenagers. Learn AI, Digital Marketing, Public Speaking & more through hands-on bootcamps.",
    image: image || "https://maximally.in/og-image.jpg",
    url: canonicalUrl ? `https://maximally.in${canonicalUrl}` : `https://maximally.in${pathname}`
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {keywords && <meta name="keywords" content={keywords} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {!article && <meta property="og:type" content="website" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {canonicalUrl && <link rel="canonical" href={`https://maximally.in${canonicalUrl}`} />}
      {/* Favicons - Added back from original code */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
