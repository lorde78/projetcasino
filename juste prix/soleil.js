
let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire);

var clicks = 0;
var score1 = 0;
var score2 = 0;


function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre);
    clicks += 1;
    document.getElementById("recup").innerHTML = clicks;
    if (clicks == 4){
        if(RecupChiffre == ChiffreAleatoire) {
            alert("Cool");
            clicks= 0;
        }else {
                alert("tu as perdu");
                clicks= 0;
            }
    } else {
        if (RecupChiffre > ChiffreAleatoire) {
            document.getElementById("moins").style.display = "block";
        } else {
            if (RecupChiffre < ChiffreAleatoire){
                document.getElementById("plus").style.display = "block";
            }else {
                if(RecupChiffre == ChiffreAleatoire) {
                    alert("Cool");
                    score1 = clicks
                    console.log(score1)
                    clicks= 0;
                    console.log(score1)
                }
            }
        }           
    }
    if (score1 > 0) {
        document.getElementById("recup").style.display =="none";
    }