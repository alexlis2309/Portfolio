    let t = document.getElementById("loader");
    let txt = 'Loading...';
    let index = -1;
    let timer;
    function start() {
        timer = window.setInterval(function () {
            if (++index == txt.length)
                clearInterval(timer);
            else
                t.innerHTML += txt[index] + '';
        }, 200);
    }
    count = 0;
    intervalId = setInterval(function () {
        count++;
        if (count == 5) {
            clearInterval(intervalId);
        }
        start();
        t.innerHTML = '';
        index = -1;
    }, 2400);

    t.innerHTML = '';
