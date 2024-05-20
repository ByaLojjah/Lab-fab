document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addbutton');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.getAttribute('data-id');
            const itemName = button.getAttribute('data-name');
            const itemDescription = button.getAttribute('data-description');
            const itemPrice = button.getAttribute('data-price');

            const item = {
                id: itemId,
                name: itemName,
                description: itemDescription,
                price: itemPrice
            };

            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
            } else {
                cart = [];
            }

            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${itemName} a été ajouté au panier.`);
        });
    });
});