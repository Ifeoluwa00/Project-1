for (let pointer = 1; pointer <= 10; pointer++) {
  main(pointer);
  let clickPointer = document.getElementById(`charname${pointer}`);
  clickPointer.addEventListener("click", () => displayInfo(pointer));

  function displayInfo(pointer) {
    let hiddenInfo = document.getElementById(`text${pointer}`);
    if (hiddenInfo.style.display === "none") {
      hiddenInfo.style.display = "block";
    } else {
      hiddenInfo.style.display = "none";
    }
  }
}

function main(pointer) {
  fetch(`https://swapi.dev/api/people/${pointer}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(`charname${pointer}`).innerHTML = data.name;
      document.getElementById(`text${pointer}`).innerHTML =
        "Name: " +
        data.name +
        "<br/>" +
        "Height: " +
        data.height +
        "<br/>" +
        "Gender: " +
        data.gender;
    });
}

//main();

//module.exports = { main };
