AOS.init();

var facesL = document.getElementsByClassName('faceL');
var facesR = document.getElementsByClassName('faceR');
var masks = document.getElementsByClassName('mask');
var maxIndex = 5;

$(window).scroll(function () {
    console.log(this.scrollY + " L0 " + facesL[0].offsetTop);
    console.log(this.scrollY + " R0 " + facesR[0].offsetTop);
    console.log(this.scrollY + " L1 " + facesL[1].offsetTop);
    console.log(this.scrollY + " R1 " + facesR[1].offsetTop);
    console.log(this.scrollY + " L2 " + facesL[2].offsetTop);
    // $("span.qScrollTop").text(scrollVal);
    if (this.scrollY - facesL[0].offsetTop <= 10) {
        // console.log("aaa");
        masks[0].style.animationName = "fadeRightToLeft";
        // setTimeout(() => {
        //     masks[0].style.botton = "0";
        // }, 2000);
    }
    // $("span.qScrollTop").text(scrollVal);
    if (this.scrollY - facesR[0].offsetTop < 100 && this.scrollY - facesR[0].offsetTop > 0) {
        masks[1].style.animationName = "fadeLeftToRight";
        // setTimeout(() => {
        //     masks[1].style.botton = "0";
        // }, 2000);
    }
    // $("span.qScrollTop").text(scrollVal);
    if (this.scrollY - facesL[1].offsetTop < 100 && this.scrollY - facesL[1].offsetTop > 0) {
        masks[2].style.animationName = "fadeRightToLeft";
        // setTimeout(() => {
        //     masks[2].style.botton = "0";
        // }, 2000);
    }
    // $("span.qScrollTop").text(scrollVal);
    if (this.scrollY - facesR[1].offsetTop < 100 && this.scrollY - facesR[1].offsetTop > 0) {
        masks[3].style.animationName = "fadeLeftToRight";
        // setTimeout(() => {
        //     masks[3].style.botton = "0";
        // }, 2000);
    }
    // $("span.qScrollTop").text(scrollVal);
    if (this.scrollY - facesL[2].offsetTop < 50) {
        masks[4].style.animationName = "fadeRightToLeft";
        // setTimeout(() => {
        //     masks[4].style.botton = "0";
        // }, 2000);
    }
})