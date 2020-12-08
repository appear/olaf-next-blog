import React from 'react'
import Head from 'next/head'

import siteMeta from '../../../config'

export interface SEO {
  title: string
  summary?: string
  thumbnail?: string
  slug?: string
}

export default function Seo({ seo = siteMeta }: { seo?: SEO }) {
  return (
    <Head>
      <meta name="subject" content={seo.title} />
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.summary} />
      <meta name="author" content={siteMeta.author} />
      <meta name="keywords" content={seo.title} />
      <meta property="og:image" content={seo.thumbnail} />
      <meta property="og:description" content={seo.summary} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${siteMeta.url.concat(seo.slug ? `/${seo.slug}` : '')}`}
      />
    </Head>
  )
}
