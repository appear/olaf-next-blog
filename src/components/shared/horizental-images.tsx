import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: scroll hidden;
`
const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 60px);

  &:not(:first-child) {
    margin-left: 15px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  opacity: 1;
`

interface HorizentalImagesProps {
  images: string[]
}

function HorizentalImages({ images }: HorizentalImagesProps) {
  return (
    <Wrapper>
      {images.map((src) => (
        <Container>
          <Image src={src} alt="가로 이미지" />
        </Container>
      ))}
    </Wrapper>
  )
}

export default HorizentalImages
