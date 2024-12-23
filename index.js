let card = document.querySelector(".mytalor");
let card2= document.getElementById("women")
let blog = document.querySelector(".mytalors");
let mainPage = document.querySelector(".main");
let about= document.querySelector(".about");
let contact= document.querySelector(".contact");
function homes(){
mainPage.style.display="flex";
card.style.display="block";
card2.style.display="block";
blog.style.display="block";
about.style.display="none";

document.getElementById("home").style.color="rgb(2, 173,173)";
document.getElementById("shop").style.color="black";
document.getElementById("blog").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("contact").style.color="black";

}

function shops(){
mainPage.style.display="none";
blog.style.display="none";
card.style.display="block";
card2.style.display="block";


document.getElementById("shop").style.color="rgb(2, 173,173)";
document.getElementById("home").style.color="black";
document.getElementById("blog").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("contact").style.color="black";
}
function abouts(){
mainPage.style.display="none";
card.style.display="none";
card2.style.display="none";
blog.style.display="none";
about.style.display="block";

document.getElementById("about").style.color="rgb(2, 173,173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("blog").style.color="black";
document.getElementById("contact").style.color="black";

}

function blogs(){
mainPage.style.display="none";
card.style.display="none";
card2.style.display="none";
blog.style.display="block";
about.style.display="none";


document.getElementById("blog").style.display="rgb(2, 173,173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
}
function contacts(){
mainPage.style.display="none";
card.style.display="none";
card2.style.display="none";
blog.style.display="none";
about.style.display="none";
contact.style.display="block";

document.getElementById("contact").style.display="rgb(2, 173,173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("blog").style.color="black";

}
function show(img){
    let newimg= document.getElementById("newimg");
    newimg.src= img.src;
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";

    document.querySelector(".cart").style.display="flex";

}
function addCart(){
    alert("Added To Cart");
    location.reload()

}

