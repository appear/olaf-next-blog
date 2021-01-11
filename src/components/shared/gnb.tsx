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
    transform: translateY(-100%);
  }

  &.fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.fade-exit-done {
    opacity: 0;
    transform: translateY(-100%);
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
const Text = styled.a`
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`

function Links() {
  const openLinkedIn = (e: React.MouseEvent) => {
    /** TODO: click log */
    e.preventDefault()
    window.open(siteMeta.link.linkedIn, '_blank')
  }

  return (
    <ListContainer>
      <Menu>
        <Link href="/">
          <Text>메인</Text>
        </Link>
      </Menu>
      <Menu>
        <Link href={siteMeta.link.linkedIn}>
          <Text href={siteMeta.link.linkedIn} onClick={openLinkedIn}>
            링크드인
          </Text>
        </Link>
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
