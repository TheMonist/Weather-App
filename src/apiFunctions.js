const weather = (() => {
    async function getWeather(city) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fa970c595d3e4d1fb45205849232906&q=${city}&aqi=no`, {mode: 'cors'})
    }
})();