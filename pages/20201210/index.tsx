import React from 'react'
import styled, { keyframes } from 'styled-components'

import AppearSection from '../../src/components/shared/appear-section'
import Layout from '../../src/components/layout'
import Image from '../../src/components/shared/image'

import style from '../../src/components/post/style'
import HorizentalImages from '../../src/components/shared/horizental-images'

const Wrapper = styled.div`
  padding-bottom: 100px;
`

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    
  }
  35% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  65% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const GNB = styled.div`
  padding: 15px 10px;
  text-align: right;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
  border-bottom: 1px solid #efefef;
`

const Title = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  transform-origin: center;
  animation: ${animation} 2s linear infinite;
  padding: 3px 5px;
  border-radius: 5px;
`

const ImageContainer = styled.div`
  border: 3px solid #ff3b86;
`

const Container = styled.div`
  ${style}

  padding: 0 20px;
  margin-top: 30px;
`

const HorizentalImageContainer = styled.div`
  padding: 0 20px;
`

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  opacity: 1;
`

export default function MainPage() {
  return (
    <Layout
      showGNB={false}
      seo={{
        title: '잼민이의 하루',
        summary: '참고로 비는 싫어함',
        thumbnail: '/image/main.jpg',
      }}
    >
      <Wrapper>
        <AppearSection>
          <GNB>
            <a href="https://www.instagram.com/umbrella_ryu/" target="_blank">
              <Title>instagram: _꽃보다 잼민</Title>
            </a>
          </GNB>
          <ImageContainer>
            <Image src="/image/main.jpg" />
          </ImageContainer>
          <Container>
            <h1>류잼민 (29 진)</h1>
            <ul>
              <li>현) CGV 미소지기</li>
              <li>현) 맥주 앉은 자리에서 12캔 쌉가능</li>
              <li>전) 지혜 남자친구 (현재 유부녀)</li>
              <li>전) 곰지 아빠</li>
            </ul>
            <blockquote>참고로 비는 싫어함</blockquote>
          </Container>
        </AppearSection>
        <Container>
          <h3>기뻐하는 잼민이</h3>
          <p>
            맥주 2잔 들어 갔을 때 <br />
            잼민이는 술 먹을 때 가장 기뻐해요
          </p>
        </Container>
        <HorizentalImageContainer>
          <AppearSection>
            <HorizentalImages
              images={[
                '/image/smile3.jpg',
                '/image/smile.jpg',
                '/image/smile2.jpg',
              ]}
            />
          </AppearSection>
        </HorizentalImageContainer>
        <Container>
          <h3>초등학교 입학하는 잼민이</h3>
          <p>
            잼민이가 초등학교에 들어가요 <br />
            기죽지말라고 브릿지 염색해줬어요
          </p>
        </Container>
        <HorizentalImageContainer>
          <AppearSection>
            <BaseImage src="/image/school.jpg" />
          </AppearSection>
        </HorizentalImageContainer>
        <Container>
          <h3>배고픈 잼민이</h3>
          <p>
            잼민이가 처음 소고기를 먹은날이에요 <br />
            혀부터 마중나가는 모습이 너무 귀여워요
          </p>
        </Container>
        <HorizentalImageContainer>
          <AppearSection>
            <BaseImage src="/image/hungry.jpg" />
          </AppearSection>
        </HorizentalImageContainer>
        <Container>
          <h3>술쟁이 잼민이</h3>
          <p>술 밖에 모르는 잼민이에요</p>
        </Container>
        <HorizentalImageContainer>
          <AppearSection>
            <BaseImage src="/image/onemore.jpg" />
          </AppearSection>
        </HorizentalImageContainer>
        <Container>
          <h3>화내는 잼민이</h3>
          <p>
            맥주가 부족하면 잼민이는 화를 내요 <br />
            몹씨 성난 상태에요
          </p>
        </Container>
        <HorizentalImageContainer>
          <AppearSection>
            <BaseImage src="/image/angry.jpg" />
          </AppearSection>
        </HorizentalImageContainer>
        <Container>
          <h3>일탈하는 잼민이</h3>
          <p>
            기분이 좋지 않은 날은 <br />
            가끔 일탈도해요.
          </p>
        </Container>
        <HorizentalImageContainer>
          <AppearSection>
            <BaseImage src="/image/deviation.jpg" />
          </AppearSection>
        </HorizentalImageContainer>
      </Wrapper>
    </Layout>
  )
}
