import React, { useReducer } from 'react'
import { NextPageContext } from 'next'
import styled from 'styled-components'

import siteMeta from '../../../config'

import Layout from '$components/layout'
import { getAllRawPosts } from '$utils/file'
import { generatePostsFormRawData } from '$posts/utils'
import { Post } from '$types/post'
import PostCard from '$post/card'

interface CategoryPageProps {
  rawData: Record<string, string[]>
  initialCategory: string
}

const Container = styled.div`
  margin: 30px 0 20px;
`

const FilterContainer = styled.ul`
  padding: 0 20px;
`

const Filter = styled.li<{ seleted: boolean }>`
  border: 1px solid rgba(58, 58, 58, 0.2);
  border-radius: 20px;
  padding: 9px 15px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  margin: 0 6px 10px 0;

  ${({ seleted }) =>
    seleted &&
    `
    background: #ffaa3b;
    border-color: #ffaa3b;
    color: #fff;
    font-weight: 700;
  `}
`

interface State {
  selectedCategory: string
  categories: string[]
  contents: Record<string, Post[]>
  filteredContetns: Post[]
}

type Action = { type: 'SET_CATEGORY'; payload: string }

function generateInitialState({
  initialCategory,
  rawData,
}: {
  initialCategory: string
  rawData: Record<string, string[]>
}): State {
  const contents = generatePostsFormRawData(rawData)
  const selectedCategory = contents[initialCategory] ? initialCategory : 'ALL'

  return {
    contents,
    categories: ['ALL', ...Object.keys(contents)],
    selectedCategory: selectedCategory,
    filteredContetns:
      selectedCategory === 'ALL'
        ? Object.values(contents).reduce((allPosts, posts) => {
            return [...allPosts, ...posts]
          }, [])
        : contents[selectedCategory],
  }
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_CATEGORY': {
      const selectedCategory = action.payload
      const filteredContetns =
        selectedCategory === 'ALL'
          ? Object.values(state.contents).reduce((allPosts, posts) => {
              return [...allPosts, ...posts]
            }, [])
          : state.contents[selectedCategory]

      return {
        ...state,
        selectedCategory,
        filteredContetns,
      }
    }
    default: {
      return state
    }
  }
}

export default function CategoryPage({
  rawData,
  initialCategory,
}: CategoryPageProps) {
  const [
    { categories, selectedCategory, filteredContetns },
    dispatch,
  ] = useReducer(
    reducer,
    generateInitialState({
      initialCategory,
      rawData,
    }),
  )

  const handleClickCategory = (category: string) => {
    dispatch({
      type: 'SET_CATEGORY',
      payload: category,
    })
  }

  return (
    <Layout
      seo={{
        ...siteMeta,
      }}
    >
      <FilterContainer>
        {categories.map((name) => (
          <Filter
            seleted={name === selectedCategory}
            key={name}
            onClick={() => handleClickCategory(name)}
          >
            {name}
          </Filter>
        ))}
      </FilterContainer>
      <Container>
        {filteredContetns.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const rawData = await getAllRawPosts()
  const { category = 'ALL' } = context.query

  return {
    props: {
      rawData,
      initialCategory: category,
    },
  }
}
