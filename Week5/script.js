function myInterval() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.01;
}

function myClickEvent() {    
    var element = document.getElementById('circle');
    var leftPosition = element.offsetLeft;
    element.style.left = leftPosition - 10 + 'px';
}

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('keydown', myClickEvent);
    element.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', myLoadFunction);