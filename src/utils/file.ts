import fs from 'fs'

export function getAllFiles() {
  const files = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8')

  const paths = files.filter((fn) => fn.endsWith('.md'))

  return paths.map((path) => {
    const rawContent = fs.readFileSync(`${process.cwd()}/contents/${path}`, {
      encoding: 'utf-8',
    })

    return rawContent
  })
}

export async function getFile(slug: string) {
  return fs.readFileSync(`${process.cwd()}/contents/${slug}.md`, {
    encoding: 'utf-8',
  })
}
