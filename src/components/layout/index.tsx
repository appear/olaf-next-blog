import React from 'react'
import styled from 'styled-components'

import GNB from '../shared/gnb'
import Seo, { SEO } from '../shared/seo'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

interface LayoutProps {
  children: React.ReactNode
  seo?: SEO
  showGNB?: boolean
}

export default function Layout({ children, showGNB = true, seo }: LayoutProps) {
  return (
    <>
      <Seo seo={seo} />
      {showGNB && <GNB />}
      <Container>{children}</Container>
    </>
  )
}
