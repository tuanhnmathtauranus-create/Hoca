// ==== Danh sách ảnh nền ====
const backgrounds = ["sea1.gif", "sea2.gif", "sea3.gif", "sea4.gif"];
let currentBg = 0;

const content = document.getElementById("content");
const btnBackground = document.getElementById("btnBackground");
const btnMusic = document.getElementById("btnMusic");
const bgMusic = document.getElementById("bgMusic");

// ==== Đổi ảnh nền ====
btnBackground.addEventListener("click", () => {
  currentBg = (currentBg + 1) % backgrounds.length;
  content.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
});

// ==== Phát / Dừng nhạc ====
let isPlaying = false;
btnMusic.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
  isPlaying = !isPlaying;
});
