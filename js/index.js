var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onscroll = (e)=>{
    if (document.body.scrollTop > h*0.1 || document.documentElement.scrollTop > h*0.1) {
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

function menuclick(e) {
    if(e){
        document.getElementById('box').classList.remove('hidden');
        document.getElementById('menubaritem').classList.add('hidden');
    document.getElementsByTagName("html")[0].classList.remove('disabledcroll');

        return;
    }
    document.getElementById('box').classList.toggle('hidden');
    document.getElementById('menubaritem').classList.toggle('hidden');
    var m = document.getElementById('menubaritem').children;
    m[1].style.height = h - m[0].offsetHeight+"px";

    //disbale scroll
    document.getElementsByTagName("html")[0].classList.toggle('disabledcroll');
}

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