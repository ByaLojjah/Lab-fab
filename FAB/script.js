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
    setTimeout(showSlides, 5000);
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

