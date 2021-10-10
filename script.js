
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = event.target.search.value
    //uppercase first letter of input

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
        const AfterMaxTemp = data.weather[2].maxtempF;
        const AfterMinTemp = data.weather[2].mintempF;
        
        // Selecting display section of grid and inserting data dynamically
        const display = document.querySelector(".display")
            display.innerHTML =
                
                `<div class ="main-display-container">
                <h2>${location}</h2>
                <div id="display-area"><strong>Area</strong>: ${data.nearest_area[0].areaName[0].value}</div>
                <br> 
                <div id="display-region"><strong>Region</strong>: ${data.nearest_area[0].region[0].value}</div> 
                <br>
                <div id="display-country"><strong>Country</strong>: ${data.nearest_area[0].country[0].value}</div> 
                <br>
                <div id="display-current"><strong>Currently</strong>: Feels like ${data.current_condition[0].FeelsLikeF}°F</div>             
                </div>
                <div class="todays-forecast-container">
                <h3>Today</h3>
                <div id="today-avg"><strong>Average Temperature</strong>: ${todayAvgTemp}°F</div>
                <br>
                <div id="today-max"><strong>Max Temperature</strong>: ${todayMaxTemp}°F</div>
                <br>
                <div id="today-min"><strong>Min Temperature</strong>: ${todayMinTemp}°F</div>
                </div>
                <div class="tomorrows-forecast-container">
                <h3>Tomorrow</h3>
                <div id="tomorrow-avg"><strong>Average Temperature</strong>: ${tmrwAvgTemp}°F</div>
                <br>
                <div id="tomorrow-max"><strong>Max Temperature</strong>: ${tmrwMaxTemp}°F</div>
                <br>
                <div id="tomorrow-min"><strong>Min Temperature</strong>: ${tmrwMinTemp}°F</div>
                </div>
                <div class="day-after-forecast-container">
                <h3>Day After Tomorrow</h3>
                <div id="after-avg"><strong>Average Temperature</strong>: ${AfterAvgTemp}°F</div>
                <br>
                <div id="after-max"><strong>Max Temperature</strong>: ${AfterMaxTemp}°F</div>
                <br>
                <div id="after-min"><strong>Min Temperature</strong>:${AfterMinTemp}°F</div>
                </div>`;

        //sidebar .history
        let sidebar = document.querySelector(".history")
        let li = document.createElement("li")
        li.classList.add("prev-search")
        li.innerHTML = 
        `<a href="">${data.nearest_area[0].areaName[0].value}</a><span> - ${data.current_condition[0].FeelsLikeF}°F</span>`;
        sidebar.append(li);

        li.addEventListener("click", (event)=>{
            event.preventDefault();
            const display = document.querySelector(".display")
            display.innerHTML =
                
                `<div class ="main-display-container">
                <h2>${location}</h2>
                <div id="display-area"><strong>Area</strong>: ${data.nearest_area[0].areaName[0].value}</div>
                <br> 
                <div id="display-region"><strong>Region</strong>: ${data.nearest_area[0].region[0].value}</div> 
                <br>
                <div id="display-country"><strong>Country</strong>: ${data.nearest_area[0].country[0].value}</div> 
                <br>
                <div id="display-current"><strong>Currently</strong>: Feels like ${data.current_condition[0].FeelsLikeF}°F</div>             
                </div>
                <div class="todays-forecast-container">
                <h3>Today</h3>
                <div id="today-avg"><strong>Average Temperature</strong>: ${todayAvgTemp}°F</div>
                <br>
                <div id="today-max"><strong>Max Temperature</strong>: ${todayMaxTemp}°F</div>
                <br>
                <div id="today-min"><strong>Min Temperature</strong>: ${todayMinTemp}°F</div>
                </div>
                <div class="tomorrows-forecast-container">
                <h3>Tomorrow</h3>
                <div id="tomorrow-avg"><strong>Average Temperature</strong>: ${tmrwAvgTemp}°F</div>
                <br>
                <div id="tomorrow-max"><strong>Max Temperature</strong>: ${tmrwMaxTemp}°F</div>
                <br>
                <div id="tomorrow-min"><strong>Min Temperature</strong>: ${tmrwMinTemp}°F</div>
                </div>
                <div class="day-after-forecast-container">
                <h3>Day After Tomorrow</h3>
                <div id="after-avg"><strong>Average Temperature</strong>: ${AfterAvgTemp}°F</div>
                <br>
                <div id="after-max"><strong>Max Temperature</strong>: ${AfterMaxTemp}°F</div>
                <br>
                <div id="after-min"><strong>Min Temperature</strong>:${AfterMinTemp}°F</div>
                </div>`;
    })
    
        })
    .catch((err) =>
    console.log(err))
});
