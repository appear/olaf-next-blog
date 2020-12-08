import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { format } from 'date-fns'

export type Post = {
  slug: string
  title: string
  summary?: string
  date: Date
  category: string
}

const Conatiner = styled.li`
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
`

const Body = styled.div`
  cursor: pointer;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
`

const Summary = styled.div`
  font-size: 14px;
  margin-top: 6px;
  opacity: 0.8;
`

const Footer = styled.div`
  font-size: 12px;
  font-weight: 400px;
  margin-top: 12px;
  opacity: 0.8;
`

const Text = styled.span``

type CardProps = {
  post: Post
}

function Card({ post }: CardProps) {
  const { date, title, slug, summary, category } = post

  return (
    <Conatiner>
      <Link href={`/${slug}`}>
        <Body>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </Body>
      </Link>
      <Footer>
        <Text>{format(date, 'yyyy-MM-dd')}</Text>
        {category && (
          <Link href={`/category/${category}`}>
            <Text>{` · ${category}`}</Text>
          </Link>
        )}
      </Footer>
    </Conatiner>
  )
}

export default Card
