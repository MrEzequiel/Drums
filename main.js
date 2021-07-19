document.body.addEventListener('keyup', event => {
  playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', event => {
  let song = document.querySelector('#input').value

  if (song !== '') {
    let songArray = song.split('')
    playComposition(songArray)
  }
})

function playSound(sound) {
  let audioSource = document.querySelector(`#s_${sound}`)
  let keySource = document.querySelector(`div[data-key="${sound}"]`)

  if (audioSource) {
    audioSource.currentTime = 0
    audioSource.play()
  }

  if (keySource) {
    keySource.classList.add('active')

    setInterval(() => {
      keySource.classList.remove('active')
    }, 300)
  }
}

function playComposition(songArray) {
  let wait = 0
  songArray.forEach(songItem => {
    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait)
    wait += 250
  })
}
