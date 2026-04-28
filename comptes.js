 let inputMotDePasse=document.getElementById("mot-de-passe")
console.log(inputMotDePasse)

let inputEmail=document.getElementById("courriel")
console.log(inputEmail)
let message=document.getElementById("messages")
 console.log(message)
 let erreur=document.getElementById("erreur")
 console.log(erreur)
 let bouton=document.getElementsByClassName("bouton-connexion")[0]
console.log(bouton)
//ecouter l evenement click sur le bouton
bouton.addEventListener("click",(e)=>{
   //ne pas soumettre le formulaire
    e.preventDefault() 
    let Email=inputEmail.value
    console.log(Email)
    let MotDEPasse=inputMotDePasse.value
    console.log(MotDEPasse)
    //obliger utilisateur a entrez un valeur
    if(Email.length===0){
        alert("le champs Email est vide")
        //afficher un message d erreur
        //ajouter une couleur
        erreur.style.color="red"
        erreur.textContent="pardon faut mettre ton Email"
    return
    }
    //supprimer les valuer des inputes
    inputEmail.value=""
    inputMotDePasse.value=""
    message.textContent="merciii pour confiance 😊❤️"
})