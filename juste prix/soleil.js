// Partie méli
// ---------------------------------------------------------------
// Fonction de bulles plus et moins
function appear(nb, RecupChiffre) {
    bulle = document.querySelector("#bulle");
    var apparition = document.createElement("p");
    apparition.classList.add("pop_up");
    apparition.innerHTML = RecupChiffre + " C'est " + nb;
    
    bulle.insertBefore(apparition, bulle.firstChild);
}
// --------------------------------------------------------------
var max  = 100;
var min = 0;
var clicks = 0;
var score1 = 0;
var score2 = 0;
var clicks2 = 0;
var ClickMax = 0;
var ClickMaxNiv = 0;
var compteur = 0;
//var ValeurEnregistre = 0 ;
var ChiffreAleatoire = 0 ; 
var ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min);
// ---------------------------------------------------------------
// Boutons de niveaux au survol de la souris

function mouse(bin, nb) {

    const survol = document.querySelector("#Survol");
    const txt_lv= document.createElement("p");
    txt_lv.id = "txt";
    txt_lv.innerHTML= "Trouve un chiffre entre 1 et " + nb;
    
    if (bin == 1) {
        survol.append(txt_lv);
    }
    else if (bin == 0) {
        block = document.querySelector("#txt");
        block.remove();
    }
}

// --------------------------------------------------------------

function Niveau1(){
    max  = 100;
    ClickMax = 12 ;
    ClickMaxNiv = 12 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("MonCompteur").style.display = "block" ;
    document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax ;
    document.getElementById("BoutonsPartie1").style.display = "block";
    document.getElementById("AfficherConsigne").innerHTML = "Trouve le chiffre compris entre 0 et 100";
}

function Niveau2(){
    max  = 1000;
    ClickMax = 20 ;
    ClickMaxNiv = 20 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("MonCompteur").style.display = "block" ;
    document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax ;
    document.getElementById("BoutonsPartie1").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouve le chiffre compris entre 0 et 1000 " ;
}
function Niveau3(){
    max  = 10000;
    ClickMax = 30 ;
    ClickMaxNiv =  30;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("MonCompteur").style.display = "block" ;
    document.getElementById("MonCompteur").innerHTML = "Nombre d'essai :  " + ClickMax ;
    document.getElementById("BoutonsPartie1").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouve le chiffre compris entre 0 et 10 000 " ;
}

// Partie Cherine
// ---------------------------------------------------------------
function Partie1() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    
    if (RecupChiffre == false) {
        document.getElementById("MessageErreur").style.display = "block" ;
        document.getElementById("MessageErreur").innerHTML = "Le chiffre doit être compris entre 0 et " + max ;
    }

    if (RecupChiffre == true) {
        clicks += 1; 
        document.getElementById("recup").innerHTML = clicks;
    
        ClickMax -= 1;
        document.getElementById("button").value = ClickMax;
        document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax  ;
    }
    
    if (clicks == ClickMaxNiv){
        document.getElementById("MessageErreur").style.display = "none" ;
        if (RecupChiffre == ChiffreAleatoire) {
            score1 = clicks
            console.log(score1)
            ClickMax = ClickMaxNiv;
            return Transition()
        }else {
            score1 = clicks
            ClickMax = ClickMaxNiv;
            return Transition()
            }
    } 

    if (RecupChiffre > ChiffreAleatoire) {
        if (RecupChiffre > max) {
            document.getElementById("MessageErreur").style.display = "block" ;
            document.getElementById("MessageErreur").innerHTML = "Le chiffre doit être compris entre 0 et " + max ;
        } else {
            document.getElementById("MessageErreur").style.display = "none" ;
        appear("moins", RecupChiffre);
    }
    } 

    if (RecupChiffre < ChiffreAleatoire){
        if (RecupChiffre < min) {
            document.getElementById("MessageErreur").style.display = "block" ;
            document.getElementById("MessageErreur").innerHTML = "Le chiffre doit être compris entre 0 et " + max ;
            
        } else if (RecupChiffre == true) {
            document.getElementById("MessageErreur").style.display = "none" ;
        appear("plus", RecupChiffre);
    }}

    if(RecupChiffre == ChiffreAleatoire) {
        document.getElementById("MessageErreur").style.display = "none" ;
        score1 = clicks
        ClickMax = ClickMaxNiv;
        return Transition()
    }}
    
    


function Transition() {
    document.getElementById("MessageErreur").style.display = "none" ;
    document.getElementById("BoutonsPartie1").style.display = "none"
    document.getElementById("bulle").style.display = "none" ;
    document.getElementById("MonCompteur").style.display = "none"
    document.getElementById("AfficherConsigne").innerHTML = "<p> Well done ! </p> Tu as réussi en " + score1 + " essai(s).  <div> Dans la prochaine partie, il va falloir que tu penses à un chiffre compris entre 0 et " + max + ".</div>  <div> La machine te fera des propositions et tu devras dire si ton chiffre est plus petit ou plus grand. </div> <div> Elle a le même nombre d'essais que toi, le joueur avec le plus petit score l'emporte :) </div> "
    document.getElementById("MonScore").style.display = "block";
    document.getElementById("MonScore").innerHTML += "Mon score : "+ score1 ;
    document.getElementById("JouerPartie2").style.display = "block"; 
}               

function Partie2(){
    document.getElementById("BoutonsPartie2-2").style.display = "block";
    document.getElementById("GenererChiffreAleatoire").style.display = "block"; 
    document.getElementById("BoutonsPartie1").style.display = "none";
    document.getElementById("MonCompteur").style.display = "none";
    document.getElementById("JouerPartie2").style.display = "none";
    document.getElementById("MonScore").style.display = "none";
    document.getElementById("SonCompteur").style.display = "block";
    document.getElementById("SonCompteur").innerHTML += "Son compteur  : "+ ClickMax ;

    document.getElementById("BoutonsPartie2-2").style.display = "block";
    document.getElementById("AfficherConsigne").innerHTML = "Fais deviner un chiffre compris entre " + min+ " et " + max;

    compteur += 1; 
    document.getElementById("GenererChiffreAleatoire").value = compteur 
    if (document.getElementById("GenererChiffreAleatoire").value = 1){
        document.getElementById("GenererChiffreAleatoire").style.display = "none"
        document.getElementById("BlocChiffreAleatoire").style.display = "block";
        document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2;
    }

    console.log(ChiffreAleatoire2)
    }

    
    
    


function CestMoins(){
    clicks2 += 1;
    document.getElementById("buttonMoins").value = clicks2;
    

    ClickMax -= 1;
    document.getElementById("buttonMoins").value = ClickMax;
    document.getElementById("SonCompteur").innerHTML = "Nombre d'essai : " + ClickMax  ; 

    if (clicks2 == ClickMaxNiv) {
        document.getElementById("LeChiffreAleatoire2").innerHTML = "Oh non toi perdu... "
    } else {

    max = ChiffreAleatoire2
    ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min)
    document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2
    }
    }

function CestPlus(){
    clicks2 += 1;
    console.log(ClickMax)
    document.getElementById("buttonMoins").value = clicks2;
    ClickMax -= 1;
    document.getElementById("buttonMoins").value = ClickMax;
    document.getElementById("SonCompteur").innerHTML = "Nombre d'essai : " + ClickMax  ; 
    if (clicks2 == ClickMaxNiv) {
        document.getElementById("LeChiffreAleatoire2").innerHTML = "La machine a perdu... "
    } else {
    min = ChiffreAleatoire2
    ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min)
    document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2
}
} 

function CestCa(){
    score2 = clicks2 
    document.getElementById("LeChiffreAleatoire2").innerHTML = "La machine a trouvé ! "
    document.getElementById("SonCompteur").style.display = "none" ; 
    document.getElementById("SonScore").style.display = "block";
    document.getElementById("SonScore").innerHTML += "Son score : "+ score2 ;
    document.getElementById("BlocChiffreAleatoire").style.display = "none";
}