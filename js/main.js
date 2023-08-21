// Declare Variables

let country = `cairo` || inp.value,
  left = document.getElementById("left"),
  myCloud = document.getElementById("cloud"),
  degree = document.getElementById("degree"),
  windSpead = document.getElementById("windSpead"),
  Humidity = document.getElementById("Humidity"),
  wind = document.querySelector("wind"),
  btn = document.getElementById("btn"),
  inp = document.getElementById("inp"),
  city = document.getElementById("city"),
  currentImg = document.getElementById("currentImg"),
  weatherInfo = document.querySelector(".weatherInfo");

const myReq = new XMLHttpRequest();
myReq.open(
  "GET",
  `https://api.weatherapi.com/v1/current.json?key=29dc98cf498a43c9b7523532232108&q=${country}&aqi=yes`
);

btn.onclick = (e) => {
  e.preventDefault();
  country = inp.value;
  myReq.open(
    "GET",
    `https://api.weatherapi.com/v1/current.json?key=29dc98cf498a43c9b7523532232108&q=${country}&aqi=yes`
  );
  myReq.send();
  inp.value = "";
};
myReq.send();

myReq.onreadystatechange = () => {
  if (myReq.readyState === 4 && myReq.status === 200) {
    let myArray = JSON.parse(myReq.responseText);

    currentImg.src = `http:${myArray.current.condition.icon}`;
    city.innerHTML = `${myArray.location.name} / ${myArray.location.country}`;
    myCloud.src = `http:${myArray.current.condition.icon}`;
    degree.innerHTML = `${myArray.current.temp_c} °C`;
    windSpead.innerHTML = `${myArray.current.wind_kph}Kph`;
    Humidity.innerHTML = `${myArray.current.humidity} %`;
  }
};
