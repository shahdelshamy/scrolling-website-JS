let stars = document.querySelector('.stars');
let moon = document.querySelector('.moon');
let mountains3 = document.querySelector('.mountains3');
let mountains4 = document.querySelector('.mountains4');
let river = document.querySelector('.river');
let boat = document.querySelector('.boat');
let text = document.querySelector('.text');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3.25 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    text.style.fontSize = value + 'px';
    if (scrollY >= 53) {
        text.style.fontSize = 50 + 'px';
        text.style.position = 'fixed';
        if (scrollY >= 395) {
            text.style.display = 'none';
        }
        else {
            text.style.display = 'block';
        }

        if (scrollY >= 133) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }
        else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }
    }
    if (scrollY >= 579) {
        document.querySelector('.header').style.display = 'none';
    }
    else {
        document.querySelector('.header').style.display = 'flex';
    }

}
