// weather key = 318351475bbc484fb4a125935241201

async function getWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=318351475bbc484fb4a125935241201&q=${location}`);
    const data = await response.json()
    const city = await data["location"]["name"]
    console.log(city);
};
getWeatherData("lusaka")