"use strict";

const popularCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    img: "./assets/Car.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    img: "./assets/Car (2).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80.0,
    oldPrice: 100.0,
    per: "day",
    favorite: false,
  },
  {
    name: "Rolls-Royce",
    type: "Sedan",
    img: "./assets/Car (3).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96.0,
    oldPrice: null,
    per: "day",
    favorite: false,
  },
  {
    name: "Bugatti",
    type: "Sport",
    img: "./assets/Car (4).png",
    fuel: "100L",
    transmission: "Automatic",
    capacity: "2 People",
    price: 150.0,
    oldPrice: null,
    per: "day",
    favorite: false,
  },
];

const recommendCars = [
  {
    name: "All New Rush",
    type: "SUV",
    img: "./assets/Car (5).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    img: "./assets/Car (6).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: false,
  },
  {
    name: "All New Terios",
    type: "SUV",
    img: "./assets/Car (7).png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    img: "./assets/Car (8).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 76.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "New MGZS",
    type: "SUV",
    img: "./assets/Car (9).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    img: "./assets/Car (10).png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 People",
    price: 74.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
];

function carCards(cars, carContainer) {
  const container = document.getElementById(carContainer);
  cars.forEach((car) => {
    const cardHtml = `  
     <div class="white-box">
            <div class="title-container">
              <h2>${car.name} ${car.favorite}</h2>
              <span>${car.type}</span>
            </div>
            <div>
              <img
                class="car-img"
                src="${car.img}"
                alt="${car.name}" />
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
                  <p>$${car.price}/ <span>${car.per}</span><span class="price-100">$${car.price}</span></p>
                  <button class="rental-btn">Rent Now</button>
                </div>
              </div>
            </div>
          </div>`;
    container.innerHTML += cardHtml;
  });
}

carCards(popularCars, "popularCars");
carCards(recommendCars, "recommendCars");
