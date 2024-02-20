// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://webdev.alphacamp.io/api/lyrics/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////

// song list
let tracks = album.tracks
for (track in tracks) {
  songList.innerHTML += `
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle ="pill">${tracks[track]}</a>
  </li>
  `
}

// lyrics panel

songList.addEventListener('click', lyrics)

function lyrics(event) {
  //nav
  let target = event.target
  target.classList.add('active')

  let artist = album.artist
  let track = target.innerText
  const URL = BASE_URL + `${artist}/${track}.json`

  axios.get(URL)
    .then(function (response) {
      let lyrics = response.data.lyrics
      let adjustedLyrics = lyrics.replaceAll('\n\n', '\n');

      lyricsPanel.innerHTML = `
    <h1>${track}</h1>
    <pre>${adjustedLyrics}</pre>
    `;
    })
    .catch(function (error) {
      console.log(error);
    });
}

