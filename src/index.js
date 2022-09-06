import getWeather from "./getWeather";
import update from "./update"

window.onload = update(getWeather("Toronto"))

const submit = document.querySelector("#submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let search = document.forms[0]
    let city = search["city"].value
    update(getWeather(city));
    search.reset();
})
