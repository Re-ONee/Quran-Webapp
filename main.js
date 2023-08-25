let audio = document.querySelector(".quranPlayer"),
  surahsContainer = document.querySelector(".surahs"),
  ayah = document.querySelector(".ayah"),
  next = document.querySelector(".next"),
  play = document.querySelector(".play"),
  prev = document.querySelector(".prev");
  getSurahs();

function getSurahs() {
  fetch("https://quran-endpoint.vercel.app/quran")
  .then(response => response.json())
  .then(data => {
    for (let surah in data.data)
    {
      surahsContainer.innerHTML +=
      `
        <div>
          <p>${data.data[surah].asma.ar.long}</p>
          <p>${data.data[surah].asma.en.long}</p>
        </div>
      `
    }

    let allSurahs = document.querySelectorAll(".surahs div"),
      ayahsAudios,
      ayahsTest;
      allSurahs.forEach((surah, index) => {
        surah.addEventListener('click', () => {
          fetch("https://quran-endpoint.vercel.app/quran{/:surah}")
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
        })
      })
  })
}