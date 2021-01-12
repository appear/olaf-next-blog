import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { format } from 'date-fns'

import { Post } from '$types/post'

import postStyle from './style'

const Container = styled.div`
  ${postStyle}

  padding: 0 20px 70px 20px;
  margin-top: 30px;
`

const Header = styled.div`
  font-size: 14px;
  opacity: 0.6;
  margin-bottom: 15px;
`

interface MarkdownPostProps {
  post: {
    data: Post
    content: string
  }
  category?: string
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  )
}

function MarkdownPost({
  post: { data, content },
  category,
}: MarkdownPostProps) {
  const { date } = data

  return (
    <Container>
      <Header>
        <span>{format(date, 'yyyy-MM-dd')}</span>
        {category && <span>{`  ·  ${category}`}</span>}
      </Header>
      <ReactMarkdown
        escapeHtml={true}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </Container>
  )
}

export default MarkdownPost
