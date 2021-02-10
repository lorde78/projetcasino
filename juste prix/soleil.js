// Partie méli
// ---------------------------------------------------------------
// Fonction de bulles plus et moins
function Plus(bulle) {
    bulle = document.querySelector("#bulle");
    var plus = document.createElement("div");
    plus.innerHTML += "<p class='pop_up'>C'est plus</p>";
    bulle.insertBefore(plus, bulle.firstChild);
}

function Moins(bulle) {
    var moins = document.createElement("div");
    moins.innerHTML += "<p class='pop_up'>C'est moins</p>";
    bulle.insertBefore(moins, bulle.firstChild);
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
//var ValeurEnregistre = 0 ;
var ChiffreAleatoire = 0 ; 
var ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min);
// ---------------------------------------------------------------
// Boutons de niveaux au survol de la souris

function mouse(bin, nb) {

    const survol = document.querySelector("#Survol");
    const txt_lv= document.createElement("p");
    txt_lv.id = "txt";
    txt_lv.innerHTML= "Tu devras trouver un chiffre entre 1 et " + nb;
    
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
    
    //document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    document.getElementById("MonCompteur").style.display = "block" ;
    document.getElementById("MonCompteur").innerHTML = "Mon compteur : " + ClickMax ;

    document.getElementById("BoutonsPartie1").style.display = "block";
    document.getElementById("AfficherConsigne").innerHTML = "Trouves le chiffre compris entre 0 et 100";
}

function Niveau2(){
    max  = 1000;
    ClickMax = 20 ;
    ClickMaxNiv = 20 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("MesDonnes").style.display = "block" ;
    document.getElementById("MonCompteur").style.display = "block" ;
    document.getElementById("MonCompteur").innerHTML = "Mon compteur : " + ClickMax ;

    //document.getElementById("Scores").style.display = "block" ;
    //document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    //document.getElementById("ScoreOrdi").innerHTML = "Score machine : " 

    document.getElementById("BoutonsPartie1").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouves le chiffre compris entre 0 et 1000 " ;
}
function Niveau3(){
    max  = 10000;
    ClickMax = 30 ;
    ClickMaxNiv =  30;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("MesDonnes").style.display = "block" ;
    document.getElementById("MonCompteur").style.display = "block" ;
    document.getElementById("MonCompteur").innerHTML = "Mon compteur : " + ClickMax ;
    //document.getElementById("Scores").style.display = "block" ;
    //document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    //document.getElementById("ScoreOrdi").innerHTML = "Score machine : " 

    document.getElementById("BoutonsPartie1").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouves le chiffre compris entre 0 et 10 000 " ;
}

// Partie Cherine
// ---------------------------------------------------------------
function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1; 
    document.getElementById("recup").innerHTML = clicks;
    //document.getElementById("ScoreMoi").innerHTML = "Mon score : " + clicks ; 

    ClickMax -= 1;
    document.getElementById("button").value = ClickMax;
    document.getElementById("MonCompteur").innerHTML = "Mon Compteur : " + ClickMax  ; 

    if (clicks == ClickMaxNiv){
        if(RecupChiffre == ChiffreAleatoire) {
            //alert("Cool");
            score1 = clicks
            console.log(score1)
            return EnregistrerChoix()
        }else {
                alert("tu as perdu");
                score1 = clicks
                return EnregistrerChoix()
            }
    } else {
        if (RecupChiffre > ChiffreAleatoire) {
            Moins(contenu);
        } else {
            if (RecupChiffre < ChiffreAleatoire){
                Plus(contenu);
            }else {
                if(RecupChiffre == ChiffreAleatoire) {
                    //alert("Cool");
                    score1 = clicks
                    return EnregistrerChoix()
                }}}}}

    
function EnregistrerChoix(){
    document.getElementById("BoutonsPartie2-2").style.display = "block";
    document.getElementById("BoutonsPartie1").style.display = "none";
    document.getElementById("bulle").style.display = "none" ;
    document.getElementById("MonCompteur").style.display = "none";
    document.getElementById("MonScore").style.display = "block";
    document.getElementById("MonScore").innerHTML += "Mon score : "+ score1 ;
    document.getElementById("SonCompteur").style.display = "block";
    document.getElementById("SonCompteur").innerHTML += "Son compteur  : "+ ClickMax ;

    //ValeurEnregistre = document.getElementById("recup2").value
    //console.log(ValeurEnregistre)

    //if (ValeurEnregistre>0){
        //document.getElementById("BoutonsPartie2-1").style.display = "none";
        document.getElementById("BoutonsPartie2-2").style.display = "block";

        document.getElementById("AfficherConsigne").innerHTML = "Fais deviner un chiffre compris entre " + min+ " et " + max;

        document.getElementById("BlocChiffreAleatoire").style.display = "block";
        document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2;

        console.log(ChiffreAleatoire2)
    }//}
    
function CestMoins(){
    clicks2 += 1;
    document.getElementById("buttonMoins").value = clicks2;
    //document.getElementById("ScoreOrdi").innerHTML = "Score machine : " + clicks2 ; 

    if (clicks2 == ClickMax) {
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
    //document.getElementById("ScoreOrdi").innerHTML = "Score machine : " + clicks2 ;
    if (clicks2 == ClickMax) {
        document.getElementById("LeChiffreAleatoire2").innerHTML = "La machine a perdu... tu remportes cette partie !! "
    } else {
    min = ChiffreAleatoire2
    ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min)
    document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2
    //console.log(ChiffreAleatoire2)
    //console.log(min)
    //console.log(max)
}
} 

function CestCa(){
    alert("La massine a gagné")
    clicks2 = score2
    document.getElementById("SonScore").style.display = "block";
    document.getElementById("SonScore").innerHTML += "Son score : "+ score2 ;
    //} else{
        //alert("Hmmm, pas si sûr")
    //}
}