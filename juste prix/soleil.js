


//var ChiffreRentre = input.innerHTML ; 
//console.log(ChiffreRentre)


let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire);

var clicks = 0;

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
        clicks += 1;
        document.getElementById("recup").innerHTML = clicks;
        console.log(clicks)
        if (clicks == 4){
            alert("finito")
        }
    }
    // var RecupChiffre = 0 ;
        // RecupChiffre = RecupChiffre +1 ;
        // console.log(RecupChiffre);

    
}




//if (ChiffreAleatoire == RecupChiffre){
    //console.log(RecupChiffre)
    //} else {
    //    alert("non")
    //
