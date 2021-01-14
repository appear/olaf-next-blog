import React, { useMemo } from 'react'
import styled from 'styled-components'

import Layout from '$components/layout'
import { getAllRawPosts } from '$utils/file'
import Card from '$components/posts/post-list'
import { generatePostsFormRawData } from '$utils/post'

import siteMeta from '../config'

interface MainPageProps {
  rawData: Record<string, string[]>
}

const Container = styled.div``

export default function MainPage({ rawData }: MainPageProps) {
  const contents = useMemo(() => generatePostsFormRawData(rawData), [rawData])

  return (
    <Layout
      seo={{
        ...siteMeta,
      }}
    >
      <Container>
        {Object.entries(contents).map(([category, posts]) => {
          return <Card key={category} category={category} posts={posts} />
        })}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const rawData = await getAllRawPosts()

  return {
    props: {
      rawData,
    },
  }
}
