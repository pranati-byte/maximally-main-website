
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  keywords?: string;
  author?: string;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  structuredData,
  keywords = "entrepreneurship, public speaking, digital marketing, video editing, student skills",
  author = "Maximally"
}: SEOProps) => {
  const baseUrl = 'https://maximally.in';
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const imageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-default.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}, skill development, online learning, student programs, teen education, youth entrepreneurship, digital skills, skill building, career development, personal growth, india education`} />
      <meta name="author" content={author} />
      {/* Additional SEO tags */}
      <meta name="language" content="en" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="abstract" content="Maximally - The premier platform for teen skill development and career growth in India" />
      <meta name="rating" content="General" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Maximally" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@maximally" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {/* Basic structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Maximally",
          "url": "https://maximally.in",
          "logo": `${baseUrl}/logo.png`,
          "sameAs": [
            "https://twitter.com/maximally",
            "https://instagram.com/maximally.in",
            "https://linkedin.com/company/maximally"
          ]
        })}
      </script>
      
      {/* Additional structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
