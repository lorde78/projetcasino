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

var input = document.querySelector("#input");

var plus = document.createElement("div");
plus.innerHTML += "<p class='pop_up premier'>C'est plus</p>";

var moins = document.createElement("div");
moins.innerHTML += "<p class='pop_up premier'>C'est moins</p>";


function Plus(contenu) {
    contenu = document.querySelector("#contenu");
    contenu.appendChild(plus);
}

function Plus_bis(contenu) {
    var plus_bis= plus;
    plus_bis.classList.add("pop_up_bis");
    contenu.insertBefore(".premier", ".pop_up-bis");
    plus_bis.classList.add("premier");
}

function Moins(contenu) {
    contenu.appendChild(moins);
}

function Moins_bis(contenu) {
    var moins_bis= moins;
    moins_bis.classList.add("pop_up_bis");
    contenu.insertBefore(".premier", ".pop_up-bis");
    moins_bis.classList.add("premier");
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
                Moins(contenu);
                compt_pop = 1;
                return compt_pop;
            } 
            else {
                Moins_bis(contenu);
            }
        }
        else if (RecupChiffre < ChiffreAleatoire) {
            if (compt_pop == 0) {
                Plus(contenu);
                compt_pop = 1;
                return compt_pop;
            }
            else {
                Plus_bis(contenu);
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