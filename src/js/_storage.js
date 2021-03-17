const Storage = {
    getCart: function() {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    isInCart: function(id) {
        const cart = this.getCart()
        return cart.findIndex(item => item.id == id) !== -1
    },
    getTotalQuantity: function() {
        let tq = 0
        const cart = this.getCart()
        cart.forEach(item => {
            tq += +item.quantity
        })
        return tq
    },
    getTotalPrice: function() {
        let tp = 0
        const cart = this.getCart()
        cart.forEach(item => {
            tp += item.quantity * item.price
        })
        return tp
    },
    fetchCart: function() {
        const cart = this.getCart()
        const cartInformerBadge = document.querySelector('#cart-informer span.badge')
        const cartInformerList = document.querySelector('#cart-informer ul')

        cartInformerBadge.textContent = this.getTotalQuantity()

        cartInformerList.innerHTML = ''

        if(this.getTotalQuantity() === 0) {
            cartInformerList.innerHTML += `<li class="px-3">The cart is empty</li>`
        } else {
            cart.forEach(item => {
                cartInformerList.innerHTML += `<li class="px-3 d-flex justify-content-between text-nowrap">
                    <span>${item.title}</span>
                    <span class="ms-5">
                        ${item.quantity}pc
                        <b class="ms-1">
                            $${item.price.toLocaleString('ru-RU')}
                        </b>
                    </span>
                </li>`
            })
            cartInformerList.innerHTML += `<li class="px-3 mt-2 border-top pt-2 h4 d-flex justify-content-between">
                <span>Total:</span>
                <span>
                    <b class="ms-2">
                        $${this.getTotalPrice().toLocaleString('ru-RU')}
                    </b>
                </span>
            </li>`
        }
    },
    addToCart: function(product) {
        const cart = this.getCart()
        let i = cart.findIndex(item => item.id === product.id)
        if(i !== -1) {
            cart[i].quantity = cart[i].quantity + 1
        } else {
            product.quantity = 1
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        this.fetchCart()
    }
}

export default Storage