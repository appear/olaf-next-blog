import React, { useMemo } from 'react'
import { format } from 'date-fns'
import { NextPageContext } from 'next'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import Layout from '../src/components/layout'
import { getFile } from '../src/utils/file'
import style from '../src/components/post/style'

const Container = styled.div`
  ${style}

  padding: 0 20px 70px 20px;
  margin-top: 30px;
`

const Header = styled.div`
  font-size: 14px;
  opacity: 0.6;
  margin-bottom: 15px;
`

interface PostProps {
  rawData: string
}

function Post({ rawData }: PostProps) {
  const data = useMemo(() => matter(rawData), [rawData])
  const {
    data: { slug, summary, title, date, category, thumbnail },
    content,
  } = data

  return (
    <Layout
      seo={{
        title,
        summary,
        slug,
        thumbnail,
      }}
    >
      <Container>
        <Header>
          <span>{format(date, 'yyyy-MM-dd')}</span>
          {category && <span>{`  ·  ${category}`}</span>}
        </Header>
        <ReactMarkdown escapeHtml={true} source={content} />
      </Container>
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
