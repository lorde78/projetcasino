// Partie méli
// ---------------------------------------------------------------
// Fonction de bulles plus et moins
function appear(nb) {
    bulle = document.querySelector("#bulle");
    var apparition = document.createElement("p");
    apparition.classList.add("pop_up");
    apparition.innerHTML = "C'est " + nb;
    
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
    ClickMax = 7 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("Scores").style.display = "block" ;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    document.getElementById("ScoreOrdi").innerHTML = "Score machine : " 
    document.getElementById("BoutonsPartie1").style.display = "block";
}

function Niveau2(){
    max  = 1000;
    ClickMax = 15 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("Scores").style.display = "block" ;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    document.getElementById("ScoreOrdi").innerHTML = "Score machine : " 
    document.getElementById("BoutonsPartie1").style.display = "block"
}
function Niveau3(){
    max  = 10000;
    ClickMax = 21 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("Scores").style.display = "block" ;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    document.getElementById("ScoreOrdi").innerHTML = "Score machine : " 
    document.getElementById("BoutonsPartie1").style.display = "block"
}

// Partie Cherine
// ---------------------------------------------------------------
function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1; 
    document.getElementById("recup").innerHTML = clicks;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " + clicks ; 

    if (clicks == ClickMax){
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
            appear("moins");
        } else {
            if (RecupChiffre < ChiffreAleatoire){
                appear("plus");
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

    //ValeurEnregistre = document.getElementById("recup2").value
    //console.log(ValeurEnregistre)

    //if (ValeurEnregistre>0){
        //document.getElementById("BoutonsPartie2-1").style.display = "none";
        document.getElementById("BoutonsPartie2-2").style.display = "block";

        document.getElementById("AfficherConsigne").style.display = "block";
        document.getElementById("AfficherConsigne").innerHTML = "Fais deviner un chiffre compris entre " + min+ " et " + max;

        document.getElementById("BlocChiffreAleatoire").style.display = "block";
        document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2;

        console.log(ChiffreAleatoire2)
    }//}
    
function CestMoins(){
    clicks2 += 1;
    document.getElementById("buttonMoins").value = clicks2;
    document.getElementById("ScoreOrdi").innerHTML = "Score machine : " + clicks2 ; 

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
    document.getElementById("ScoreOrdi").innerHTML = "Score machine : " + clicks2 ;
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
    //} else{
        //alert("Hmmm, pas si sûr")
    //}
}