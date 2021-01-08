import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import IntersectionObserver from './intersection-observer'
import { CSSTransition } from 'react-transition-group'

import siteMeta from '../../../config'

const Container = styled.div`
  position: relative;
  top: 0;
  box-sizing: border-box;
  padding: 30px 0;
  max-width: 800px;
  margin: 0 auto;
`

const FixedContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgb(239, 239, 239);
  background-color: #fff;
  z-index: 1;
  transition: all 100ms ease-in-out 100ms;

  &.fade-base {
    opacity: 0;
    transform: translateY(-20%);
  }

  &.fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.fade-exit-done {
    opacity: 0;
    transform: translateY(-20%);
  }
`

const ListContainer = styled.ul`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`
const Menu = styled.li`
  float: left;
  &:not(:last-child) {
    margin-right: 10px;
  }
`
const Label = styled(Link)`
  font-size: 14px;
  font-weight: bold;
`

function Links() {
  return (
    <ListContainer>
      <Menu>
        <Label href="/">메인</Label>
      </Menu>
      <Menu>
        <Label
          as="a"
          href={siteMeta.link.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          링크드인
        </Label>
      </Menu>
    </ListContainer>
  )
}

function GNB() {
  const [isIntersecting, setIsIntersecting] = useState(false)

  return (
    <>
      <IntersectionObserver
        onChange={(isIntersecting) => {
          setIsIntersecting(isIntersecting)
        }}
      >
        <Container>
          <Links />
        </Container>
      </IntersectionObserver>
      <CSSTransition
        in={!isIntersecting}
        timeout={0}
        className="fade-base"
        classNames="fade"
      >
        <FixedContainer>
          <Links />
        </FixedContainer>
      </CSSTransition>
    </>
  )
}

export default GNB
