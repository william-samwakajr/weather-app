// weather key = 318351475bbc484fb4a125935241201

async function getWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=318351475bbc484fb4a125935241201&q=${location}`);

    const data = await response.json();
    const city = await data["location"]["name"];
    const temp = await data["current"]["temp_c"];
    const condition = await data["current"]["condition"]["text"];
    const humidity = await data["current"]["humidity"];
    const cloud = await data["current"]["cloud"];

    console.log(`current location: ${city}`);
    console.log(`curren temperature: ${temp}`);
    console.log(`current condition: ${condition}`)
    console.log(`current humidity: ${humidity}`)
    console.log(`current cloud cover: ${cloud}`)
};
getWeatherData("dubai")