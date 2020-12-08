import React from 'react'
import { NextPageContext } from 'next'

function Category() {
  return <h1>Blog</h1>
}

export async function getServerSideProps(context: NextPageContext) {
  const { category } = context.query

  console.log('category', category)

  return {
    props: {},
  }
}

export default Category
