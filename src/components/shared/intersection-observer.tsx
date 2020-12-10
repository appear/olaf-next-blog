import React, { PropsWithChildren } from 'react'
import ReactIntersectionObserver from '@researchgate/react-intersection-observer'

interface IntersectionObserverProps {
  active?: boolean
  onActivate: () => void
}

export default function IntersectionObserver({
  active,
  onActivate,
  children,
}: PropsWithChildren<IntersectionObserverProps>) {
  return (
    <ReactIntersectionObserver
      onChange={
        active
          ? () => {}
          : ({ isIntersecting }) => isIntersecting && onActivate()
      }
    >
      <div>{children}</div>
    </ReactIntersectionObserver>
  )
}
