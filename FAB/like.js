document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addbutton');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const articleId = this.getAttribute('data-id');
            addToCart(articleId);
            window.location.href = 'panier.html';
        });
    });

    function addToCart(articleId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        const article = {
            id: articleId,
            name: document.querySelector(`button[data-id="${articleId}"]`).closest('.article').querySelector('h1').innerText,
            description: document.querySelector(`button[data-id="${articleId}"]`).closest('.article').querySelector('.Description span').innerText,
            price: document.querySelector(`button[data-id="${articleId}"]`).closest('.article').querySelector('.price').innerText
        };

        const articleInCart = cart.find(item => item.id === articleId);
        if (articleInCart) {
            articleInCart.quantity += 1;
        } else {
            article.quantity = 1;
            cart.push(article);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }
});


