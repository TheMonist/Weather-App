import './styles.scss';
import './apiFunctions.js';
import './domFunctions.js'

//Handles Forms
const searchBtn = document.querySelector("#searchBtn");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

searchForm.addEventListener("submit", 
    e.preventDefault(), 
);

searchBtn.addEventListener("click", 
    e.preventDefault(), 
    getWeather
);

//create a function for getting the weather