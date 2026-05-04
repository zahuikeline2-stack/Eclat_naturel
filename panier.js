// On attend que tout le HTML soit chargé par le navigateur avant de lancer le script
document.addEventListener('DOMContentLoaded', () => {

    // --- ÉTAPE 1 : SELECTION DES ÉLÉMENTS ---
    // On récupère toutes les "cartes" de produits (les lignes du panier)
    const toutesLesCartes = document.querySelectorAll('.carte-produit');
    
    // On récupère les zones où on doit afficher les totaux à la fin
    const afficheSousTotal = document.querySelector('.ligne-resume strong');
    const afficheTotalFinal = document.querySelector('.ligne-total-final strong');
    
    // On définit un prix de livraison fixe (par exemple 2000 FCFA)
    const PRIX_LIVRAISON = 2000;
    document.getElementById('livraisons').textContent=PRIX_LIVRAISON + ' FCFA'

    // --- ÉTAPE 2 : LA FONCTION DE CALCUL ---
    // Cette fonction sera appelée à chaque fois qu'on clique sur + ou -
    function recalculerToutLePanier() {
        let sommeSousTotal = 0;

        // On passe sur chaque produit pour calculer son prix selon sa quantité
        toutesLesCartes.forEach(carte => {
            // On récupère le prix écrit dans le HTML (ex: "8000 FCFA")
            const prixTexte = carte.querySelector('.prix').innerText;
            // On transforme le texte en chiffre (on enlève " FCFA")
            const prixChiffre = parseInt(prixTexte.replace(' FCFA', ''));
            
            // On récupère la quantité actuelle (le chiffre entre les boutons - et +)
            const quantite = parseInt(carte.querySelector('.selecteur-quantite span').innerText);

            // Calcul du total pour CETTE ligne (Prix x Quantité)
            const totalLigne = prixChiffre * quantite;
            
            // On affiche le résultat dans la case "Total" de la ligne
            carte.querySelector('.total-ligne').innerText = totalLigne + " FCFA";

            // On ajoute ce montant à la somme globale du panier
            sommeSousTotal = sommeSousTotal + totalLigne;
        });

        // Mise à jour de l'affichage du Sous-total (en bas à droite)
        afficheSousTotal.innerText = sommeSousTotal + " FCFA";

        // Calcul du total final (Sous-total + Livraison)
        // Si le panier est vide (0), la livraison est à 0, sinon c'est 2000
        let totalFinal = 0;
        if (sommeSousTotal > 0) {
            totalFinal = sommeSousTotal + PRIX_LIVRAISON;
        }

        // On affiche le prix final tout en bas
        afficheTotalFinal.innerText = totalFinal + " FCFA";
    }

    // --- ÉTAPE 3 : LES BOUTONS + ET - ---
    // On installe des "écouteurs de clics" sur chaque carte produit
    toutesLesCartes.forEach(carte => {
        const btnMoins = carte.querySelector('button:first-of-type'); // Le 1er bouton (-)
        const btnPlus = carte.querySelector('button:last-of-type');  // Le 2ème bouton (+)
        const zoneQuantite = carte.querySelector('.selecteur-quantite span');

        // Action quand on clique sur PLUS
        btnPlus.addEventListener('click', () => {
            let qteActuelle = parseInt(zoneQuantite.innerText);
            zoneQuantite.innerText = qteActuelle + 1; // On augmente de 1
            recalculerToutLePanier(); // On demande de refaire les calculs
        });

        // Action quand on clique sur MOINS
        btnMoins.addEventListener('click', () => {
            let qteActuelle = parseInt(zoneQuantite.innerText);
            // On vérifie que la quantité ne descend pas en dessous de 0
            if (qteActuelle > 0) {
                zoneQuantite.innerText = qteActuelle - 1; // On diminue de 1
                recalculerToutLePanier(); // On demande de refaire les calculs
            }
        });
    });

});