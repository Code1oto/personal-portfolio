const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
togglebutton.addEventListener('click', ()=>{
    navbarlinks.classList.toggle('active')
})

window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset>= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}