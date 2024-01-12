// weather key = 318351475bbc484fb4a125935241201
let userInput = document.querySelector(".user-input");
let searchBtn = document.querySelector(".search");
let cityElem = document.querySelector(".city");
let tempElem = document.querySelector(".temp");
let conElem = document.querySelector(".condition");

let cloudElem = document.querySelector(".cloud");
let humidityElem = document.querySelector(".humidity");




async function getWeatherData() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=318351475bbc484fb4a125935241201&q=${userInput.value}`);

    const data = await response.json();
    const city = await data["location"]["name"];
    const temp = await data["current"]["temp_c"];
    const condition = await data["current"]["condition"]["text"];
    const humidity = await data["current"]["humidity"];
    const cloud = await data["current"]["cloud"];
    const pic = await data["current"]["condition"]["icon"]

    try {
        cityElem.innerHTML = city;
        tempElem.innerHTML = `${temp}°C`;
        conElem.innerHTML = condition;
        cloudElem.innerHTML = `cloud cover: ${cloud}`
        document.getElementById("image").src = "//cdn.weatherapi.com/weather/64x64/day/116.png";
        console.log(pic)
    } catch (err) {
        console.error(err)

    }
    console.log(pic)
};
searchBtn.addEventListener("click", getWeatherData)