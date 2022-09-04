const weatherInfo = (weather) => {
    const title = Object.keys(weather);
    title.forEach((item) => {
        const text = document.getElementById(item);
        text.textContent = weather[item];
    });
};

const weatherImages = (weather) => {
    let hour = new Date().getHours();
    let iconName = weather.description.toLowerCase();
    let imageSlot = document.getElementById('image');
    if (hour >= 18 && hour <= 5) {
        if (iconName === 'clear') {
            iconName += ' night';
        }
    }
    imageSlot.src = `../dist/weather-icons/${iconName}.svg`;

}

const weatherUpdate = (weather) => {
    weatherInfo(weather);
}

const update = async (promise) => {
    const response = await promise;
    Promise.all([
        Promise.resolve(weatherUpdate(response)),
        Promise.resolve(weatherImages(response))
    ]).then(
        console.log('yes')
    )
}

export default update