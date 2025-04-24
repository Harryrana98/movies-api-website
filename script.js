const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector("#result");
const wrapper = document.querySelector("#wrapper");
const API_KEY = "3fb4c3ddfc88192745a5708f0de70cba";
const IMG_BASE_PATH = "https://image.tmdb.org/t/p/original";
const URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
// const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1`;

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const searchItem = input.value.trim();
//   const response = await fetch(URL + "&query=" + searchItem);
//   console.log(response);
//   const result = await response.json();
//   console.log(result);
//   showData(result.results);

// });

// function showData(arr) {
//   result.innerHTML = "";
//   arr.forEach((item) => {
//     const { title, poster_path, release_date, overview } = item;
//     movieCard=document.createElement("div")
//     movieCard.className = "movie-card";
//     movieCard.innerHTML = `<img src="${
//       IMG_BASE_PATH + poster_path
//     }" alt="${title}">
//         <h2>${title}</h2>
//         <p>${overview}</p>
//         <p>Release Date: ${release_date}</p>`;
//     result.appendChild(movieCard);
//   });
// }

form.addEventListener("submit", showData);

async function showData(e) {
  e.preventDefault();
  // wrapper.style.display = "none";
  
  const searchInput = input.value.trim();
  const response = await fetch(URL + "&query=" + searchInput);
  const result = await response.json();
  console.log(result.results);
  displayMovieOnScreen(result.results);
  input.value=" "
}
input.focus()

function displayMovieOnScreen(arr) {
  result.innerHTML=" "
  arr.forEach((movie) => {
    if (movie.poster_path !== null) {
      const movieImg = document.createElement("img");
      const newDiv = document.createElement("div");
      const { poster_path, title } = movie;
      movieImg.src = `${IMG_BASE_PATH + poster_path}`;
      // movieImg.alt = title;
      newDiv.innerHTML = ` <h2>${title}</h2>`;
      newDiv.append(movieImg);
      result.append(newDiv);
    } else {
      const movieImg = document.createElement("img");
      const newDiv = document.createElement("div");
      const { poster_path, title } = movie;
      movieImg.src = `${IMG_BASE_PATH + "/oaWmrUsqHTkyeZT2XWmRX04xfBL.jpg"}`;
      // movieImg.alt = title;
      newDiv.innerHTML = ` <h2>${title}</h2>`;
      newDiv.append(movieImg);
      result.append(newDiv);
    }
  });
}
