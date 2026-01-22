// Playlist elements

const jsonData = JSON.parse('/songs/songs.json');
console.log(jsonData);
const defaultPlaylist = [nutshell, one_last_breath, the_kids_arent_alright, toxicity, savin_me];

let playlist = [...defaultPlaylist];

// Song info elements
const songName = document.getElementById('song-name'),
  artist = document.getElementById('artist'),
	song = document.getElementById('song'),
  cover = document.getElementById('cover'),
  currentTime = document.getElementById('current-time'),
  duration = document.getElementById('duration');

// Player control elements
const	play = document.getElementById('play'),
  previousButton = document.getElementById('previous'),
  nextButton = document.getElementById('next'),
  shuffleButton = document.getElementById('shuffle'),
  repeatButton = document.getElementById('repeat'),
  progressContainer = document.getElementById('progress-container'),
  progress = document.getElementById('progress'),
  likeButton = document.getElementById('like');

// Song state variables
let isSongPlaying = false,
  repeat = false;

// Playlist state variables
let playlistIndex = 0,
  isShuffled = false;

function playSong() {

	play.querySelector('i').classList.remove('bi-play-circle-fill');
	play.querySelector('i').classList.add('bi-pause-circle-fill');
	song.play()
	isSongPlaying = true;

};

function pauseSong() {

	play.querySelector('i').classList.remove('bi-pause-circle-fill');
	play.querySelector('i').classList.add('bi-play-circle-fill');
	song.pause()
	isSongPlaying = false;

};

function togglePlayPause() {

	if (isSongPlaying) {

		pauseSong();

	} else {

		playSong();

	}

};

function refreshPlayer() {

  cover.src = `songs/cover/${playlist[playlistIndex].file}.png`;
  song.src = `songs/audio/${playlist[playlistIndex].file}.mp3`;
  songName.innerText = playlist[playlistIndex].name;
  artist.innerText = playlist[playlistIndex].artist;

};

function playPreviousSong() {

  if (playlistIndex === 0) {
    playlistIndex = playlist.length - 1;

  } else {

    playlistIndex -= 1;

  }

  refreshPlayer();
  playSong();

};

function repeatOrNextSong() {

  if (repeat) {

    playSong();

  } else {

    playNextSong();

  }

};

function playNextSong() {
  
  // If the user is in the last music, the index restarts
  if (playlistIndex === (playlist.length - 1)) {
    
    playlistIndex = 0;
  
  } else {
    
    playlistIndex += 1;
  }

  refreshPlayer();
  playSong();

};

function updateProgressBar() {

  const barWidth = (song.currentTime / song.duration) * 100;
  progress.style.setProperty('--progress', `${barWidth}%`);

}

function jumpToTime(event) {

  const width = progressContainer.clientWidth,
    clickX = event.offsetX,
    newTime = (clickX / width) * song.duration;
    song.currentTime = newTime;

  }

function shuffleArray() {

  // index 0 is already set (the music that's playing), so we start from 1
  // auxPlaylist is a copy of defaultPlaylist to avoid modifying it
  // playlist is the playlist that's being played
  let index = 1,
    auxPlaylist = [...defaultPlaylist];

  // Set the current playing song as first in playlist
  playlist[0] = playlist[playlistIndex];
  
  // Remove the current playing song from auxPlaylist, so it won't be picked again
  auxPlaylist.splice(playlistIndex, 1);

  // loop to fill the rest of playlist with random songs from auxPlaylist
  while (index < defaultPlaylist.length) {

    // pick a random index from auxPlaylist
    let randomIndex = Math.floor(Math.random() * auxPlaylist.length);

    // set the picked song in playlist at current index
    playlist[index] = auxPlaylist[randomIndex]
    
    // remove the picked song from auxPlaylist, so it won't be picked again
    auxPlaylist.splice(randomIndex, 1);
    
    index += 1;
  }

}

function addActiveClass(button) {

  button.classList.add('active');

}

function removeActiveClass(button) {

  button.classList.remove('active');

}

function toggleShuffle() {

  if (!isShuffled) {

    isShuffled = true;
    addActiveClass(shuffleButton);
    shuffleArray();

  } else {
  
    isShuffled = false;
    removeActiveClass(shuffleButton);
    playlist = [...defaultPlaylist];
  
  }

}

function toggleRepeat() {

  if (!repeat) {

    repeat = true;
    addActiveClass(repeatButton);
  
  } else {
  
    repeat = false;
    removeActiveClass(repeatButton);

  }

}

function formatTime(secondsWithDecimals) {

  const minutes = Math.floor(secondsWithDecimals / 60), 
    secs = Math.floor(secondsWithDecimals % 60);

  return `${minutes}:${secs < 10 ? '0':''}${secs}`;

}

function updateSongTime() {

  currentTime.innerText = formatTime(song.currentTime);

}

function updateSongDuration() {

  duration.innerText = formatTime(song.duration);

}

function toggleLike() {
}

function likeMusic() {

  addActiveClass(likeButton);
  likeButton.querySelector('i').classList.remove('bi-heart');
  likeButton.querySelector('i').classList.add('bi-heart-fill');

}

// Automatically runned
refreshPlayer();

song.addEventListener('loadedmetadata', updateSongDuration);
song.addEventListener('timeupdate', updateProgressBar);
song.addEventListener('timeupdate', updateSongTime);
song.addEventListener('ended', repeatOrNextSong);

// User interactions
play.addEventListener('click', togglePlayPause);
previousButton.addEventListener('click', playPreviousSong);
nextButton.addEventListener('click', playNextSong);
progressContainer.addEventListener('click', jumpToTime);
shuffleButton.addEventListener('click', toggleShuffle);
repeatButton.addEventListener('click', toggleRepeat);
likeButton.addEventListener('click', likeMusic);