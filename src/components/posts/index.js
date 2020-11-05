import React from 'react'
import styled from 'styled-components'

import Post from './post'

const Section = styled.section`
  padding: 0 20px;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`

const PostContainer = styled.ul`
  box-sizing: border-box;
`

function Posts() {
  const posts = [
    {
      date: '2012-10-20',
      title: '테스트',
      slug: '테스트',
      tags: '테스트',
      category: '테스트',
    },
  ]
  return (
    <Section>
      <Title>최근 포스트.</Title>
      <PostContainer>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </PostContainer>
    </Section>
  )
}

export default Posts
