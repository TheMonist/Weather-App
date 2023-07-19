const weather = (() => {
    const apiKey = 'fa970c595d3e4d1fb45205849232906';

    async function getLocation(searchInput) {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}&aqi=yes`, {mode:'cors'});
            const getData = await response.json();
            return getData; 
        }
        catch (error) {
            alert(error);
            console.log(error); 
            return null; 
        } 
    }
    return {getLocation}; 
})();

export default weather;