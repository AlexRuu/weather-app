import { format, fromUnixTime } from 'date-fns'
import { showLoader } from './loader'

async function getWeather(city) {
    showLoader();
    const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ee2ed601a95ef5460a00a3f55159341&units=metric`)
    const data = await results.json()
    const weatherData = {
        location: data.name,   
        temperature: Math.round(data.main.temp) + ' °C',
        feels: `Feels like: ${Math.round(data.main.feels_like)} °C`,
        iconClass: data.weather[0].main,
        description: data.weather[0].description,
        humidity: `${data.main.humidity} %`,
        wind: `${Math.round((data.wind.speed * 3600) / 1000)} km/h`,
        sunset: format(fromUnixTime(data.sys.sunset), 'pp'),
        sunrise: format(fromUnixTime(data.sys.sunrise), 'pp')
    }
    return weatherData;
};

export default getWeather