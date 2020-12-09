const fs = require('fs')
const dateFns = require('date-fns')

function generateMarkdownTemplate({ fileName, category = '' }) {
  const data = dateFns.format(new Date(), 'yyyy-MM-dd')

  return `---\nslug: ${fileName}\ntitle: ${fileName}\nsummary:\ndate: ${data}\ncategory: ${category}\n---\n\n# ${fileName}`
}

module.exports = ({ fileName, category }) => {
  if (!fileName) {
    console.log('👉 Please enter a file name')
    process.exit(1)
  }

  const filePath = process.cwd() + `/contents/${fileName}.md`

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
