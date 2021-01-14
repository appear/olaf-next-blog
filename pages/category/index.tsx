import React, { useMemo, useState, useEffect } from 'react'
import { NextPageContext } from 'next'
import styled from 'styled-components'

import siteMeta from '../../config'

import Layout from '$components/layout'
import { getAllRawPosts } from '$utils/file'
import { generatePostsFormRawData } from '$posts/utils'

interface CategoryPageProps {
  rawData: Record<string, string[]>
  initialCategory: string
}

const Container = styled.div``

export default function CategoryPage({
  rawData,
  initialCategory,
}: CategoryPageProps) {
  const [selectedCategory, setCategory] = useState(initialCategory)
  const contents = useMemo(() => generatePostsFormRawData(rawData), [rawData])

  useEffect(() => {
    if (contents) {
      setCategory(contents[initialCategory] ? initialCategory : 'ALL')
    }
  }, [contents]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout
      seo={{
        ...siteMeta,
      }}
    >
      <Container></Container>
    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const rawData = await getAllRawPosts()
  const { name } = context.query

  return {
    props: {
      rawData,
      initialCategory: name as string,
    },
  }
}
