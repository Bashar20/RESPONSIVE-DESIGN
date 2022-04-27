


 let menuToggle = document.getElementById('menu-btn');
 let header = document.getElementById('header');


 menuToggle.onclick = () =>{
     menuToggle.classList.toggle('fa-times')
     header.classList.toggle('active')
 }