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

}, playlist_songs = [nutshell, one_last_breath, the_kids_arent_alright];

// Song info elements
const songName = document.getElementById('song-name'),
  artist = document.getElementById('artist'),
	song = document.getElementById('song'),
  cover = document.getElementById('cover')

const	play_button = document.getElementById('play-button');

// Play/Pause state
let isSongPlaying = false;

function playSong() {
	play_button.querySelector('i').classList.remove('bi-play-circle-fill');
	play_button.querySelector('i').classList.add('bi-pause-circle-fill');
	song.play()
	isSongPlaying = true;
};

function pauseSong() {
	play_button.querySelector('i').classList.remove('bi-pause-circle-fill');
	play_button.querySelector('i').classList.add('bi-play-circle-fill');
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
  cover.src = "",
  song.src = "",
  songName.textContent = "",
  artist.textContent = ""
};

play_button.addEventListener('click', togglePlayPause);
