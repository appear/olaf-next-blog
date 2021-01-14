const fs = require('fs')
const dateFns = require('date-fns')

const CONTENTS_BASE_PATH = `${process.cwd()}/contents`

function generateMarkdownTemplate({ fileName }) {
  const data = dateFns.format(new Date(), 'yyyy-MM-dd')

  return `---\nslug: ${fileName}\ntitle: ${fileName}\nsummary:\ndate: ${data}\n---\n\n# ${fileName}`
}

module.exports = ({ fileName, category }) => {
  if (!fileName) {
    console.log('👉 Please enter a file name')
    process.exit(1)
  }

  if (category && !fs.existsSync(`${CONTENTS_BASE_PATH}/${category}`)) {
    fs.mkdirSync(`${CONTENTS_BASE_PATH}/${category}`)
  }

  const filePath = `${CONTENTS_BASE_PATH}`.concat(
    category ? `/${category}/${fileName}.md` : `/${fileName}.md`,
  )

  if (fs.existsSync(filePath)) {
    console.log('👉 File already exists')
    return
  }

  fs.writeFile(
    filePath,
    generateMarkdownTemplate({ fileName, category }),
    function (err) {
      if (err) return console.log(err)
      console.log(`🎉 "${filePath}" write successful 🎉`)
    },
  )
}
