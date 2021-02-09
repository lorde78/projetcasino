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

function Plus(contenu, p, compteur) {
    compteur = 0;
    var plus = document.createElement("div");
    plus.innerHTML += "<p class='pop_up'>C'est plus</p>";
    contenu = document.querySelector("#contenu");
    p = document.querySelector("p.premier");
    if (compteur == 0) {
        contenu.appendChild(plus);
        plus.classList.add("premier");
        compteur = 1;
        return compteur;
    } else {
        contenu.insertBefore(plus, p);
        plus.classList.add("premier");
    }

}


function Moins(contenu, p, compteur) {
    var moins = document.createElement("div");
    moins.innerHTML += "<p class='pop_up'>C'est moins</p>";
    if (compteur == 0) {
        contenu.appendChild(moins);
        moins.classListe.add("premier");
        compteur = 1
        return compteur;
    } else {
        contenu.insertBefore(moins, p);
        moins.classList.add("premier");
    }

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
                Moins(contenu);
        }

        else if (RecupChiffre < ChiffreAleatoire) {
                Plus(contenu);
        }
// -----------------------------------------------------------------------------

// Partie Chérine
// -----------------------------------------------------------------------------
        else {
            if(RecupChiffre == ChiffreAleatoire) {
                alert("Cool");
                score1 = clicks;
                    document.getElementById("recup2").style.display = "block";
                    document.getElementById("recup").style.display = "none";
                    document.getElementById("button2").style.display = "block";
                    document.getElementById("button").style.display = "none" ;
            // else    
                
            }
        }
    }
}