// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);


// бургер
const icon = document.querySelector('.burger');
let menu = document.querySelector('.menu_hiden')
let body = document.body
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("show");
    menu.classList.toggle("show");
    body.classList.toggle('menu_open')


 
});


// подменю
let submenuBtn = document.querySelectorAll('menu .item_menu > .item_wrapper > .open_submenu')

submenuBtn.forEach((item, index) => {
  item.addEventListener('click', function(){

    let submenu = document.querySelectorAll('menu .item_menu > .submenu')

    
    if (item.classList.contains('active')){
      item.classList.remove('active')
      submenu[index].classList.remove('show')
        let subMenu = document.querySelector('menu .item_submenu .open_submenu.active')
        let subMenuMenu = document.querySelector('menu .item_submenu > .submenu.show')
        if(subMenu){
          subMenu.classList.remove('active')
          subMenuMenu.classList.remove('show')
        }

    } else {

      let ac_menuBtn = document.querySelector('menu .open_submenu.active')

    

      if (ac_menuBtn) {
        ac_menuBtn.classList.remove('active')
        let ac_submenu = document.querySelector('menu .submenu.show')
        ac_submenu.classList.remove('show')
      }
  
  
      item.classList.add('active')
      submenu[index].classList.add('show')


      let subMenu = document.querySelector('menu .item_submenu .open_submenu.active')
      let subMenuMenu = document.querySelector('menu .item_submenu > .submenu.show')
      if(subMenu){
        subMenu.classList.remove('active')
        subMenuMenu.classList.remove('show')
      }
    }

  })

})
let subSubmenuBtn = document.querySelectorAll('menu .item_submenu  .open_submenu')

subSubmenuBtn.forEach((item, index) => {
  item.addEventListener('click', function(){
    // console.log(item);
    let submenu = document.querySelectorAll('menu .item_submenu > .submenu')

    
    if (item.classList.contains('active')){
      item.classList.remove('active')
      submenu[index].classList.remove('show')


    } else {

      let ac_menuBtn = document.querySelector('menu .item_submenu .open_submenu.active')

    

      if (ac_menuBtn) {
        ac_menuBtn.classList.remove('active')
        let ac_submenu = document.querySelector('menu .item_submenu > .submenu.show')
        ac_submenu.classList.remove('show')
      }
  
  
      item.classList.add('active')
      submenu[index].classList.add('show')
    }

  })

})
