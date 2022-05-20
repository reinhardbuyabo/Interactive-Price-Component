let view = document.getElementById('pageView');
let cost = document.getElementById('cost');
let slider = document.getElementById('price-slider');
let toggle = document.getElementById('billing');
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener('input', function(){
    update();
    view.innerHTML = pageViews[slider.value];

    let valueOne = this.value * 25;
    this.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${valueOne}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%
    )`
});

toggle.addEventListener('change', function(){
    if(isYearly == false) {
        isYearly = true;
    } else {
        isYearly = false;
    }
    update();
});

function update(){
    if(isYearly) {
        cost.innerHTML = (perMonth[slider.value] * 0.75).toString();
    } else {
        cost.innerHTML = perMonth[slider.value].toString();
    }
}