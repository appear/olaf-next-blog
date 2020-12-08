import React from 'react'
import styled from 'styled-components'

import GNB from './header'
import Seo, { SEO } from '../shared/seo'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
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
