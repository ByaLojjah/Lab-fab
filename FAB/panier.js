document.addEventListener('DOMContentLoaded', function () {

    const articles = document.querySelectorAll('.produit');
    let grandTotal = calculateInitialGrandTotal();

    const grandTotalElement = document.querySelector('.totalprice span:last-child');
    grandTotalElement.textContent = grandTotal.toFixed(1);

    articles.forEach(article => {
        const minusBtn = article.querySelector('.buttonminus-btn');
        const plusBtn = article.querySelector('.buttonplus-btn');
        const quantityElement = article.querySelector('.quantity-btn');
        const priceElement = article.querySelector('.price');
        const totalElement = article.querySelector('.Total');
        const deleteBtn = article.querySelector('.delete-btn');

        let quantity = parseFloat(quantityElement.textContent);
        let price = parseFloat(priceElement.textContent);

        plusBtn.addEventListener('click', function () {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', function () {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', function () {
            // Montant total du produit supprimé//
            let montantRemoveArticle = parseFloat(totalElement.textContent); 
            article.remove(); 
            updateValueCart(montantRemoveArticle); 
        });

        function updateValueCart(montantRemoveArticle) {
            let articleTotalPrice = quantity * price; 
            articleTotalPrice -= montantRemoveArticle; 
            totalElement.textContent = articleTotalPrice.toFixed(1); 
            calculateGrandTotal();
        }

        function updateTotalPrice() {
            const articleTotalPrice = quantity * price;
            totalElement.textContent = articleTotalPrice.toFixed(1);
            calculateGrandTotal();
        }

    });

    function calculateGrandTotal() {
        grandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            grandTotal += parseFloat(totalElement.textContent);
        });
        grandTotalElement.textContent = grandTotal.toFixed(1);
    }

    function calculateInitialGrandTotal() {
        let initialGrandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            initialGrandTotal += parseFloat(totalElement.textContent);
        });
        return initialGrandTotal;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Prix: ${item.price} XOF</p>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
    }
});
