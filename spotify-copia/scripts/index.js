// Define songs objects (temporary hardcoded playlist)
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

}, playlist = [nutshell, one_last_breath, the_kids_arent_alright];

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
  repeat = document.getElementById('repeat');

// Play/Pause state
let isSongPlaying = false;

// Playlist index
let playlistIndex = 0;

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

function initializePlayer() {
  cover.src = `songs/cover/${playlist[playlistIndex].file}.png`;
  song.src = `songs/audio/${playlist[playlistIndex].file}.mp3`;
  songName.innerText = playlist[playlistIndex].name;
  artist.innerText = playlist[playlistIndex].artist;
};

function playPreviousSong() {
  if (playlistIndex < 0) {
    playlistIndex = playlist.length - 1;
  }
  playlistIndex -= 1;
  togglePlayPause();
};

function playNextSong() {
  if (playlistIndex >= (playlist.length - 1)) {
    playlistIndex = 0;
  }
  playlistIndex += 1;
  togglePlayPause();
};

initializePlayer();

play.addEventListener('click', togglePlayPause);
previous.addEventListener('click', playPreviousSong);
next.addEventListener('click', playNextSong);
shuffle.addEventListener('click', );
repeat.addEventListener('click', );
