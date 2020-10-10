let loader = document.getElementById("loader");
let loaderDel = document.querySelector(".loader");
let loaderText = 'Loading...';
let loaderIndex = -1;
function start() {
   let timer = window.setInterval(function () {
        if (++loaderIndex === loaderText.length)
            clearInterval(timer);
        else
            loader.innerHTML += loaderText[loaderIndex] + '';
    }, 100);
}
count = 0;
intervalId = setInterval(function () {
    count++;
    if (count === 5) {
        clearInterval(intervalId);
        loaderDel.parentNode.removeChild(loaderDel);
    }
    start();
    loader.innerHTML = '';
    loaderIndex = -1;
}, 1400);