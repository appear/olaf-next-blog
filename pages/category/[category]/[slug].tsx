import React, { useMemo } from 'react'
import { NextPageContext } from 'next'
import matter from 'gray-matter'

import { getAsyncFile } from '$utils/file'
import Layout from '$components/layout'
import { Post } from '$types/post'
import MarkdownPost from '$components/detail/markdown-post'

interface PostPageProps {
  rawData: string
  category?: string
}

function PostPage({ category, rawData }: PostPageProps) {
  const post = useMemo(() => {
    const { data, content } = matter(rawData)

    return {
      data,
      content,
    } as {
      data: Post
      content: string
    }
  }, [rawData])

  const { data } = post

  return (
    <Layout
      seo={{
        ...data,
      }}
    >
      <MarkdownPost category={category} post={post} />
    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { category, slug } = context.query

  const rawData = await getAsyncFile(`${category}/${slug}.md`)

  return {
    props: {
      rawData,
    },
  }
}

export default PostPage
