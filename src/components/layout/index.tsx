import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import siteMeta from '../../../config'
import Header from './header'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

interface SEO {
  title: string
  summary?: string
  thumbnail?: string
  slug?: string
}

interface LayoutProps {
  children: React.ReactNode
  seo?: SEO
}

export default function Layout({
  children,
  seo = {
    title: 'olaf-dev-blog',
    summary: '테스트',
    thumbnail: '',
    slug: '',
  },
}: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="subject" content={seo.title} />
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.summary} />
        <meta name="author" content={'테스트'} />
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
      <Header />
      <Container>{children}</Container>
    </>
  )
}
