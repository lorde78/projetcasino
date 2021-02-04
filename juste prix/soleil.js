let ChiffreAleatoire = Math.floor(Math.random()*100);
    console.log(ChiffreAleatoire)


function ValiderChoix() {
    var RecupChiffre = document.getElementById("recup").value ;
    console.log(RecupChiffre)
    
    if (RecupChiffre > ChiffreAleatoire) {
        document.getElementById("moins").style.display = "block";
    } else {
        if (RecupChiffre < ChiffreAleatoire){
            document.getElementById("plus").style.display = "block";
        }
    
    else {
        if (RecupChiffre == ChiffreAleatoire){
            alert("Cool")
    }
    }
    }
}