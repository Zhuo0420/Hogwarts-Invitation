 //每五秒換背景
 function slideshow() {
    var bg_disply = document.getElementById("dev-bg"),
        imgs = bg_disply.getElementsByTagName("img");
    var dots = document.getElementsByClassName("bg-dot");
    var current = 0;
    var slideon;

    function slideOff() {
        imgs[current].className = "";
        dots[current].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
    function slideOn() {
        imgs[current].className = "active";
        dots[current].style.backgroundColor = "white";
    }
    function changeSlide() {
        slideOff();
        current++;
        if (current >= imgs.length) current = 0;
        slideOn();
    }

    function changeSlide_start() {
        slideon = setInterval(changeSlide, 5000);
    }
    function changeSlide_pause() {
        clearInterval(slideon);
    }

    //畫面下方點擊圓點換背景
    dots[0].addEventListener('click', function () {
        changeSlide_pause();
        imgs[current].className = "";
        dots[current].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        imgs[0].className = "active";
        dots[0].style.backgroundColor = "white";
        current = 0;
        changeSlide_start();
    })
    dots[1].addEventListener('click', function () {
        changeSlide_pause();
        imgs[current].className = "";
        dots[current].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        imgs[1].className = "active";
        dots[1].style.backgroundColor = "white";
        current = 1;
        changeSlide_start();
    })
    dots[2].addEventListener('click', function () {
        changeSlide_pause();
        imgs[current].className = "";
        dots[current].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        imgs[2].className = "active";
        dots[2].style.backgroundColor = "white";
        current = 2;
        changeSlide_start();
    })
    dots[3].addEventListener('click', function () {
        changeSlide_pause();
        imgs[current].className = "";
        dots[current].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        imgs[3].className = "active";
        dots[3].style.backgroundColor = "white";
        current = 3;
        changeSlide_start();
    })
    dots[4].addEventListener('click', function () {
        changeSlide_pause();
        imgs[current].className = "";
        dots[current].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        imgs[4].className = "active";
        dots[4].style.backgroundColor = "white";
        current = 4;
        changeSlide_start();
    })
    changeSlide_start();
}
slideshow();
//外部連結按鍵動畫
var gamesNav = document.getElementById("dev-games"),
    gamesLogo = gamesNav.getElementsByTagName("img");
gamesLogo[0].addEventListener("mouseover", function () {
    gamesLogo[0].style.opacity = "1";
    gamesLogo[1].style.opacity = "0.4";
    gamesLogo[2].style.opacity = "0.4";
    gamesLogo[3].style.opacity = "0.4";
    gamesLogo[4].style.opacity = "0.4";
})
gamesLogo[1].addEventListener("mouseover", function () {
    gamesLogo[0].style.opacity = "0.4";
    gamesLogo[1].style.opacity = "1";
    gamesLogo[2].style.opacity = "0.4";
    gamesLogo[3].style.opacity = "0.4";
    gamesLogo[4].style.opacity = "0.4";
})
gamesLogo[2].addEventListener("mouseover", function () {
    gamesLogo[0].style.opacity = "0.4";
    gamesLogo[1].style.opacity = "0.4";
    gamesLogo[2].style.opacity = "1";
    gamesLogo[3].style.opacity = "0.4";
    gamesLogo[4].style.opacity = "0.4";
})
gamesLogo[3].addEventListener("mouseover", function () {
    gamesLogo[0].style.opacity = "0.4";
    gamesLogo[1].style.opacity = "0.4";
    gamesLogo[2].style.opacity = "0.4";
    gamesLogo[3].style.opacity = "1";
    gamesLogo[4].style.opacity = "0.4";
})
gamesLogo[4].addEventListener("mouseover", function () {
    gamesLogo[0].style.opacity = "0.4";
    gamesLogo[1].style.opacity = "0.4";
    gamesLogo[2].style.opacity = "0.4";
    gamesLogo[3].style.opacity = "0.4";
    gamesLogo[4].style.opacity = "1";
})
gamesNav.addEventListener("mouseleave", function () {
    for (var i = 0; i < gamesLogo.length; i++) {
        gamesLogo[i].style.opacity = "0.5";
    }
})