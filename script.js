const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
const current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

//For Changing The Song
const songs = [
  {
    name: "music-1",
    title: "Yadav Brand",
    artist: "Sunny Yaduvanshi",
  },
  {
    name: "music-2",
    title: "Daku",
    artist: "Inderpal Moga",
  },
  {
    name: "music-3",
    title: "Rao Sahab Drill",
    artist: "Vkey , Skee",
  },
  {
    name: "music-4",
    title: "Haryana Hood",
    artist: "Irshad Khan",
  },
  {
    name: "music-5",
    title: "Cheques",
    artist: "Shubh",
  },
  {
    name: "music-6",
    title: "Elevated",
    artist: "Shubh",
  },
  {
    name: "music-7",
    title: "Ladoo",
    artist: "MC Square",
  },
  {
    name: "music-8",
    title: "Choudhar Jaat Ki",
    artist: "Raju Punjabi",
  },
  {
    name: "music-9",
    title: "Tora",
    artist: "Sumit Goswami",
  },
  {
    name: "music-10",
    title: "Parindey",
    artist: "Sumit Goswami",
  },
  {
    name: "music-11",
    title: "Kalaastar",
    artist: "Honey Singh",
  },
  {
    name: "music-12",
    title: "Happy Birthday",
    artist: "Shanky Goswami",
  },
  {
    name: "music-13",
    title: "Happy Birthday",
    artist: "Sumit Goswami",
  },
  {
    name: "music-14",
    title: "Villagers",
    artist: "Sumit Goswami",
  },
  {
    name: "music-15",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
  },
  {
    name: "music-16",
    title: "Lahore",
    artist: "Guru Randhawa",
  },
  {
    name: "music-17",
    title: "Patola",
    artist: "Guru Randhawa",
  },
  {
    name: "music-18",
    title: "Butterfly",
    artist: "Jass Manak",
  },
  {
    name: "music-19",
    title: "Saara India",
    artist: "Aastha Gill",
  },
  {
    name: "music-20",
    title: "Ishq Tera",
    artist: "Guru Randhawa",
  },
  {
    name: "music-21",
    title: "Mahiye Jinna Sona",
    artist: "Darshan Raval",
  },
  {
    name: "music-22",
    title: "Let Me Love You",
    artist: "Justin Bieber",
  },
  {
    name: "music-23",
    title: "Maan Meri Jaan ",
    artist: "King",
  },
  {
    name: "music-24",
    title: "Boom Diggy Diggy Boom",
    artist: "Zack Knight",
  },
  {
    name: "music-25",
    title: "Zehra (Instrumental)",
    artist: "Ultra Beats",
  },
  {
    name: "music-26",
    title: "Music From East Nepal 2.0",
    artist: "Anxmus",
  },
  {
    name: "music-27",
    title: "9:45",
    artist: "Jay Trak",
  },
  {
    name: "music-28",
    title: "Company",
    artist: "Justin Bieber",
  },
  {
    name: "music-29",
    title: "Main Khada Dware Pe",
    artist: "Lakhbir Singh",
  },
  {
    name: "music-30",
    title: "Devbhoomi",
    artist: "Jubin Nautiyal",
  },
];


let isPlaying = false;

//For Play Function
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//For Pause Function
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

//For Loading Songs
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;

//For Next Song
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

//For Previous Song
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

music.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;

  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;

  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);

  let tot_duration = `${min_duration} : ${sec_duration}`;

  if (duration) {
    total_duration.textContent = `${tot_duration}`;
  }

  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime % 60);

  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`;
  }

  let tot_currentTime = `${min_currentTime} : ${sec_currentTime}`;
  current_time.textContent = `${tot_currentTime}`;
});

progress_div.addEventListener("click", (event) => {
  const { duration } = music;
  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  music.currentTime = move_progress;
});

music.addEventListener("ended", nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);