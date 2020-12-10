import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
  position: relative;
  padding-top: 63%;
  overflow: hidden;
`

const BaseImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
`

interface ImageProps {
  src: string
  alt?: string
}

function Image({ src, alt }: ImageProps) {
  return (
    <Wrapper>
      <Container>
        <BaseImg src={src} alt={alt} />
      </Container>
    </Wrapper>
  )
}

export default Image
