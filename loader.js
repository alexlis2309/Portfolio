let loader = document.getElementById("loader");
let loaderDel = document.querySelector(".loader");
let loaderText = "Loading...";
let loaderIndex = -1;
//-----------------------------------------------------------alternate typing function
function start(text,loa) {
   let timer = window.setInterval(function () {
        if (++loaderIndex === text.length) {
            clearInterval(timer);
        }
        else
            if (text[loaderIndex] === undefined)
                {
                    clearInterval(timer);
                }
            else
                {
                    loa.textContent += text[loaderIndex];
                }
    }, 100);
}
let count = 0;
//----------------------------------------------------------function-timer to do start() 5 times
intervalId = setInterval(function () {
    if (++count === 5) {
        clearInterval(intervalId);
        loaderDel.parentNode.removeChild(loaderDel);
    }
    else {
        start(loaderText, loader);
        loaderIndex=-1;
        loader.textContent = "";
    }
}, 1400);
// function animateText() {
//     let text = 'Loading...';
//     let to = text.length;
//
//     animate({
//         duration: 1000,
//         timing: quad,
//         draw: function(progress) {
//             let result = (to - from) * progress + from;
//             loader.innerHTML = text.substr(0, Math.ceil(result))
//         }
//     })
// }
//
//
//     function quad(timeFraction) {
//         return Math.pow(timeFraction, 2)
//     }
// function animate({timing, draw, duration}) {
//
//     let start = performance.now();
//
//     requestAnimationFrame(function animate(time) {
//         // timeFraction изменяется от 0 до 1
//         let timeFraction = (time - start) / duration;
//         if (timeFraction > 1) timeFraction = 1;
//
//         // вычисление текущего состояния анимации
//         let progress = timing(timeFraction);
//
//         draw(progress); // отрисовать её
//
//         if (timeFraction < 1) {
//             requestAnimationFrame(animate);
//         }
//
//     });
// }
