import matter from 'gray-matter'

import { Post } from '$types/post'

export function generatePostsFormRawData(
  rawDatas: Record<string, string[]>,
): Record<string, Post[]> {
  return Object.entries(rawDatas).reduce((posts, [category, rawData]) => {
    return {
      ...posts,
      [category]: rawData.map((raw) => {
        const { data } = matter(raw)

        return data as Post
      }),
    }
  }, {})
}
