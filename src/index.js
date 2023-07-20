import './styles.scss';
import './apiFunctions.js';
import './domFunctions.js'

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", e => {
    const city = searchInput.value;
    e.preventDefault();
    getWeather(city);
});