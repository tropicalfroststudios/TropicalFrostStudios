let currentRotation = 0;

function rotateSlider(degrees) {
    const slider = document.getElementById('mainSlider');
    currentRotation += degrees;
    slider.style.setProperty('--rotation', currentRotation + 'deg');
}