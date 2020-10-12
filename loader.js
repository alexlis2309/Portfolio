let loader = document.getElementById("loader");
let loader1 = document.getElementById("command");
let loaderDel = document.querySelector(".loader");
let loaderText = "Loading...";
let index = -1;
let index1 = -1;
let endOfLoading = "Loading complited! Press command you need.";
//-----------------------------------------------------------alternate typing function
function start(text,loa,loaderIndex,af) {
   let timer = window.setInterval(function () {
        if (++loaderIndex === text.length) {
            if (af===true) {
                let menu = document.querySelectorAll(".navigate").forEach(n => n.classList.remove("hidden"));
            }
            clearInterval(timer);
        }
        else
            if (text[loaderIndex] === undefined)
                {
                    clearInterval(timer);
                }
            else
                {
                    loa.innerHTML += text[loaderIndex];
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
        start(endOfLoading, loader1,index1,true);
    }
    else {
        start(loaderText, loader,index,false);
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
//глобальная переменная со всеми таймерами для их управления
let timeouts = {};


//функция с обычным таймером
function timer(form, adjust, morework)
{
    //создаем скорость таймера, счетчик итераций и задаем временной штамп для начала отсчета
    let speed = 50,
        counter = 0,
        start = new Date().getTime();

    //пример таймера
    function instance()
    {
        //если флаг morework == true,
        //выполняем некоторые вычисления для увеличения количества работы
        if(morework)
        {
            for(let x=1, i=0; i<1000000; i++) { x *= (i + 1); }
        }

        //вычисляем идеальное и реальное время работы таймера
        //судя по всему, в оригинале, автор изменил названия переменных, чтобы идентифицировать свой код при перепосте.
        let real = (counter * speed),
            ideal = (new Date().getTime() - start);

        //увеличиваем счетчик
        counter++;

        //отображаем вычисленные значения
        form.ideal.value = real;
        form.real.value = ideal;

        //вычисляем и отображаем разницу
        let diff = (ideal - real);
        form.diff.value = diff;

        //если флаг adjust == true, будем вычитать разницу перед последующим вызовом (тем самым реализовав необходимое упреждение)
        if(adjust)
        {
            timeouts[form.id] = window.setTimeout(function() { instance(); }, (speed - diff));
        }

        //и, если флага нет, просто вызываем следующую итерацию
        else
        {
            timeouts[form.id] = window.setTimeout(function() { instance(); }, speed);
        }
    };

    //далее, просто отбрасываем все прочь в случае обычного таймера
    timeouts[form.id] = window.setTimeout(function() { instance(); }, speed);
}
//таймер с самокорректировкой
document.getElementById('adjusting').onsubmit = function()
{
    //ставим флаги
    timer(this, true, true);

    return false;
};

//ресет
document.getElementById('adjusting').onreset = function()
{
    //остановка таймера
    window.clearTimeout(timeouts[this.id]);

    return false;
};