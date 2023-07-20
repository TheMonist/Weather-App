const body = document.querySelector('body');
const searchInput = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const conditions = document.querySelector(".conditions");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");

//Create a function for getting the weather 'DOM Functions'
function renderWeather(getData) {
    cityName.textContent = `${getData.location.name}, ${getData.location.region}`; 
    temp.textContent = `Current Temp: ${getData.current.temp_f}°`; 
    feelsLike.textContent = `Feels Like: ${getData.current.feelslike_f}°`;
    conditions.textContent = getData.current.condition.text;
    humidity.textContent = `Humidity: ${getData.current.humidity}%`;
};