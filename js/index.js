//get clinet screem size
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// scroll behaviour
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
window.onload = (e)=>{
    //scroll out
    ScrollOut({
        once:true,
        threshold:0.3
    });

    ScrollOut({
        targets : ".blog",
        // once:true,
        threshold: 0.6
    });
};

window.onbeforeunload = function () {
    window.location.href = window.location.href;
    scrollToId('home');
};

//header on scroll hidden and visible
window.onscroll = (e)=>{
    if (document.body.scrollTop > h*0.1 || document.documentElement.scrollTop > h*0.1) {
        //after scroll
        document.getElementById("navbar").classList.add('shadow-lg');  
    } else {
        //before scroll
        document.getElementById("navbar").classList.remove('shadow-lg');
    }
};
//scroll to fucntion
function scrollToId(id,e){
    if(e){
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: "start",
        });
        return;
    }
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: "center",
    });
}
//menuclick
function menuclick(e) {
    if(e){
        document.getElementById('box').classList.remove('hidden');
        document.getElementById('menubaritem').classList.add('hidden');
        //disable scroll
        document.getElementsByTagName("html")[0].classList.remove('disabledcroll');
        //add animation
        let el = document.getElementsByClassName('anim');
        for (let i = 0; i < el.length; i++) {
            if (i % 2 == 0){
                el[i].classList.remove('anim1');
            } else {
                el[i].classList.remove('anim1');
            }
        }
        return;
    }
    document.getElementById('box').classList.add('hidden');
    document.getElementById('menubaritem').classList.remove('hidden');
    let m = document.getElementById('menubaritem').children;
    m[1].style.height = h - m[0].offsetHeight+"px";
    //disbale scroll
    document.getElementsByTagName("html")[0].classList.add('disabledcroll');
    //remove animation
    let el = document.getElementsByClassName('anim');
    for (let i = 0; i < el.length; i++) {
        if(i%2==0){
            el[i].classList.add('anim1');
        }else{
            el[i].classList.add('anim2');
        }
    }
    return;
}

//email
async function sendEmail(name,email,message) {
    await Email.send({
        Host: "smtp.gmail.com",
        Username: "webinclusives@gmail.com",
        Password: "tekostjeylelawkg",
        To: 'rahulgupta89343@gmail.com',
        From: "rahulgupta89343@gmail.com",
        Subject: "web inclusives Query from " + name,
        Body: "email : "+email+"<br> message : "+message,
    });
}
//send email
async function sendMessage() {
    var name = document.getElementById('sname').value;
    var email = document.getElementById('semail').value;
    var message = document.getElementById('smessage').value;
    try {
        await sendEmail(name, email, message);
        document.getElementById('sname').value = "";
        document.getElementById('semail').value = "";
        document.getElementById('smessage').value = "";
    } catch (error) {
        alert('error occured send again');
    }
}