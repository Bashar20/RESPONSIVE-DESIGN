


 let menuToggle = document.getElementById('menu-btn');
 let header = document.getElementById('header');


 menuToggle.onclick = () =>{
     menuToggle.classList.toggle('fa-times')
     header.classList.toggle('active')
 }


let nav_links = document.querySelectorAll('.nav_link');

function navAction(){
    header.classList.remove('active')
    menuToggle.classList.toggle('fa-times')
 }

nav_links.forEach(function(e){
  e.addEventListener('click',navAction)
})