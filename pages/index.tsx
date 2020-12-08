import React, { useMemo } from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import Link from 'next/link'

import Layout from '../src/components/layout'
import siteMeta from '../config'
import { getAllFiles } from '../src/utils/file'
import Posts from '../src/components/posts'

interface HomeProps {
  rawData: string[]
}

export default function Home({ rawData }: HomeProps) {
  const data = useMemo(() => rawData.map((raw) => matter(raw)), [rawData])

  console.log(data)

  return (
    <Layout
      seo={{
        ...siteMeta,
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.map(({ data: { slug, title } }) => (
        <Link href={`/${slug}`} key={slug}>
          {title}
        </Link>
      ))}
      {/* <Posts data={data} /> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const rawData = getAllFiles()

  return {
    props: {
      rawData,
    },
  }
}
