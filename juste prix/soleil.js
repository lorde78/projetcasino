// Partie Cherine
// --------------------------------------------------------------------
let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire);

var clicks = 0;
var score1 = 0;
var score2 = 0;
// ------------------------------------------------------------------

// Partie méli
// ---------------------------------------------------------------
var compt_pop = 0;

var contenu = document.querySelector("#contenu");

var plus = contenu.createElement("section");
plus.class=("pop_up");
plus.textContent="C'est plus";

var plus_bis= plus;
plus_bis.classList.add("pop_up_bis");

var moins = contenu.createElement("section");
moins.class=("pop_up");
moins.textContent="C'est moins";

var moins_bis= moins;
moins_bis.classList.add("pop_up_bis");

// --------------------------------------------------------------

// Partie Cherine
// ---------------------------------------------------------------
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
// ----------------------------------------------------------------------

// Partie méli
// ---------------------------------------------------------------------------
    } else {
        if (RecupChiffre > ChiffreAleatoire) {
            if (compt_pop == 0) {
                contenu.appendChild(moins);
                compt_pop = 1;
                return compt_pop;
            }
            
            else {
                moins = moins_bis;
                contenu.insertBefore(moins, ".pop_up-bis");
            }
        }
        else if (RecupChiffre < ChiffreAleatoire) {
            if (compt_pop == 0) {
                contenu.appendChild(plus);
                compt_pop = 1;
                return compt_pop;
            }

            else {
                plus = plus_bis;
                contenu.insertBefore(plus, ".pop_up-bis");
            }
// -----------------------------------------------------------------------------

// Partie Chérine
// -----------------------------------------------------------------------------
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