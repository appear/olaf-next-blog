import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import IntersectionObserver from './intersection-observer'

const Container = styled.section`
  &.fade-base {
    opacity: 0;
    transform: translateY(5px);
  }

  &.fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
    transition: all 300ms ease-in-out 100ms;
  }
`

export default function AppearSection({
  children,
}: {
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)

  return (
    <IntersectionObserver active={active} onActivate={() => setActive(true)}>
      <CSSTransition
        in={active}
        timeout={0}
        className="fade-base"
        classNames="fade"
      >
        <Container>{children}</Container>
      </CSSTransition>
    </IntersectionObserver>
  )
}
