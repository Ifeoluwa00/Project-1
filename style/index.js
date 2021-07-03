function main() {
  const movieslist = document.querySelector(".movieslist");
  const images = [
    "luke skywalker.jpeg",
    "C-3PO.jpeg",
    "R2-D2.jpeg",
    "Darth Vader.jpeg",
    "Leia Organa.png",
    "Owen Lars.jpeg",
    "Beru Whitesun lars.jpeg",
    "R5-D4.jpeg",
    "Biggs Darklighter.jpeg",
    "Obi-Wan Kenobi.jpeg",
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const url = "https://swapi.dev/api/people";
    output = "";
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((item, index) => {
          output += `
          <div class="movieitems">
          <img src="./star_wars_images/${images[index]}" alt="images">
          <div class="movietext">
              <h3>NAME: ${item.name}</h3>
          </div>
          <div class="card__details hidden">
              <h3>HEIGHT: ${item.height}</h3>
              <h3>GENDER: ${item.gender}</h3>
          </div>
      </div>
          `;
        });
        movieslist.innerHTML = output;
        const movieText = document.querySelectorAll(".movietext");
        const card__details = document.querySelectorAll(".card__details");
        movieText.forEach((item, index) => {
          item.addEventListener("click", (event) =>
            card__details[index].classList.toggle("hidden")
          );
        });
      })
      .catch((error) => console.log(error));
  });
}

main();
