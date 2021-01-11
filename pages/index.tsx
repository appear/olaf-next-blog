import React, { useMemo } from 'react'
import styled from 'styled-components'

import Layout from '../src/components/layout'
import siteMeta from '../config'
import { getAllRawPosts } from '../src/utils/file'

import Card from '$posts/card'
import { generatePostsFormRawData } from '$posts/utils'

interface HomeProps {
  rawData: Record<string, string[]>
}

const Container = styled.div`
  padding: 0 20px;
`

export default function MainPage({ rawData }: HomeProps) {
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
