const fs = require('fs')
const readline = require('readline')
const open = require('open')
const channels = require('./channels')

function pressEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question(
    '\nEnter your search terms and press the "return" key.\n',
    function (input) {
      rl.close()
      openUrlsInBrowser(input)
    }
  )
}

function openUrlsInBrowser(searchTerm) {
  channels.forEach((channel) =>
    open(`https://www.youtube.com/c/${channel}/search?query=${searchTerm}`)
  )
}

module.exports = { pressEnter }
