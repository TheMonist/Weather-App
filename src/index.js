import './styles.scss';
//import './apiFunctions.js';
//import './domFunctions.js'

//Handles Forms
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const conditions = document.querySelector(".conditions");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");

//Event Listeners
searchBtn.addEventListener("click", e => {
    const city = searchInput.value;
    e.preventDefault();
    getWeather(city);
});

//API Function
async function getWeather(city) {
    const apiKey = 'fa970c595d3e4d1fb45205849232906';

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`, {mode:'cors'});
        const getData = await response.json();
        renderWeather(getData)
    }
    catch(error){
        alert('Error: Please Try Again')
    }
};

//Create a function for getting the weather 'DOM Functions'
function renderWeather(getData) {
    cityName.textContent = `${getData.location.name} ${getData.location.region}`; 
    temp.textContent = `Cuurent Temp: ${getData.current.temp_f}°`; 
    feelsLike.textContent = `Feels Like: ${getData.current.feelslike_f}°`;
    conditions.textContent = getData.current.condition.text;
};