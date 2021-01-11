import React, { useMemo } from 'react'
import matter from 'gray-matter'
import styled from 'styled-components'

import AppearSection from '../src/components/shared/appear-section'
import Layout from '../src/components/layout'
import siteMeta from '../config'
import { getAllRawPosts } from '../src/utils/file'
import Card, { Post } from '../src/components/posts/post'

import { generatePostsFormRawData } from '$posts/utils'

console.log(generatePostsFormRawData)

interface HomeProps {
  rawData: string[]
}

const ListContainer = styled.ul``
const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`

export default function MainPage({ rawData }: HomeProps) {
  // console.log('data', generatePostsFormRawData(rawData))

  return (
    <Layout
      seo={{
        ...siteMeta,
      }}
    >
      <AppearSection>
        <Title>최근 포스트.</Title>
        <ListContainer>
          {/* {data.map(({ data }) => (
            <Card key={data.slug} post={data as Post} />
          ))} */}
        </ListContainer>
      </AppearSection>
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
