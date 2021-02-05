
let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire);


var max = 100;
var min = 0;
var clicks = 0;
var score1 = 0;
var score2 = 0;
var clicks2 = 0;

function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1;
    document.getElementById("recup").innerHTML = clicks;
    if (clicks == 12    ){
        if(RecupChiffre == ChiffreAleatoire) {
            alert("Cool");
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
                    alert("Cool");
                    score1 = clicks
                    return EnregistrerChoix()
                }
            }
        }           
    }
    
    }
    
function EnregistrerChoix(){
    console.log(score1)
    document.getElementById("recup2").style.display = "block";
    document.getElementById("recup").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button").style.display = "none" ;
    document.getElementById("plus").style.display = "none";
    document.getElementById("moins").style.display = "none";

    var ValeurEnregistre = document.getElementById("recup2").value
    console.log(ValeurEnregistre)

    if (ValeurEnregistre>0){
        document.getElementById("button2").style.display = "none";
        document.getElementById("recup2").style.display = "none";
        document.getElementById("buttonPlus").style.display = "block";
        document.getElementById("buttonMoins").style.display = "block";
        Ensuite()
    }
        }
    
function Ensuite(){
    document.getElementById("BlocChiffreAleatoire").style.display = "block";
    let ChiffreAleatoire2 = Math.floor(Math.random()*(max - min) + min);
    i = ChiffreAleatoire2
    console.log(i)
    document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire2;
}

        //clicks2 += 1;
        //if (document.getElementById("buttonMoins").innerHTML < clicks2){
        //    alert("C'est Moins")
        //}

function CestMoins(){
    alert("c moins")
        clicks2 += 1;
        min = i 
        let ChiffreAleatoire3 = Math.floor(Math.random()*(max - min) + min);
        console.log(ChiffreAleatoire3)
    }

function CestPlus(){
    clicks2 += 1;
    console.log(clicks2)
    alert("C'est plus")
}

    /*function CestMoins(){
        alert("C'est Moins")
        if (i > ValeurEnregistre){
            max = i
            let ChiffreAleatoire3 = Math.floor(Math.random()* (max - min) + min);
            document.getElementById("LeChiffreAleatoire2").innerHTML = ChiffreAleatoire3;

        }
    } */
