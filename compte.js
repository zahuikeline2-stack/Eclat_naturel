//selectionne les input
let inputMotDePasse=document.getElementById("mot-de-passe")
console.log(inputMotDePasse)

let inputEmail=document.getElementById("courriel")
console.log(inputEmail)

let inputText=document.getElementById("nom")
console.log(inputText)

let inputTelephone=document.getElementById("numero")
console.log(inputTelephone)
 let message=document.getElementById("messages")
 console.log(message)
 let erreur=document.getElementById("erreur")
// selection le bouton
let bouton=document.getElementById("bouton_enregistrer")
console.log(bouton)
//ecouter l evenement click sur le bouton
bouton.addEventListener("click",(e)=>{
   //ne pas soumettre le formulaire
    e.preventDefault()
    //recuper les valeurs des inputs
    let Email=inputEmail.value
    console.log(Email)
    let Numero=inputTelephone.value
    console.log(Numero)
    let MotDEPasse=inputMotDePasse.value
    console.log(MotDEPasse)
    let Nom=inputText.value
    console.log(Nom)
    //obliger utilisateur a entrez un valeur
    if(Email.length===0){
        alert("le champs Email est vide")
        //afficher un message d erreur
        //ajouter une couleur
        erreur.style.color="red"
        erreur.textContent="pardon faut mettre ton Email"
    return
    }

    if(Numero.length===0){
        alert("le champs Numero est vide")
        erreur.style.color="red"
        erreur.textContent="pardon faut mettre ton Numero"
       return

    }if(Nom.length===0){
        alert("le champs Nom est vide")
        erreur.style.color="red"
        erreur.textContent="pardon faut mettre ton Nom"
  return
    }
    if(MotDEPasse.length===0){
        alert("le champs Mot De Passe est vite")
        erreur.style.color="red"
        erreur.textContent="pardon faut mettre ton Mot De passe"
     return
    }
    //verificaton des inputs pour les caraterisé
    



    //supprimer les valuer des inputes
    inputEmail.value=""
    inputMotDePasse.value=""
    inputTelephone.value=""
    inputText.value=""
    erreur.textContent=""
    message.textContent="merciii pour confiance 😊❤️"


})

