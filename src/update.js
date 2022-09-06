import { format } from "date-fns";
import { hideLoader, showLoader } from "./loader";

const weatherInfo = (weather) => {
    const title = Object.keys(weather);
    title.forEach((item) => {
        const text = document.getElementById(item);
        if (item === 'description') {
            let words = weather[item].split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            }
            text.textContent = words.join(" ");
        }
        else {
            text.textContent = weather[item];
        }
    });
};

const weatherImage = (weather) => {
    let hour = new Date().getHours();
    let iconName = weather.iconClass.toLowerCase();
    let imageSlot = document.getElementById('image');
    if (hour >= 18 && hour <= 5) {
        if (iconName === 'clear') {
            iconName += ' night';
        }
    }
    imageSlot.src = `./weather-icons/${iconName}.svg`;
}

const updateTime = () => {
    let time = format(new Date(), 'p');
    let updateSection = document.querySelector('.updatedTime');
    updateSection.textContent = `Updated: ${time}`;
}

const weatherUpdate = (weather) => {
    weatherInfo(weather);
    updateTime();
}

const update = async (promise) => {
    const response = await promise;
    Promise.all([
        Promise.resolve(weatherUpdate(response)),
        Promise.resolve(weatherImage(response))
    ]).then(() => {
        (
            hideLoader()
        )
    })
}

export default update