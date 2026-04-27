//sectonner tous les produits//
let cartes = document.querySelectorAll(".carte-produit");
//parcourir caque produit
cartes.forEach(function(carte) {
//recuper les boutons
    let boutons = carte.querySelectorAll("button");
    let btnMoins = boutons[0];
    let btnPlus = boutons[1];
    //selectonner les elements//

    let quantiteSpan = carte.querySelector("span");
    let prixDiv = carte.querySelector(".prix");
    let totalDiv = carte.querySelector(".total-ligne");
    // recuperer le prix et creer la quantiter

    let prix = parseInt(prixDiv.textContent);
    let quantite = 0;
    //bouton augmenter

    btnPlus.onclick = function () {
        quantite++;
        mettreAJour();
    };
    //bouton diminu

    btnMoins.onclick = function () {
        if (quantite > 0) {
            quantite--;
            mettreAJour();
        }
    };
    // foncton mose a jours

    function mettreAJour() {
        quantiteSpan.textContent = quantite;
        let total = quantite * prix;
        totalDiv.textContent = total + " FCFA";
    }

});
