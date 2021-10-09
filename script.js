let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = event.target.search.value
    fetch(`https://wttr.in/${location}?format=j1`)
    .then(response => response.json())
    .then(data => {
        const area = data.nearest_area[0].areaName[0].value
        const region = data.nearest_area[0].region[0].value
        const country = data.nearest_area[0].country[0].value
        const feelsLike = data.current_condition[0].FeelsLikeF

        const weatherForecast = data.weather;

        for(let weather of weatherForecast){
            const averageTemp = weather.avgtempF;
            const maxtempF = weather.maxtempF;
            const mintemp = weather.mintempF;
            const tomorrowsAvgTemp = data.weather[1].avgtempF;
            const tomorrowsmaxTemp = data.weather[1].maxtempF;
            const tomorrowsminTemp = data.weather[1].mintempF;
            const dayAfterAvgTemp = data.weather[2].avgtempF;
            const dayAftermaxTemp = data.weather[2].maxtempF;
            const dayAfterminTemp = data.weather[2].mintempF;
                            
        const display = document.querySelector(".display")
        display.innerHTML = 
            `<h2>${location}</h2>
            <div id="displayArea"><strong>Area</strong>: ${area}</div>
            <br> 
            <div id="displayRegion"><strong>Region</strong>: ${region}</div> 
            <br>
            <div id="displayCountry"><strong>Country</strong>: ${country}</div> 
            <br>
            <div id="displaycurrent"><strong>Currently</strong>: Feels like ${feelsLike}°F</div>
            `;

        const today = document.querySelector("#todays-forecast-container")
        today.innerHTML = 
            `
            <h3>Today</h3>
            <div><strong>Average Temperature</strong>: ${averageTemp}°F</div>
            <br>
            <div><strong>Max Temperature</strong>: ${maxtempF}°F</div>
            <br>
            <div><strong>Min Temperature</strong>: ${mintemp}°F</div>
            `;

        const tomorrow = document.querySelector("#tomorrows-forecast-container")
        tomorrow.innerHTML =
            `<h3>Tomorrow</h3>
            <div><strong>Average Temperature</strong>: ${tomorrowsAvgTemp}°F</div>
            <br>
            <div><strong>Max Temperature</strong>: ${tomorrowsmaxTemp}°F</div>
            <br>
            <div><strong>Min Temperature</strong>: ${tomorrowsminTemp}°F</div>`;
            
        const dayAfter = document.querySelector("#day-after-forecast-container")
        dayAfter.innerHTML =
            `<h3>Day After Tomorrow</h3>
            <div><strong>Average Temperature</strong>: ${dayAfterAvgTemp}°F</div>
            <br>
            <div><strong>Max Temperature</strong>: ${dayAftermaxTemp}°F</div>
            <br>
            <div><strong>Min Temperature</strong>:${dayAfterminTemp}°F</div>`;
            }
    })
    .catch(console.log)
    event.target.reset()

});
