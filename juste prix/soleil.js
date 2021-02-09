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
var clicks2 = 0;
var ValeurEnregistre = 0 ;
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
    var max  = 100;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").style.display= "none";
    document.getElementById("TexteNiveau1").style.display = "none";
    document.getElementById("ScoreMoi").style.display = "block" ;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " 
    document.getElementById("recup").style.display = "block"
    document.getElementById("button").style.display = "block"
}

function Niveau2(){
    var max  = 1000;
    ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").innerHTML= "none";
}
function Niveau3(){
    var max  = 10000;
    var ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").innerHTML= "none";
}

// Partie Cherine
// ---------------------------------------------------------------
function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1; 
    document.getElementById("recup").innerHTML = clicks;
    document.getElementById("ScoreMoi").innerHTML = "Mon score : " + clicks ; 

    if (clicks == 12){
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
    console.log(score1)
    document.getElementById("recup2").style.display = "block";
    document.getElementById("recup").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button").style.display = "none" ;
    document.getElementById("plus").style.display = "none";
    document.getElementById("moins").style.display = "none";

    ValeurEnregistre = document.getElementById("recup2").value
    console.log(ValeurEnregistre)

    if (ValeurEnregistre>0){
        document.getElementById("button2").style.display = "none";
        document.getElementById("recup2").style.display = "none";
        document.getElementById("buttonPlus").style.display = "block";
        document.getElementById("buttonMoins").style.display = "block";
        document.getElementById("buttonCestCa").style.display = "block";
        document.getElementById("AfficherChiffreEnregistre").style.display = "block";
        document.getElementById("AfficherChiffreEnregistre").innerHTML += ValeurEnregistre;
        document.getElementById("BlocChiffreAleatoire").style.display = "block";
        document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2;
        console.log(ChiffreAleatoire2)
    }}
    
function CestMoins(){
    alert("c moins")
    clicks2 += 1;
    console.log(clicks2)
    if (clicks2 == 12) {
        document.getElementById("LeChiffreAleatoire2").innerHTML = "Oh non toi perdu... "
    } else {
    max = ChiffreAleatoire2
    ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min)
    document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2
    console.log(min)
    console.log(max)
    }
    }

function CestPlus(){
    alert("C'est plus")
    clicks2 += 1;
    console.log(clicks2)
    if (clicks2 == 6) {
        document.getElementById("LeChiffreAleatoire2").innerHTML = "Oh non j'ai perdu... "
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
    if (ValeurEnregistre == ChiffreAleatoire2){
        alert("La massine a gagné")
    } else{
        alert("Hmmm, pas si sûr")
    }
}