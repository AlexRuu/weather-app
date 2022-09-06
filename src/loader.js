function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'flex'
}

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'
}

export {
    showLoader,
    hideLoader
}