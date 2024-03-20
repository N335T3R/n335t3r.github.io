export default async function weatherFetch() {
    const url = "http://api.weatherapi.com/v1/current.json?key=09c588bed7ce472bbe7201012241903&q=15232";
    const response = await fetch(url, {mode: 'cors'});
    const data = await response.json();


    if (data.error) {
        console.log('error');
        const code = data.error.code;
        console.log(code);

        if (code === 1006) {
            console.log('No matching location found');
        }
    }

    return data;
}


export function skimWeatherData(weatherData, data) {
    weatherData[0] = data.current.temp_f;
    weatherData[1] = data.current.condition.text;
    weatherData[2] = data.current.condition.icon;
    weatherData[3] = data.location.name;
    weatherData[4] = data.location.region;
    return weatherData;
}

export function updateWeatherDiv(data) {
    const weatherDiv = document.getElementById('weatherDiv');
    const temp = document.getElementById('temp');
    const condition = document.getElementById('condition');
    const icon = document.getElementById('weatherIcon');
    const city = document.getElementById('city');

    const bgColors = [
        "rgb(75, 12, 118)",
        "rgb(135, 30, 176)",
        "rgb(40, 107, 209",
        "rgb(40, 206, 209)",
        "rgb(0, 197, 120)",
        "rgb(108, 210, 40)",
        "rgb(255, 191, 0)",
        "rgb(255, 145, 0)"
    ];

    if (data === undefined || null) {
        console.log('error loading data');
        weatherDiv.children.classList.add('weatherDivHide');
        icon.classList.add('weatherDivHide');   
    } else {
        weatherDiv.classList.remove('weatherDivHide');
        weatherDiv.classList.add('weatherDiv');
        temp.textContent = data[0];
        condition.textContent = data[1];
        icon.src = data[2];
        city.textContent = data[3];

        console.log(bgColors);
        const temperature = data[0];
        if (temperature > -1 && temperature <= 10) {
            weatherDiv.style.backgroundColor = bgColors[0];
        } else if (temperature > 10 && temperature <= 20) {
            weatherDiv.style.backgroundColor = bgColors[1];
        } else if (temperature > 20 && temperature <= 40) {
            weatherDiv.style.backgroundColor = bgColors[2];
        } else if (temperature > 40 && temperature <= 50) {
            weatherDiv.style.backgroundColor = bgColors[3];
        } else if (temperature > 50 && temperature <= 60) {
            weatherDiv.style.backgroundColor = bgColors[4];
        } else if (temperature > 60 && temperature <= 70) {
            weatherDiv.style.backgroundColor = bgColors[5];
        } else if (temperature > 70 && temperature <= 80) {
            weatherDiv.style.backgroundColor = bgColors[6];
        } else if (temperature > 80) {
            weatherDiv.style.backgroundColor = bgColors[7];
        }
    }
}