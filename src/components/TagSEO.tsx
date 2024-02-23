import Head from "next/head"

interface OgProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

interface TagSEOProps {
  title?: string
  description?: string
  keywords?: string
  og?: OgProps
  canonicalSlug: string // This is required, so it doesn't have a question mark
  children?: React.ReactNode
}

// Predefined SEO tags — prefilled with default values but you can customize them for each page
// This let you add default SEO tags to all pages, like /terms, /privacy, without rewrtting them all

const appName = "Tax Tools"
const domainName = "https://tax-tools.vercel.app/"

const defaults = {
  title: `up to 50 characters | ${appName}`,
  description: "60 to 180 characters",
  keywords: `Some other keywords if needed`,
  og: {
    title: `up to 50 characters | ${appName}`,
    description: "60 to 180 characters",
    image: `https://${domainName}/shareMain.png`,
    url: `https://${domainName}/`,
  },
}

// This components should be added to every pages you want to rank on Google (in /pages directory).
// It prefills data with default title/description/OG but you can cusotmize it for each page.
// REQUIRED: The canonicalSlug is required for each page (it's the slug of the page, without the domain name and without the trailing slash)
const TagSEO: React.FC<TagSEOProps> = ({
  children,
  title,
  description,
  keywords,
  og,
  canonicalSlug,
}) => {
  return (
    <Head>
      {/* TITLE */}
      <title key="title">{title || defaults.title}</title>

      {/* METAS */}
      <meta name="description" key="description" content={description || defaults.description} />
      <meta name="keywords" key="keywords" content={keywords || defaults.keywords} />

      {/* OG METAS */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={og?.title || defaults.og.title} />
      <meta
        property="og:description"
        key="og:description"
        content={og?.description || defaults.og.description}
      />
      <meta property="og:image" key="og:image" content={og?.image || defaults.og.image} />
      <meta property="og:url" content={og?.url || defaults.og.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@marc_louvion" />

      {/* CANONICAL TAG */}
      <link rel="canonical" href={`https://${domainName}/${canonicalSlug}`} />

      {/* CHILDREN TAGS */}
      {children}
    </Head>
  )
}

export default TagSEO
