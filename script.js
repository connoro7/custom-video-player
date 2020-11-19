const video = document.getElementById('video')
const play = document.getElementById('play')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)
play.addEventListener('click', toggleVideoStatus)
progress.addEventListener('change', setVideoProgress)

// Play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

// Update progress bar slider and timestamp
function updateProgress() {
  // Moves progress bar slider forward as video plays
  progress.value = (video.currentTime / video.duration) * 100

  // Calculate elapsed minutes
  let minutes = Math.floor(video.currentTime / 60)
  if (minutes < 10) {
    minutes = '0' + String(minutes)
  }

  // Calculate elapsed seconds
  let seconds = Math.floor(video.currentTime % 60)
  if (seconds < 10) {
    seconds = '0' + String(seconds)
  }

  timestamp.innerHTML = `${minutes}:${seconds}`
}

// Set video time to progress
function setVideoProgress() {
  // Updates video playback time when user clicks and drags progress bar
  video.currentTime = (+progress.value * video.duration) / 100
}

// Stop video
function stopVideo() {
  video.currentTime = 0
  video.pause()
}
