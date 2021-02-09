


var max  = 100;
var min = 0;
var clicks = 0;
var score1 = 0;
var clicks2 = 0;
var ValeurEnregistre = 0 ;
var ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min);


function Niveau1(){
    var max  = 100;
    var ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").innerHTML= "none";
}
function Niveau2(){
    var max  = 1000;
    var ChiffreAleatoire = Math.floor(Math.random()*(max - min) + min);
    console.log(ChiffreAleatoire);
    document.getElementById("Niveau").innerHTML= "none";
}




function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1;
    document.getElementById("recup").innerHTML = clicks;
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
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "block";
        } else {
            if (RecupChiffre < ChiffreAleatoire){
                document.getElementById("moins").style.display = "none";
                document.getElementById("plus").style.display = "block";
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