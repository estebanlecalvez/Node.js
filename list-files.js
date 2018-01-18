const fs = require('fs')
const path = require('path')

if (process.argv.length < 3) {
  console.error('missing folder argument. Execute this script with `node list-files.js /folder/path`')
  process.exit(1)
}

function handleError(err) {
  if (err) {
    throw err
  }
}
const rootFolder = process.argv[2]
fs.readdir(rootFolder, (readdirErr, files) => {
  handleError(readdirErr)
  files
    .map(file => path.join(rootFolder, file)).forEach(filePath => {
      fs.stat(filePath, (statsErr, stats) => {
        handleError(statsErr)
        if (stats.isFile()) {
          fs.readFile(filePath, { encoding : 'utf-8', flag: 'r' }, (readFileErr, data) => {
            handleError(readFileErr)
            console.log(`"${filePath}" content (${stats.size} bytes):\n`, data)
          })
        }
      })
    })
})
