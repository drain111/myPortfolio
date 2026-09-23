"use strict";
class Weather {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.iconArray = [
            { code: 0, label: "Cloud development not observed or not observable", icon: "fa-sun" },
            { code: 1, label: "Clouds generally dissolving or becoming less developed", icon: "fa-cloud-sun" },
            { code: 2, label: "State of sky on the whole unchanged", icon: "fa-sun" },
            { code: 3, label: "Clouds generally forming or developing", icon: "fa-cloud-sun" },
            { code: 4, label: "Visibility reduced by smoke", icon: "fa-smog" },
            { code: 5, label: "Haze", icon: "fa-smog" },
            { code: 6, label: "Widespread dust in suspension in the air", icon: "fa-wind" },
            { code: 7, label: "Dust or sand raised by wind", icon: "fa-wind" },
            { code: 8, label: "Well developed dust whirls or sand whirls", icon: "fa-wind" },
            { code: 9, label: "Duststorm or sandstorm within sight or at station", icon: "fa-wind" },
            { code: 10, label: "Mist", icon: "fa-smog" },
            { code: 11, label: "Patches of shallow fog or ice fog", icon: "fa-smog" },
            { code: 12, label: "More or less continuous shallow fog or ice fog", icon: "fa-smog" },
            { code: 13, label: "Lightning visible, no thunder heard", icon: "fa-bolt" },
            { code: 14, label: "Precipitation within sight, not reaching the ground", icon: "fa-cloud-sun-rain" },
            { code: 15, label: "Precipitation distant (> 5 km)", icon: "fa-cloud-sun-rain" },
            { code: 16, label: "Precipitation near to, but not at station", icon: "fa-cloud-rain" },
            { code: 17, label: "Thunderstorm, but no precipitation", icon: "fa-cloud-bolt" },
            { code: 18, label: "Squalls at or within sight of station", icon: "fa-wind" },
            { code: 19, label: "Funnel cloud(s) (tornado or waterspout)", icon: "fa-tornado" },
            { code: 20, label: "Recent drizzle or snow grains", icon: "fa-cloud-rain" },
            { code: 21, label: "Recent rain (not freezing)", icon: "fa-cloud-rain" },
            { code: 22, label: "Recent snow", icon: "fa-snowflake" },
            { code: 23, label: "Recent rain and snow or ice pellets", icon: "fa-cloud-meatball" },
            { code: 24, label: "Recent freezing drizzle or freezing rain", icon: "fa-icicles" },
            { code: 25, label: "Recent shower(s) of rain", icon: "fa-cloud-showers-heavy" },
            { code: 26, label: "Recent shower(s) of snow / rain and snow", icon: "fa-snowflake" },
            { code: 27, label: "Recent shower(s) of hail", icon: "fa-cloud-meatball" },
            { code: 28, label: "Recent fog or ice fog", icon: "fa-smog" },
            { code: 29, label: "Recent thunderstorm", icon: "fa-cloud-bolt" },
            { code: 30, label: "Slight/moderate duststorm/sandstorm (decreased)", icon: "fa-wind" },
            { code: 31, label: "Slight/moderate duststorm/sandstorm (no change)", icon: "fa-wind" },
            { code: 32, label: "Slight/moderate duststorm/sandstorm (begun/increased)", icon: "fa-wind" },
            { code: 33, label: "Severe duststorm/sandstorm (decreased)", icon: "fa-wind" },
            { code: 34, label: "Severe duststorm/sandstorm (no change)", icon: "fa-wind" },
            { code: 35, label: "Severe duststorm/sandstorm (begun/increased)", icon: "fa-wind" },
            { code: 36, label: "Slight or moderate blowing snow (low)", icon: "fa-snowflake" },
            { code: 37, label: "Heavy drifting snow", icon: "fa-snowflake" },
            { code: 38, label: "Slight or moderate blowing snow (high)", icon: "fa-snowflake" },
            { code: 39, label: "Heavy drifting snow", icon: "fa-snowflake" },
            { code: 40, label: "Fog or ice fog at a distance", icon: "fa-smog" },
            { code: 41, label: "Fog or ice fog in patches", icon: "fa-smog" },
            { code: 42, label: "Fog or ice fog, sky visible (thinner)", icon: "fa-smog" },
            { code: 43, label: "Fog or ice fog, sky invisible", icon: "fa-smog" },
            { code: 44, label: "Fog or ice fog, sky visible (no change)", icon: "fa-smog" },
            { code: 45, label: "Fog or ice fog, sky invisible", icon: "fa-smog" },
            { code: 46, label: "Fog or ice fog, sky visible (thicker)", icon: "fa-smog" },
            { code: 47, label: "Fog or ice fog, sky invisible", icon: "fa-smog" },
            { code: 48, label: "Fog depositing rime, sky visible", icon: "fa-smog" },
            { code: 49, label: "Fog depositing rime, sky invisible", icon: "fa-smog" },
            { code: 50, label: "Drizzle, slight, intermittent", icon: "fa-cloud-rain" },
            { code: 51, label: "Drizzle, slight, continuous", icon: "fa-cloud-rain" },
            { code: 52, label: "Drizzle, moderate, intermittent", icon: "fa-cloud-rain" },
            { code: 53, label: "Drizzle, moderate, continuous", icon: "fa-cloud-rain" },
            { code: 54, label: "Drizzle, heavy, intermittent", icon: "fa-cloud-showers-heavy" },
            { code: 55, label: "Drizzle, heavy, continuous", icon: "fa-cloud-showers-heavy" },
            { code: 56, label: "Drizzle, freezing, slight", icon: "fa-icicles" },
            { code: 57, label: "Drizzle, freezing, moderate or heavy", icon: "fa-icicles" },
            { code: 58, label: "Drizzle and rain, slight", icon: "fa-cloud-rain" },
            { code: 59, label: "Drizzle and rain, moderate or heavy", icon: "fa-cloud-showers-heavy" },
            { code: 60, label: "Rain, slight, intermittent", icon: "fa-cloud-rain" },
            { code: 61, label: "Rain, slight, continuous", icon: "fa-cloud-rain" },
            { code: 62, label: "Rain, moderate, intermittent", icon: "fa-cloud-rain" },
            { code: 63, label: "Rain, moderate, continuous", icon: "fa-cloud-rain" },
            { code: 64, label: "Rain, heavy, intermittent", icon: "fa-cloud-showers-heavy" },
            { code: 65, label: "Rain, heavy, continuous", icon: "fa-cloud-showers-heavy" },
            { code: 66, label: "Rain, freezing, slight", icon: "fa-icicles" },
            { code: 67, label: "Rain, freezing, moderate or heavy", icon: "fa-icicles" },
            { code: 68, label: "Rain or drizzle and snow, slight", icon: "fa-cloud-meatball" },
            { code: 69, label: "Rain or drizzle and snow, moderate or heavy", icon: "fa-cloud-meatball" },
            { code: 70, label: "Intermittent snowflakes, slight", icon: "fa-snowflake" },
            { code: 71, label: "Continuous snowflakes, slight", icon: "fa-snowflake" },
            { code: 72, label: "Intermittent snowflakes, moderate", icon: "fa-snowflake" },
            { code: 73, label: "Continuous snowflakes, moderate", icon: "fa-snowflake" },
            { code: 74, label: "Intermittent snowflakes, heavy", icon: "fa-snowflake" },
            { code: 75, label: "Continuous snowflakes, heavy", icon: "fa-snowflake" },
            { code: 76, label: "Diamond dust", icon: "fa-snowflake" },
            { code: 77, label: "Snow grains", icon: "fa-snowflake" },
            { code: 78, label: "Isolated star-like snow crystals", icon: "fa-snowflake" },
            { code: 79, label: "Ice pellets", icon: "fa-icicles" },
            { code: 80, label: "Rain shower(s), slight", icon: "fa-cloud-sun-rain" },
            { code: 81, label: "Rain shower(s), moderate or heavy", icon: "fa-cloud-showers-heavy" },
            { code: 82, label: "Rain shower(s), violent", icon: "fa-cloud-showers-heavy" },
            { code: 83, label: "Shower(s) of rain and snow mixed, slight", icon: "fa-cloud-meatball" },
            { code: 84, label: "Shower(s) of rain and snow mixed, moderate or heavy", icon: "fa-cloud-meatball" },
            { code: 85, label: "Snow shower(s), slight", icon: "fa-snowflake" },
            { code: 86, label: "Snow shower(s), moderate or heavy", icon: "fa-snowflake" },
            { code: 87, label: "Shower(s) of snow pellets / small hail, slight", icon: "fa-cloud-meatball" },
            { code: 88, label: "Shower(s) of snow pellets / small hail, moderate or heavy", icon: "fa-cloud-meatball" },
            { code: 89, label: "Shower(s) of hail, slight", icon: "fa-cloud-meatball" },
            { code: 90, label: "Shower(s) of hail, moderate or heavy", icon: "fa-cloud-meatball" },
            { code: 91, label: "Slight rain with recent thunderstorm", icon: "fa-cloud-bolt" },
            { code: 92, label: "Moderate or heavy rain with recent thunderstorm", icon: "fa-cloud-bolt" },
            { code: 93, label: "Slight snow / rain and snow / hail with recent thunderstorm", icon: "fa-cloud-bolt" },
            { code: 94, label: "Moderate or heavy snow / hail with recent thunderstorm", icon: "fa-cloud-bolt" },
            { code: 95, label: "Thunderstorm, slight or moderate, with rain/snow", icon: "fa-cloud-bolt" },
            { code: 96, label: "Thunderstorm, slight or moderate, with hail", icon: "fa-cloud-bolt" },
            { code: 97, label: "Thunderstorm, heavy, with rain/snow", icon: "fa-cloud-bolt" },
            { code: 98, label: "Thunderstorm combined with duststorm/sandstorm", icon: "fa-cloud-bolt" },
            { code: 99, label: "Thunderstorm, heavy, with hail", icon: "fa-cloud-bolt" }
        ];
    }
    async ConsultApi() {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code&forecast_days=1`;
            const respuesta = await fetch(url);
            if (!respuesta.ok)
                throw new Error('Error en la red');
            const datos = await respuesta.json();
            const degreesElement = document.getElementById("degrees");
            if (degreesElement) {
                degreesElement.innerText = `${datos.current.temperature_2m}ºC`;
            }
            const weatherIconElement = document.getElementById("weatherIcon");
            if (weatherIconElement) {
                const iconData = this.iconArray[datos.current.weather_code];
                weatherIconElement.innerHTML = `<i class='fa-solid ${iconData.icon}'></i>`;
            }
        }
        catch (error) {
            console.error('Hubo un problema:', error);
        }
    }
}
const spanish = {
    error: "Para consultar el tiempo de tu localidad, necesito acceso a tu posición.",
};
const english = {
    error: "To check the weather in your area, I need access to your location.",
};
const languageTexts = {
    "es": spanish,
    "en": english
};
const now = new Date();
ChangeDate();
function getLanguage() {
    const path = window.location.pathname;
    const match = Object.keys(languageTexts).find(code => path.includes(`/${code}/`));
    return match ?? "en";
}
const currentLanguage = getLanguage();
function ChangeDate() {
    setInterval(function () {
        now.setTime(Date.now());
        const hourElement = document.getElementById("hour");
        if (hourElement) {
            hourElement.innerText = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        }
        const dateElement = document.getElementById("date");
        if (dateElement) {
            dateElement.innerText = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
        }
    }, 1000);
}
ChangeWeather();
function ChangeWeather() {
    if ("geolocation" in navigator) {
        const geo = navigator.geolocation;
        geo.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const weather = new Weather(latitude, longitude);
            setInterval(() => {
                weather.ConsultApi();
            }, 180000);
        }, (error) => {
            switch (error.code) {
                case 1: // PERMISSION_DENIED
                    alert(languageTexts[currentLanguage].error);
                    break;
                case 2: // POSITION_UNAVAILABLE
                    console.error("Location information is unavailable.");
                    break;
                case 3: // TIMEOUT
                    alert(languageTexts[currentLanguage].error);
                    break;
                default:
                    console.error("An unknown error occurred.");
            }
        }, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 0
        });
    }
    else {
        console.error("Geolocation is not supported by this browser.");
    }
}
GetBattery();
function GetBattery() {
    try {
        const navWithBattery = navigator;
        if (navWithBattery.getBattery) {
            navWithBattery.getBattery().then((battery) => {
                ChangeBatteryLevels(battery);
                battery.addEventListener("levelchange", () => {
                    ChangeBatteryLevels(battery);
                });
            });
        }
    }
    catch (err) {
        // this function only works in chromium browsers, so firefox and all of those will jump here
    }
}
function ChangeBatteryLevels(battery) {
    // to simplify we'll just draw 3 levels of battery
    const batteryElement = document.getElementById("battery");
    if (!batteryElement)
        return;
    if (battery.level >= 0.75) {
        batteryElement.innerHTML = "<i class='fa-solid fa-battery-full'></i>";
    }
    else if (battery.level <= 0.25) {
        batteryElement.innerHTML = "<i class='fa-solid fa-battery-quarter'></i>";
    }
    else {
        batteryElement.innerHTML = "<i class='fa-solid fa-battery-half'></i>";
    }
}
//# sourceMappingURL=bottomBar.js.map