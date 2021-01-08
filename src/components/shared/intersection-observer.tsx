import React, { PropsWithChildren } from 'react'
import ReactIntersectionObserver from '@researchgate/react-intersection-observer'

interface IntersectionObserverProps {
  active?: boolean
  onChange: (flag: boolean) => void
}

export default function IntersectionObserver({
  onChange,
  children,
}: PropsWithChildren<IntersectionObserverProps>) {
  return (
    <ReactIntersectionObserver
      onChange={({ isIntersecting }) => onChange(isIntersecting)}
    >
      <div>{children}</div>
    </ReactIntersectionObserver>
  )
}
