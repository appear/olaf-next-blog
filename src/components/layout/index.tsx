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
  hideGNB?: boolean
}

export default function Layout({ children, hideGNB, seo }: LayoutProps) {
  return (
    <>
      <Seo seo={seo} />
      {!hideGNB && <GNB />}
      <Container>{children}</Container>
    </>
  )
}
