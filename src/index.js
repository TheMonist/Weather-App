import './styles.scss';
//import './apiFunctions.js';
//import './domFunctions.js'

//Handles Forms
const searchBtn = document.querySelector("#searchBtn");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const conditions = document.querySelector(".conditions");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");

//API Function
async function getWeather(cityValue) {
    const apiKey = 'fa970c595d3e4d1fb45205849232906';

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}&aqi=yes`, {mode:'cors'});
        const getData = await response.json();
        console.log(response.json())
        console.log(getData);
        renderWeather(getData)
    }
    catch(error){
        alert('Error: Please Try Again')
    }
}

//Create a function for getting the weather
function renderWeather(getData) {
    cityName.textContent = getData.location.name; //location.name
    temp.textContent = getData.current.temp_f; //current.temp_c
    feelsLike.textContent = getData.current.feelslike_f; //current.feelslike_f
    conditions.textContent = getData.current.conditions.text; //current.conditions.text
}

//Event Listeners
//searchForm.addEventListener("submit", 
    //e.preventDefault(), 
//);

searchBtn.addEventListener("click", e => {
    e.preventDefault();
    getWeather();
    renderWeather();
});