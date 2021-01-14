import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import Link from 'next/link'

import { Post } from '$types/post'
import { maxLine } from '$shared/mixins/text'

const Conatiner = styled.div`
  padding: 10px;
  margin: 0 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  transition: box-shadow, transform 200ms ease 0s;
  min-height: 120px;

  &:hover {
    border: 1px solid;
    transform: translateY(-2px);
    box-shadow: 8px 7px 0px 3px rgba(33, 33, 33, 0.2);
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

function Card({
  post: { date, title, slug, summary, thumbnail },
}: {
  post: Post
}) {
  const [categoy, fileName] = slug.split('/')

  return (
    <Link
      href={`/category/${categoy}/${encodeURIComponent(fileName)}`}
      key={slug}
    >
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
}

export default Card
