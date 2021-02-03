


//var ChiffreRentre = input.innerHTML ; 
//console.log(ChiffreRentre)

let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire)

function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre)
    
    if (RecupChiffre > ChiffreAleatoire) {

        alert("C'est trop ")
    } else {
        if (RecupChiffre < ChiffreAleatoire){
            alert("C'est pas assez ")
        }
    
    else {
        if (RecupChiffre == ChiffreAleatoire){
            alert("Cool")
    }
    }
    }
}




//if (ChiffreAleatoire == RecupChiffre){
    //console.log(RecupChiffre)
    //} else {
    //    alert("non")
    //
