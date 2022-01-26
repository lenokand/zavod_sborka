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
        item.parentNode.classList.remove('active')
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
      item.parentNode.classList.add('active')
      submenu[index].classList.add('show')


      let subMenu = document.querySelector('menu .item_submenu .open_submenu.active')
      let subMenuMenu = document.querySelector('menu .item_submenu > .submenu.show')
      if(subMenu){
        subMenu.classList.remove('active')
        subMenuMenu.classList.remove('show')
        subMenuMenu.parentNode.classList.remove('active')
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



// маска тел
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+38 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});