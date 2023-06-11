var bars = document.getElementsByClassName("bar-chart");
var section = document.getElementsByTagName("section");
var index = 0;
bars[0].addEventListener("click", function () {
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.opacity = 0.5;
        section[i].className = "inactived";
    }
    index = 0;
    bars[0].style.opacity = 1;
    section[0].className = "actived";
})
bars[1].addEventListener("click", function () {
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.opacity = 0.5;
        section[i].className = "inactived";
    }
    index = 0;
    bars[1].style.opacity = 1;
    section[1].className = "actived";
})
bars[2].addEventListener("click", function () {
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.opacity = 0.5;
        section[i].className = "inactived";
    }
    index = 0;
    bars[2].style.opacity = 1;
    section[2].className = "actived";
})
bars[3].addEventListener("click", function () {
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.opacity = 0.5;
        section[i].className = "inactived";
    }
    index = 0;
    bars[3].style.opacity = 1;
    section[3].className = "actived";
})
bars[4].addEventListener("click", function () {
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.opacity = 0.5;
        section[i].className = "inactived";
    }
    index = 0;
    bars[4].style.opacity = 1;
    section[4].className = "actived";
})
bars[5].addEventListener("click", function () {
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.opacity = 0.5;
        section[i].className = "inactived";
    }
    index = 0;
    bars[5].style.opacity = 1;
    section[5].className = "actived";
})
window.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        for (var i = 0; i < bars.length; i++) {
            bars[i].style.opacity = 0.5;
            section[i].className = "inactived";
        }
        index -= 1;
        if (index < 0) {
            index = section.length - 1;
        }
        bars[index].style.opacity = 1;
        section[index].className = "actived";
    }
    else if (event.deltaY > 0) {
        for (var i = 0; i < bars.length; i++) {
            bars[i].style.opacity = 0.5;
            section[i].className = "inactived";
        }
        index += 1;
        if (index >= section.length) {
            index = 0;
        }
        bars[index].style.opacity = 1;
        section[index].className = "actived";
    }
})