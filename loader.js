    let loader = document.getElementById("loader");
    let  loaderDel= document.querySelector(".loader");
    let loaderText = 'Loading...';
    let loaderIndex = -1;
    let timer;
    function start() {
        timer = window.setInterval(function () {
            if (++loaderIndex == loaderText.length)
                clearInterval(timer);
            else
                loader.innerHTML += loaderText[loaderIndex] + '';
        }, 200);
    }
    count = 0;
    intervalId = setInterval(function () {
        count++;
        if (count == 5) {
            clearInterval(intervalId);
            loaderDel.parentNode.removeChild(loaderDel);
        }
        start();
        loader.innerHTML = '';
        loaderIndex = -1;
    }, 2400);


