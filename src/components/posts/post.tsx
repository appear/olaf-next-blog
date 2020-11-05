import React from 'react'
import styled from 'styled-components'

const Conatiner = styled.li`
  margin: 10px 0;
  padding: 20px 0;
  box-sizing: border-box;
  &:not(:last-child) {
    border-bottom: 1px solid #f3f3f3;
  }
`

const CardTitle = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.4;
`
const CardDate = styled.div`
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 10px;
  color: #999;
`

type PostProps = {
  post: {
    date: string
    title: string
    slug: string
    tags: string
    category: string
  }
}

function Post({ post }: PostProps) {
  const { date, title, slug, tags, category } = post

  if (!slug) {
    return null
  }

  const badges = tags ? tags.split(',') : []

  return (
    <Conatiner>
      <a to={slug}>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
      </a>
    </Conatiner>
  )
}

export default Post
