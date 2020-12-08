import React from 'react'
import { NextPageContext } from 'next'
import matter from 'gray-matter'

import { getFile } from '../src/utils/file'

function Blog(props) {
  console.log(props)
  return <h1>Blog</h1>
}

export async function getServerSideProps(context: NextPageContext) {
  const { blog } = context.query

  return {
    props: {
      data: await getFile(blog as string),
    },
  }
}

export default Blog
