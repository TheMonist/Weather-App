//API Function
async function getWeather(city) {
    const apiKey = 'fa970c595d3e4d1fb45205849232906';

    try {
        const response = await fetch(`
        https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`, {mode:'cors'});
        const getData = await response.json();
        renderWeather(getData)
    }
    catch(error){
        alert('Error: Please Try Again')
    }
};