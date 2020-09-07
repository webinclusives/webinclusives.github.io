var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onscroll = (e)=>{
    if (document.body.scrollTop > h/10 || document.documentElement.scrollTop > h/10) {
        //after scroll
        document.getElementById("navbar").classList.add('shadow-lg');
    } else {
        //before scroll
        document.getElementById("navbar").classList.remove('shadow-lg');
    }
};

window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

function scrollToId(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function menuclick() {
    var box = document.getElementById('box');
    var menu = document.getElementById('menubaritem');
    if (box.getAttribute('value') == "true") {
        console.log("if");
        box.setAttribute("value", "false");
        box.children[0].setAttribute("transform", "translate(-40, 20) rotate(45 60 60)");
        box.children[1].setAttribute("width", "0");
        box.children[1].setAttribute("x", "50");
        box.children[2].setAttribute("transform", "translate(-5, -35) rotate(-45 60 60)");
        menu.classList.toggle('hidden');
    } else {
        console.log("else");
        box.setAttribute("value", "true");
        box.children[0].removeAttribute("transform");
        box.children[1].setAttribute("width", "100");
        box.children[1].setAttribute("x", "0");
        box.children[2].removeAttribute("transform");
        menu.classList.toggle('hidden');
    }
}