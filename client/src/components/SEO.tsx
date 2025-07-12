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
    title: title || "Maximally - Global Teen Hackathon Platform",
    description: description || "Join the world's premier teen hackathon platform. AI shipathons, startup makeathons & Gen Z builder challenges. Global innovation league for ambitious teens.",
    image: image || "/og-thumbnail.png",
    url: canonicalUrl || `https://maximally.in${pathname}`,
    keywords: keywords || "teen hackathons, global hackathons, startup makeathons, AI shipathon, Gen Z builders, teen innovation, global tech"
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
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
      <link rel="canonical" href={seo.url} />
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Default Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Maximally",
          "description": "The world's premier teen hackathon platform. AI shipathons, startup makeathons & Gen Z builder challenges.",
          "url": "https://maximally.in",
          "logo": "https://maximally.in/og-thumbnail.png",
          "sameAs": [
            "https://www.instagram.com/maximally.in/",
            "https://twitter.com/maximally_in",
            "https://www.linkedin.com/company/maximallyedu"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://maximally.in/contact"
          }
        })}
      </script>
      
      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;