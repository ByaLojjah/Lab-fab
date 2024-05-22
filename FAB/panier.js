

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


// Structure JSON des produits
const products = [
    {
        name: "Fluid",
        price: "25000 XOF",
        image: "Images et Videos/produits rhode/glaze-2000x2000_1_320x.png"
    },
    // Ajoutez d'autres produits selon votre besoin
];

document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.addbutton');

    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => addToCart(index));
    });

    function addToCart(index) {
        const product = products[index];
        const cartItem = createCartItem(product);
        const cartContainer = document.getElementById('cart-items');
        cartContainer.appendChild(cartItem);
    }

    function createCartItem(product) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('produit');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = 'Product Image';
        image.height = '140px';
        image.width = '150px';

        const nameElement = document.createElement('span');
        nameElement.classList.add('name');
        nameElement.textContent = product.name;

        const priceElement = document.createElement('span');
        priceElement.classList.add('price');
        priceElement.textContent = product.price;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>`;

        const cartItemContent = document.createElement('div');
        cartItemContent.appendChild(nameElement);
        cartItemContent.appendChild(priceElement);

        cartItem.appendChild(image);
        cartItem.appendChild(cartItemContent);
        cartItem.appendChild(deleteButton);

        return cartItem;
    }
});
