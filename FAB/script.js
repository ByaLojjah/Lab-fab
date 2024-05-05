// Scipte des slides//
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides();

// Scipte de la boutique//
const boutonAjouterAuPanier = document.getElementById(".addbutton");

boutonAjouterAuPanier.addEventListener("click", () => {
    
    const produit = {
        nom: "Nom du produit",
        prix: 10.99,
        quantite: 1
    };

    alert(`Produit ajouté au panier : ${produit.nom} - Prix : ${produit.prix} €`);
});


// Scipte du panier//
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.parentNode.remove();
        calculateTotal();
    });
});

function calculateTotal() {
    const prices = document.querySelectorAll('.product p');
    let total = 0;
    prices.forEach(price => {
        const priceValue = parseFloat(price.textContent.replace('$', ''));
        total += priceValue;
    });
    document.querySelector('.total p').textContent = `Total: $${total}`;
}

