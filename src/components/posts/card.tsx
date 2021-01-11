import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { format } from 'date-fns'

import { Post } from '$types/post'
import { maxLine } from '$shared/mixins/text'

const CardContainer = styled.div`
  margin: 35px 0;
`

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
`

const Conatiner = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-between;
  display: flex;

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  vertical-align: middle;
  object-fit: cover;
  border-radius: 5px;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  ${maxLine}
`

const Summary = styled.div`
  font-size: 14px;
  margin: 6px 0 20px 0;
  opacity: 0.8;
  line-height: 1.25;
  ${maxLine}
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  margin-top: 8px;
  opacity: 0.8;
`

const Body = styled.div`
  margin-right: 20px;
`

type CardProps = {
  category?: string
  posts: Post[]
}

function Card({ category, posts }: CardProps) {
  return (
    <CardContainer>
      <CardTitle># {category}</CardTitle>
      {posts.slice(0, 3).map(({ date, title, slug, summary, thumbnail }) => {
        return (
          <Link href={`/${slug}`} key={slug}>
            <Conatiner>
              <Body>
                <Title>{title}</Title>
                {summary && <Summary>{summary}</Summary>}
                <Date>{format(date, 'yyyy-MM-dd')}</Date>
              </Body>
              {thumbnail && <Thumbnail src={thumbnail} />}
            </Conatiner>
          </Link>
        )
      })}
    </CardContainer>
  )
}

export default Card
