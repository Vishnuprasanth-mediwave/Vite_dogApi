import "./style.css";

import { fetchRandomDogImage } from "./utils/dogApi";
import { fetchAllDogList } from "./utils/dogApi";

async function start(dog) {
  try {
    const res = await fetchRandomDogImage(dog);
    const dogImage = document.querySelector("#animals img");
    dogImage.src = res.data.message;
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
    loadingElement.parentNode.removeChild(loadingElement);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getList() {
  try {
    const response = await fetchAllDogList();
    const dogList = response.data.message;
    const dogNames = Object.keys(dogList);
    return dogNames;
  } catch (error) {
    console.log(error);
  }
}

// Use an async function to fetch the list and then append it to the select element.
async function initialize() {
  const dogNamesList = await getList();
  appendToSelect(dogNamesList);
}

function appendToSelect(dogNamesList) {
  const selectBreed = document.getElementById("dog-list");
  let i = 1;
  for (let item of dogNamesList) {
    const option = document.createElement("option");
    option.textContent = item;
    option.setAttribute("id", i);
    i++;
    selectBreed.appendChild(option);
  }
}

initialize(); // Call the initialize function to start the process.
document.getElementById("getImg").addEventListener("click", function() {
  const selectBreed = document.getElementById("dog-list");
  const loadDiv = document.getElementById("load-div");
  const loadingParagraph = document.createElement("p");
  loadingParagraph.id = "loading";
  loadingParagraph.textContent = "Loading ...";
  loadDiv.appendChild(loadingParagraph);

  const dogImage = document.querySelector("#animals img");
  dogImage.src = "image/giphy.gif";

  start(selectBreed.value);
});






//  import { animals } from "./utils/dog";
// //import { allDogs } from "./utils/dog";

// function printDogs() {
//   animals.sayHello();
//   console.log(animals);
// }

// // document.querySelector("#app").innerHTML = `<h1>Hello world</h1>`;
// printDogs();