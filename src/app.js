import 'bootstrap'
import './js/router'
import Storage from './js/_storage'

Storage.fetchCart()

document.onclick = function(e) {
    if(e.target.classList.contains('add-to-cart-button')) {
        Storage.addToCart({
            id: e.target.getAttribute('data-id'),
            title: e.target.getAttribute('data-title'),
            image: e.target.getAttribute('data-image'),
            price: e.target.getAttribute('data-price'),
        })
        e.target.setAttribute('disabled', true)
    }
}