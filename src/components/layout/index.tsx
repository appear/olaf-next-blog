import React from 'react'
import styled from 'styled-components'

import GNB from '../shared/gnb'
import Seo, { SEO } from '../shared/seo'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`

interface LayoutProps {
  children: React.ReactNode
  seo?: SEO
}

export default function Layout({ children, seo }: LayoutProps) {
  return (
    <>
      <Seo seo={seo} />
      <GNB />
      <Container>{children}</Container>
    </>
  )
}
