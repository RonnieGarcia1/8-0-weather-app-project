
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = event.target.search.value
    fetch(`https://wttr.in/${location}?format=j1`)
    .then(response => response.json())
    .then(data => {
        //today
        const todayAvgTemp = data.weather[0].avgtempF;
        const todayMaxTemp = data.weather[0].maxtempF;
        const todayMinTemp = data.weather[0].mintempF;
        //tomorrow
        const tmrwAvgTemp = data.weather[1].avgtempF;
        const tmrwMaxTemp = data.weather[1].maxtempF;
        const tmrwMinTemp = data.weather[1].mintempF;
        // day after
        const AfterAvgTemp = data.weather[2].avgtempF;
        const AftermaxTemp = data.weather[2].maxtempF;
        const AfterminTemp = data.weather[2].mintempF;
        
        // Selecting display section of grid and inserting data dynamically
        const display = document.querySelector(".display")
            display.innerHTML = 
                `<h2>${location}</h2>
                <div id="displayArea"><strong>Area</strong>: ${data.nearest_area[0].areaName[0].value}</div>
                <br> 
                <div id="displayRegion"><strong>Region</strong>: ${data.nearest_area[0].region[0].value}</div> 
                <br>
                <div id="displayCountry"><strong>Country</strong>: ${data.nearest_area[0].country[0].value}</div> 
                <br>
                <div id="displaycurrent"><strong>Currently</strong>: Feels like ${data.current_condition[0].FeelsLikeF}°F</div>`;             
        
        // 3 day forecast
        const today = document.querySelector("#todays-forecast-container");
            today.innerHTML = 
                `<h3>Today</h3>
                <div><strong>Average Temperature</strong>: ${todayAvgTemp}°F</div>
                <br>
                <div><strong>Max Temperature</strong>: ${todayMaxTemp}°F</div>
                <br>
                <div><strong>Min Temperature</strong>: ${todayMinTemp}°F</div>`;

        const tomorrow = document.querySelector("#tomorrows-forecast-container");
            tomorrow.innerHTML =
                `<h3>Tomorrow</h3>
                <div><strong>Average Temperature</strong>: ${tmrwAvgTemp}°F</div>
                <br>
                <div><strong>Max Temperature</strong>: ${tmrwMaxTemp}°F</div>
                <br>
                <div><strong>Min Temperature</strong>: ${tmrwMinTemp}°F</div>`;
            
        const dayAfter = document.querySelector("#day-after-forecast-container");
            dayAfter.innerHTML =
                `<h3>Day After Tomorrow</h3>
                <div><strong>Average Temperature</strong>: ${AfterAvgTemp}°F</div>
                <br>
                <div><strong>Max Temperature</strong>: ${AftermaxTemp}°F</div>
                <br>
                <div><strong>Min Temperature</strong>:${AfterminTemp}°F</div>`;
        })
    .catch((err) =>
    console.log(err))
});
