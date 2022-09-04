import { format, fromUnixTime } from 'date-fns'

async function getWeather(city) {
    const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ee2ed601a95ef5460a00a3f55159341&units=metric`)
    const data = await results.json()
    const weatherData = {
        location: data.name,   
        temperature: Math.round(data.main.temp) + ' °C',
        feels: `Feels like: ${Math.round(data.main.feels_like)} °C`,
        description: data.weather[0].main,
        humidity: `Humidity: ${data.main.humidity} %`,
        wind: `Wind: ${Math.round((data.wind.speed * 3600) / 1000)} km/h`,
        sunset: format(fromUnixTime(data.sys.sunset), 'PPpp'),
        sunrise: format(fromUnixTime(data.sys.sunrise), 'PPpp')
    }
    return weatherData;
};

export default getWeather