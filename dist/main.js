async function getEl(){
    let response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?quality=3D"
    );
    let data = await response.json();
    return data;
}
const moviesEl = document.querySelectorAll(".movie-box")


getEl().then(response=>{
    const movies  = response.data.movies
    localStorage.setItem('movies',JSON.stringify(movies))
    console.log(movies);
    moviesEl.forEach((movieEl, i) =>{
        let movie = movies[i];
        movieEl.innerHTML = ` <a href="/movieApp/details.html?id=${movie.id}">
        <img src="${movie.medium_cover_image}" alt="">
        <h4>${movie.title}</h4>
        <p>${movie.year}</p>
        </a>
        `;      
        const mainEl = document.getElementById("main")
        
        movieEl.addEventListener("click", () => { 
          mainEl.style.display = "none";
        });
  })
})
    