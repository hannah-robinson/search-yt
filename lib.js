const fs = require('fs')
const path = require('path')
const readline = require('readline')
const open = require('open')

function pressEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question(
    '\nEnter your search terms and press the "return" key.\n',
    function (input) {
      rl.close()
      search(getUrls(input))
    }
  )
}

function openUrlsInBrowser(searchTerm) {
  channels.forEach((channel) =>
    open(`https://www.youtube.com/c/${channel}/search?query=${searchTerm}`)
  )
}
