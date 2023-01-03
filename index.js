const movieListEl = document.querySelector(".searched__list")

async function main () {
  const movies = await fetch ("http://www.omdbapi.com/?apikey=89299c0d&s=fast")
  const movieData = await movies.json()
  console.log(movieData)
  movieListEl.innerHTML = Object.keys(movieData).map((mov) => movieHTML(mov)).join("")
}

main();


function movieHTML (movie) {
  return `<div class="searched__template">
  <figure>
    <img class="searched__img" src="${movie.Poster}" alt="">
     <p class="searched__name">${movie.Title}</p>
  </figure>`
}

