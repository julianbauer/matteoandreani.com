import Head from 'next/head'

export default function Meta({ title, description }) {
  const titleContent = title ? title : 'Matteo Andreani – Photographer'
  const descriptionContent = description ? description : ''
  const imageContent = process.env.NEXT_STATIC_BASE_URL + ''

  return (
    <Head>
      <title>{titleContent}</title>
      <meta key="title" name="title" content={titleContent} />
      <meta key="description" name="description" content={descriptionContent} />

      <meta key="image" name="image" content={imageContent} />
      <meta
        key="twitter-card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter-title" name="twitter:title" content={titleContent} />
      <meta
        key="twitter-description"
        name="twitter:description"
        content={descriptionContent}
      />
      <meta
        key="twitter-image"
        property="twitter:image"
        content={imageContent}
      />
      <meta key="og-title" property="og:title" content={titleContent} />
      <meta
        key="og-description"
        property="og:description"
        content={descriptionContent}
      />
      <meta key="og-image" property="og:image" content={imageContent} />
      <meta key="og-type" property="og:type" content="website" />
    </Head>
  )
}
