window.addEventListener("load", () => {
  const params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  if (id) {
    const movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);
    let cont = movies.find((x) => x.id == id);
    render(cont);
  } else {
    document.getElementById("details-container").innerHTML = `<p>Movie not found</p>`;
  }
});


function render(content) {
  console.log(content);
  document.getElementById("details-container").innerHTML = `
    <img src="${content.large_cover_image}" alt="img" />
      <div class="text">
        <h2>${content.title}</h2>
        <p>${content.year}</p>
        <p>${content.genres.join(" / ")}</p>
        <p>${content.description_full}</p>
       <a href="${
         content.torrents[0].url
       }"><button>Download Torrent File</button></a>
      </div>
    `;
}
