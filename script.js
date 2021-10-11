
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const location = event.target.search.value
        const city = location[0].toUpperCase() + location.slice(1);
        
        fetch(`https://wttr.in/${location}?format=j1`)
        .then(response => response.json())
        .then(data => {

        // Display
        const area = data.nearest_area[0].areaName[0].value;
        const region = data.nearest_area[0].region[0].value;
        const country = data.nearest_area[0].country[0].value;
        const currentWeather = data.current_condition[0].FeelsLikeF;
        // Today
        const todayAvgTemp = data.weather[0].avgtempF;
        const todayMaxTemp = data.weather[0].maxtempF;
        const todayMinTemp = data.weather[0].mintempF;
        // Tomorrow
        const tmrwAvgTemp = data.weather[1].avgtempF;
        const tmrwMaxTemp = data.weather[1].maxtempF;
        const tmrwMinTemp = data.weather[1].mintempF;
        // Day after
        const afterAvgTemp = data.weather[2].avgtempF;
        const afterMaxTemp = data.weather[2].maxtempF;
        const afterMinTemp = data.weather[2].mintempF;
        
        // applying html elements and inserting data dynamically
        const display = document.querySelector(".display")
        const content = display.innerHTML =
                
                `<div class ="main-display-container">
                <h2>${city}</h2>
                <br>
                <div id="display-area"><strong>Area</strong>: ${area}</div>
                <br> 
                <div id="display-region"><strong>Region</strong>: ${region}</div> 
                <br>
                <div id="display-country"><strong>Country</strong>: ${country}</div> 
                <br>
                <div id="display-current"><strong>Currently</strong>: Feels like ${currentWeather}°F</div>             
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
                <div id="after-avg"><strong>Average Temperature</strong>: ${afterAvgTemp}°F</div>
                <br>
                <div id="after-max"><strong>Max Temperature</strong>: ${afterMaxTemp}°F</div>
                <br>
                <div id="after-min"><strong>Min Temperature</strong>: ${afterMinTemp}°F</div>
                </div>`;

        // Adds previous searches to Sidebar
        const sidebar = document.querySelector(".history")
        const li = document.createElement("li")
        li.classList.add("prev-search")
        const ul = document.querySelector(".prev-placeholder")
        li.innerHTML = 
        `<a href="">${city}</a><span> - ${data.current_condition[0].FeelsLikeF}°F</span>`;
        sidebar.append(li);
        ul.innerHTML = "";

        // updates display with city selected from previous search sidebar
        li.addEventListener("click", (event)=>{
            event.preventDefault();
            const display = document.querySelector(".display")
            display.innerHTML = content;
            })
        })
    .catch((err) =>
    console.log(err))
    event.target.reset()
});
