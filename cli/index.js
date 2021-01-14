const markdownGenerator = require('./markdown-cli')

const program = require('commander')
const chalk = require('chalk')

let fileName = ''

program
  .arguments('<file-name>', '', '')
  .usage(`${chalk.green('<file-name>')} [options]`)
  .action(function (name) {
    console.log('name', name)
    fileName = name
  })
  .option('-c, --category <type>', 'post category')
  .on('--help', () => {
    console.log('')
    console.log('Example call:')
    console.log('  $ npm run post "How to install CRA" -c React')
  })
  .allowUnknownOption()
  .parse(process.argv)

const category = program.category

markdownGenerator({
  fileName,
  category,
})
