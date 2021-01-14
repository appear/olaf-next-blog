import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Post } from '$types/post'
import PostCard from '$post/card'

const ListContainer = styled.div`
  margin: 35px 0 45px 0;
  cursor: pointer;
`

const ListTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 20px 30px 20px;
  position: relative;
  display: inline-block;

  &::after {
    display: block;
    position: absolute;
    bottom: -2px;
    left: -3px;
    right: -3px;
    height: 10px;
    background-color: #ffd128;
    content: '';
    z-index: -1;
  }
`

type CardProps = {
  category?: string
  posts: Post[]
}

function PostList({ category, posts }: CardProps) {
  return (
    <ListContainer>
      <Link href={`/category/${category}`}>
        <ListTitle>{category}</ListTitle>
      </Link>
      {posts.slice(0, 3).map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ListContainer>
  )
}

export default PostList
