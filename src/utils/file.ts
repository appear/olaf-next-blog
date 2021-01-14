import fs from 'fs'

export type Posts = Record<string, string[]>

export const CONTENTS_BASE_PATH = `${process.cwd()}/contents`

export async function getAsyncDirFiles(path: string): Promise<string[]> {
  return new Promise((resolve) => {
    resolve(fs.readdirSync(path, 'utf-8'))
  })
}

export async function getAsyncFile(path: string): Promise<string> {
  return new Promise((resolve) => {
    return resolve(
      fs.readFileSync(`${CONTENTS_BASE_PATH}/${path}`, {
        encoding: 'utf-8',
      }),
    )
  })
}

export async function getAllRawPosts() {
  const paths = await getAsyncDirFiles(CONTENTS_BASE_PATH)

  return paths.reduce<Promise<Posts>>(async (posts, path): Promise<Posts> => {
    const rootFile = `${CONTENTS_BASE_PATH}/${path}`

    if (fs.lstatSync(rootFile).isDirectory()) {
      const files = await getAsyncDirFiles(rootFile)
      const markdownPaths = files.filter((file) => file.endsWith('.md'))

      const markdownFiles = await Promise.all(
        markdownPaths.map(async (fileName) => {
          return getAsyncFile(`${path}/${fileName}`)
        }),
      )

      return posts.then((prevPosts) => {
        return {
          ...prevPosts,
          [path]: markdownFiles,
        }
      })
    }
    return {}
  }, Promise.resolve({}))
}
