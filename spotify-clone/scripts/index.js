// Playlist elements
const nutshell = {

  name: 'Nutshell',
  artist: 'Alice In Chains',
  file: 'nutshell'

}, one_last_breath = {

  name: 'One Last Breath',
  artist: 'Creed',
  file: 'one_last_breath'

}, the_kids_arent_alright = {
  name: 'The Kids Aren\'t Alright',
  artist: 'The Offspring',
  file: 'the_kids_arent_alright'

}, toxicity = {

  name: 'Toxicity',
  artist: 'System Of A Down',
  file: 'toxicity'

}, savin_me = {

  name: 'Savin\' Me',
  artist: 'Nickelback',
  file: 'savin_me'

}, defaultPlaylist = [nutshell, one_last_breath, the_kids_arent_alright, toxicity, savin_me];

let playlist = [...defaultPlaylist];

const playlistSongsContainer = document.getElementById('playlist-songs');

// Song info elements
const songName = document.getElementById('song-name'),
  artist = document.getElementById('artist'),
	song = document.getElementById('song'),
  cover = document.getElementById('cover')

// Player control elements
const	play = document.getElementById('play'),
  previous = document.getElementById('previous'),
  next = document.getElementById('next'),
  shuffle = document.getElementById('shuffle'),
  repeat = document.getElementById('repeat'),
  progressContainer = document.getElementById('progress-container'),
  progress = document.getElementById('progress');

// Song state variables
let isSongPlaying = false;

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

function playNextSong() {

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

  let index = 0,
    auxPlaylist = [...defaultPlaylist];

  console.log("before loop", playlist, defaultPlaylist, auxPlaylist);

  playlist[0] = playlist[playlistIndex];

  auxPlaylist.splice(playlistIndex, 1);
  
  index += 1;

  while (index < defaultPlaylist.length) {

    let randomIndex = Math.floor(Math.random() * auxPlaylist.length);

    playlist[index] = auxPlaylist[randomIndex]
    index += 1;
    auxPlaylist.splice(randomIndex, 1);

  }

  console.log("playing playlist", playlist);

}

function toggleShuffle() {
  if (!isShuffled) {
    isShuffled = true;
    shuffleArray();
    shuffle.classList.add('active');
  } else {
    isShuffled = false;
    playlist = [...defaultPlaylist];
    shuffle.classList.remove('active');
  }
}

function nextSongs() {

  for (let i = 1; i < playlist.length; i++) {
    const songDiv = document.createElement('div');
    songDiv.classList.add('next-song');

    const songTitle = document.createElement('h2');
    songTitle.innerText = playlist[i].name;
    songDiv.appendChild(songTitle);

    const songArtist = document.createElement('p');
    songArtist.innerText = playlist[i].artist;
    songDiv.appendChild(songArtist);

    playlistSongsContainer.appendChild(songDiv);
  }

}

// Automatically runned
refreshPlayer();
nextSongs();

play.addEventListener('click', togglePlayPause);
song.addEventListener('timeupdate', updateProgressBar);
song.addEventListener('ended', playNextSong);

// User interactions
previous.addEventListener('click', playPreviousSong);
next.addEventListener('click', playNextSong);
progressContainer.addEventListener('click', jumpToTime);
shuffle.addEventListener('click', toggleShuffle);
