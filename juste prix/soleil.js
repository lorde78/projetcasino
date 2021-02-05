
let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire);

var clicks = 0;
var score1 = 0;
var score2 = 0;

var compt_pop = 0;

var node = document.getElementById("input");
var pop_up = document.getElementsByClassName("pop_up");
var plus = document.getElementById("plus");
var moins = document.getElementById("moins");


function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1;
    document.getElementById("recup").innerHTML = clicks;
    if (clicks == 10){
        if(RecupChiffre == ChiffreAleatoire) {
            alert("Cool");
            score1 = clicks
            console.log(score1)
            document.getElementById("recup2").style.display = "block";
            document.getElementById("recup").style.display = "none";
            document.getElementById("button2").style.display = "block";
            document.getElementById("button").style.display = "none" ;
            
        }else {
                alert("tu as perdu");
            }
    } else {
        if (RecupChiffre > ChiffreAleatoire) {
            if (compt_pop == 0) {
                moins.appendChild(node);
                ("moins").style.display = "block";
                compt_pop = 1;
            }
            
            else {
                node.insertBefore(moins)
            }

        } else if (RecupChiffre < ChiffreAleatoire){
            if (compt_pop == 0) {
                document.getElementById("plus").style.display = "block";
                compt_pop = 1;
            }
            else {
                //document.getElementById("plus").style.display = "block";
            }

        }else {
            if(RecupChiffre == ChiffreAleatoire) {
                alert("Cool");
                score1 = clicks
                    document.getElementById("recup2").style.display = "block";
                    document.getElementById("recup").style.display = "none";
                    document.getElementById("button2").style.display = "block";
                    document.getElementById("button").style.display = "none" ;
            // else    
                
            }
        }
    }
}