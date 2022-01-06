const hiddenCars = [
  {
    name: "Audi e-tron",
    year: 2021,
    color: "Silver",
    topspeed: "190 km/h",
    horsepower: "355",
    range: "357 kilometers",
    url: "./img/audiEtron.jpg",
  },
  {
    name: "Chevrolet Bolt EV",
    year: 2021,
    color: "Blue",
    topspeed: "145 km/h",
    horsepower: "200",
    range: "417 kilometers",
    url: "./img/chevroletBoltEV.jpg",
  },
  {
    name: "Hyundai Ioniq 5",
    year: 2021,
    color: "Silver",
    topspeed: "185 km/h",
    horsepower: "168",
    range: "383 kilometers",
    url: "./img/hyundaiIoniq5.jpg",
  },
  {
    name: "Tesla model Y",
    year: 2021,
    color: "Blue",
    topspeed: "190 km/h",
    horsepower: "N/A",
    range: "217 kilometers",
    url: "./img/teslaY.jpg",
  },
  {
    name: "Volkswagen ID 4",
    year: 2021,
    color: "White",
    topspeed: "160 km/h",
    horsepower: "201",
    range: "402 kilometers",
    url: "./img/vWID4.jpg",
  },
  {
    name: "Ford Mustang Mach-E",
    year: 2021,
    color: "Navy",
    topspeed: "180 km/h",
    horsepower: "266",
    range: "483 kilometers",
    url: "./img/FordMustangMach-E.jpg",
  },
  {
    name: "Hyundai Kona EV",
    year: 2021,
    color: "White",
    topspeed: "167 km/h",
    horsepower: "201",
    range: "415 kilometers",
    url: "./img/konaev.jpg",
  },
  {
    name: "Tesla model 3",
    year: 2021,
    color: "White",
    topspeed: "233 km/h",
    horsepower: "N/A",
    range: "568 kilometers",
    url: "./img/tesla3.jpg",
  },
  {
    name: "Porsche Taycan",
    year: 2021,
    color: "Light blue",
    topspeed: "250 km/h",
    horsepower: "402",
    range: "320 kilometers",
    url: "./img/PorscheTaycan.jpg",
  },
];

const visibleCars = [];

const root = document.getElementById("root");

const showCar = () => {
  if (hiddenCars.length > 0) {
    // get a car from hiddenCars and move it to visibleCars
    const car = hiddenCars.shift();
    visibleCars.push(car);
    renderCar(car);
  }
};

const renderCar = (car) => {
  let box = document.createElement("div");
  box.className = "box";

  let list = document.createElement("ul");
  box.appendChild(list);

  let name = document.createElement("li");
  name.innerText = car.name;
  box.appendChild(name);

  let year = document.createElement("li");
  year.innerText = car.year;
  box.appendChild(year);

  let color = document.createElement("li");
  color.innerText = car.color;
  box.appendChild(color);

  let topspeed = document.createElement("li");
  topspeed.innerText = car.topspeed;
  box.appendChild(topspeed);

  let horsepower = document.createElement("li");
  horsepower.innerText = car.horsepower;
  box.appendChild(horsepower);

  let range = document.createElement("li");
  range.innerText = car.range;
  box.appendChild(range);

  let img = document.createElement("img");
  img.src = car.url;
  img.className = "img";
  box.appendChild(img);

  let btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.onclick = () => hideCar(car);
  box.appendChild(btn);

  root.appendChild(box);
};

const hideCar = (car) => {
  const index = visibleCars.indexOf(car);
  visibleCars.splice(index, 1);
  hiddenCars.push(car);

  const box = root.children[index];
  root.removeChild(box);
};

for (let i = 0; i < 5; i++) {
  showCar();
}

// var box = document.getElementsByClassName("box");

// const showCars = () => {
//   root.innerHTML = "";
//   for (let i = 0; i < 5; i++) {
//     root.innerHTML += `<div class="box"> <ul> <li> Name: ${cars[i].name} </li> <li> Year: ${cars[i].year} </li> <li> Color: ${cars[i].color} </li> <li> Topspeed: ${cars[i].topspeed} </li> <li> Horsepower: ${cars[i].horsepower} </li> <li> Range: ${cars[i].range} </li> <img src=${cars[i].url}> </ul> <button onclick="removeCar(${i})">Remove</button </div>`;
//   }
// };

// const removeCar = (indexToRemove) => {
//   box[indexToRemove].remove();
// };

// const addCar = () => {
//   root.innerHTML += `<div class="box"> <ul> <li> Name: ${
//     cars[box.length].name
//   } </li> <li> Year: ${cars[box.length].year} </li> <li> Color: ${
//     cars[box.length].color
//   } </li> <li> Topspeed: ${cars[box.length].topspeed} </li> <li> Horsepower: ${
//     cars[box.length].horsepower
//   } </li> <li> Range: ${cars[box.length].range} </li> <img src=${
//     cars[box.length].url
//   }> </ul> <button onclick="removeCar(${box.length})">Remove</button </div>`;
// };

// showCars();

// I showCars viser den de første 5 biler, fordi i < 5. Og når man trykker på addCar, så tilføjer den et nyt 'lol' element, så længe der er nogle at tage af dvs. så længe værdien ikke overstiger lol.length
