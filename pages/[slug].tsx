import React, { useMemo } from 'react'
import { NextPageContext } from 'next'
import matter from 'gray-matter'

import Layout from '../src/components/layout'
import { getFile } from '../src/utils/file'

interface PostProps {
  rawData: string
}

function Post({ rawData }: PostProps) {
  const data = useMemo(() => matter(rawData), [rawData])
  const {
    data: { slug, summary, title },
  } = data

  return (
    <Layout
      seo={{
        title,
        summary,
        slug,
      }}
    >
      <h1>Blog</h1>
    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { slug } = context.query

  return {
    props: {
      rawData: await getFile(slug as string),
    },
  }
}

export default Post
