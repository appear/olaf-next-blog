import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import siteMeta from '../../../config'

const Container = styled.div`
  position: relative;
  height: 52px;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 40px;
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

function GNB() {
  return (
    <Container>
      <ListContainer>
        <Menu>
          <Label href="/">글</Label>
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
    </Container>
  )
}

export default GNB
