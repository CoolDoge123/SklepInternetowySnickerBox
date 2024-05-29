let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' został dodany do koszyka.');
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalElement = document.getElementById('total');
    if (cartItems && totalElement) {
        cartItems.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = '<li>Koszyk jest pusty. Dodaj produkty do koszyka.</li>';
            totalElement.innerText = 'Łącznie: 0 PLN';
        } else {
            cart.forEach(item => {
                cartItems.innerHTML += `<li>${item.name} - ${item.price} PLN</li>`;
                total += item.price;
            });
            totalElement.innerText = 'Łącznie: ' + total + ' PLN';
        }
    }
}



function populateOrderPage() {
    let orderItems = document.getElementById('order-items');
    let orderTotal = document.getElementById('order-total');
    let orderForm = document.getElementById('order-form');
    let confirmation = document.getElementById('confirmation');
    let emptyCartMessage = document.getElementById('empty-cart-message');

    if (orderItems && orderTotal && orderForm && confirmation && emptyCartMessage) {
        orderItems.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            orderItems.innerHTML = '<li>Koszyk jest pusty. Dodaj produkty do koszyka.</li>';
            orderTotal.innerText = 'Łącznie: 0 PLN';
            orderForm.style.display = 'none';
            emptyCartMessage.style.display = 'block';
        } else {
            cart.forEach(item => {
                orderItems.innerHTML += `<li>${item.name} - ${item.price} PLN</li>`;
                total += item.price;
            });
            orderTotal.innerText = 'Łącznie: ' + total + ' PLN';
            orderForm.style.display = 'block';
            emptyCartMessage.style.display = 'none';
        }
        confirmation.style.display = 'none';
    }
}



function checkout() {
    window.location.href = 'order.html';
}

function submitOrderForm() {
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    return false;
}

function submitContactForm() {
    alert('Formularz został wysłany.');
    document.getElementById('contact-form').reset();
    return false;
}

function clearCart() {
    if (confirm('Czy na pewno chcesz wyczyścić koszyk?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        alert('Koszyk został wyczyszczony.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateCart();
    populateOrderPage();
});