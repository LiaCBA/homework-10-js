"use strict";

const popularCarsAPI =
  "https://67ae22fa9e85da2f020c8b80.mockapi.io/popularCars";
const recommendCarsAPI =
  "https://67ae22fa9e85da2f020c8b80.mockapi.io/recommendCars";

function carCards(url, containerId) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById(containerId);
      data.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("white-box");
        function getValueOrDefault(value, defaultValue = "") {
          return value ? value : defaultValue;
        }
        const priceSection = car.oldPrice
          ? ""
          : `
              <p>$${car.price}/ <span>${
              car.per
            }</span><span class="price-100">${getValueOrDefault(
              car.oldPrice
            )}</span></p>
        `;
        card.innerHTML = `<div class="title-container">
              <h2>${car.name}</h2>
              <span>${car.type}</span>
              <img class="my-heart" src="${
                car.favorite
                  ? "assets/heart/red-heart.svg"
                  : "assets/heart/empty-heart.svg"
              }" alt="${car.favorite ? "Red Heart" : "Empty Heart"}" />
              </div>
              <div>
              <img class="car-img" src="${car.img}" alt="${car.name}" />
                </div>
                <div>
                  <div class="desc-text">
                    <div class="desc-item">
                      <p>${car.fuel}</p>
                    </div>
                    <div class="desc-item">
                      <p>${car.transmission}</p>
                    </div>
                    <div class="desc-item">
                      <p>${car.capacity}</p>
                    </div>
                  </div>
                  <div class="price-container">
                  <div class="price">
                  <p>$${car.price}/ <span>${car.per}</span>
                  <span class="price-100">${getValueOrDefault(
                    car.oldPrice
                  )}</span></p>
              <button class="rental-btn">Rent Now</button>
            </div> 
            </div> 
            </div>`;
        container.appendChild(card);
      });
    });
}

carCards(popularCarsAPI, "popularCars");
carCards(recommendCarsAPI, "recommendCars");
