const fs = require('fs')
const dateFns = require('date-fns')

const CONTENTS_BASE_PATH = `${process.cwd()}/contents`

function generateMarkdownTemplate({ fileName, slug }) {
  const data = dateFns.format(new Date(), 'yyyy-MM-dd')

  return `---\nslug: ${`${slug}`}\ntitle: ${fileName}\nsummary:\ndate: ${data}\n---\n\n# ${fileName}`
}

module.exports = ({ fileName, category = 'Common' }) => {
  if (!fileName) {
    console.log('👉 Please enter a file name')
    process.exit(1)
  }

  if (!fs.existsSync(`${CONTENTS_BASE_PATH}/${category}`)) {
    fs.mkdirSync(`${CONTENTS_BASE_PATH}/${category}`)
  }

  const slug = `${category}/${fileName}`
  const fileFullPath = `${CONTENTS_BASE_PATH}/${slug}.md`

  if (fs.existsSync(fileFullPath)) {
    console.log('👉 File already exists')
    return
  }

  fs.writeFile(
    fileFullPath,
    generateMarkdownTemplate({ fileName, slug }),
    function (err) {
      if (err) return console.log(err)
      console.log(`🎉 "${fileFullPath}" write successful 🎉`)
    },
  )
}
