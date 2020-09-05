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