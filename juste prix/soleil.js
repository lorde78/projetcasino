// Partie méli
// ---------------------------------------------------------------

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

//var ValeurEnregistre = 0 ;
var ChiffreAleatoire = 0 ; 
var ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min);


function TexteNiveau1SourisOver(){
    document.getElementById("TexteNiveau1").style.display = "block";
}
function TexteNiveau1SourisLeave() {
    document.getElementById("TexteNiveau1").style.display = "none";
}

function TexteNiveau2SourisOver(){
    document.getElementById("TexteNiveau2").style.display = "block";
}
function TexteNiveau2SourisLeave() {
    document.getElementById("TexteNiveau2").style.display = "none";
}

function TexteNiveau3SourisOver(){
    document.getElementById("TexteNiveau3").style.display = "block";
}
function TexteNiveau3SourisLeave() {
    document.getElementById("TexteNiveau3").style.display = "none";
}

function Niveau1(){
    max  = 100;
    ClickMax = 7 ;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("TexteNiveau1").style.display = "none";
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
    document.getElementById("TexteNiveau1").style.display = "none";
    document.getElementById("Scores").style.display = "block" ;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    document.getElementById("ScoreOrdi").innerHTML = "Score machine : " 
    document.getElementById("BoutonsPartie1").style.display = "block"
}
function Niveau3(){
    max  = 10000;
    ClickMax = 21 ;
    var ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("TexteNiveau1").style.display = "none";
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
    // document.getElementById("BoutonsPartie2-1").style.display = "block";
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