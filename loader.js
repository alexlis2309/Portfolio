let loader = document.getElementById("loader");
let loader1 = document.getElementById("command");
let loaderDel = document.querySelector(".loader");
let loaderText = "Loading...";
let index = -1;
let index1 = -1;
let endOfLoading = "Loading complited Write !help to get information";
//-----------------------------------------------------------alternate typing function
function start(text,loa,loaderIndex) {
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
// intervalId = setInterval(() => { start(loaderText, loader);
//                                              }, (loaderText.length+2)*100);
//                  setTimeout(() => { clearInterval(intervalId);
//                                             }, 3000);
//----------------------------------------------------------function-timer for loader
let intervalId = setInterval(function () {
    if (++count === 3) {
        clearInterval(intervalId);
        loaderDel.removeChild(loader);
        start(endOfLoading, loader1,index1);
    }
    else {
        start(loaderText, loader,index);
        loader.textContent = "";
        index=-1;
    }
}, 1400);
// function animateText() {
//     let text = 'Loading...';
//     let to = text.length;

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
