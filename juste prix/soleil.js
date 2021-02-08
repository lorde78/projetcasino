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
var input = document.querySelector("#input");


var plus = document.createElement("div");
plus.innerHTML += "<p class='pop_up premier'>C'est plus</p>";
console.dir(plus);

var moins = document.createElement("div");
moins.innerHTML += "<p class='pop_up premier'>C'est moins</p>";

function Plus() {
    contenu.appendChild(plus);
}

function Plus_bis() {
    var plus_bis= plus;
    plus_bis.classList.add("pop_up_bis");
    contenu.insertBefore(".premier", ".pop_up-bis");
}

function Moins() {
    contenu.appendChild(moins);
}

function Moins_bis() {
    var moins_bis= moins;
    moins_bis.classList.add("pop_up_bis");
    contenu.insertBefore(".premier", ".pop_up-bis");
}


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
                Moins();
                compt_pop = 1;
                return compt_pop;
            } 
            else {
                Moins_bis();
            }
        }
        else if (RecupChiffre < ChiffreAleatoire) {
            if (compt_pop == 0) {
                Plus();
                compt_pop = 1;
                return compt_pop;
            }
            else {
                Plus_bis();
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