
const icon = document.querySelector('.burger');
let menu = document.querySelector('.menu_hiden')
let body = document.body
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("show");
    menu.classList.toggle("show");
    body.classList.toggle('menu_open')


 
});