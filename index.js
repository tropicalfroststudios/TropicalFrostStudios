let currentRotation = 0;

function rotateSlider(degrees) {
    const slider = document.getElementById('mainSlider');
    currentRotation += degrees;
    slider.style.setProperty('--rotation', currentRotation + 'deg');
}

document.getElementById('mainForm').onsubmit = function(e) {
    e.preventDefault();
    const features = [];
    document.querySelectorAll('input[name="fursuitFeature"]:checked').forEach(c => features.push(c.value));

    const entry = {
        id: Date.now(),
        name: document.getElementById('userName').value,
        p1: document.getElementById('userPlatform1').value,
        p2: document.getElementById('userPlatform2').value,
        email: document.getElementById('userEmail').value,
        age: document.getElementById('userAge').value,
        char: document.getElementById('userCharacter').value,
        style: document.getElementById('userStyle').value,
        feat: features.join(', '),
        ref: document.getElementById('userReference').value,
        exp: document.getElementById('userExperimental').value,
        pack: document.getElementById('userPackage').value,
        bagS: document.getElementById('userBagless').value,
        bagL: document.getElementById('userBagmore').value,
        country: document.getElementById('userCountry').value,
        m1: document.getElementById('userMeasure1').value,
        m2: document.getElementById('userMeasure2').value,
        glasses: document.getElementById('userGlasses').value,
        pay: document.getElementById('userPaymentMethod').value,
        plan: document.getElementById('userPlan').value
    };
    let list = JSON.parse(localStorage.getItem('myFursuitData')) || [];
    list.push(entry);
    localStorage.setItem('myFursuitData', JSON.stringify(list));

    alert("Saved!");
};

let currentIndex = 0;
const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function updateCarousel() {
    // Move the track based on the index
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function moveSlide(direction) {
    currentIndex += direction;
    
    // Loop back logic
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    
    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}