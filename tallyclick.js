  // Carré de jeu
  var NbBody = 0;
  var monLaunch = document.getElementById("launch");
  

  let totalvelocity = 0;
  
          //Determine le nombre de carré
  function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(max);
      console.log(min);
  }

          // Change la difficulté
  function SetDiff(Diff) { 
      monLaunch.className = "";
      monLaunch.classList.add(Diff);
  }

  function getPosition(mouvement) {
      var divElement = document.querySelector("div");
      var results = divElement.getBoundingClientRect();
      console.log(results.top, results.left);
      if (mouvement) {
          window.requestAnimationFrame(getPosition);
        }
  }
      window.requestAnimationFrame(getPosition);



          // Lancer le jeu
  function Startgame() {
      reset();
      NbBody = getRandomIntInclusive(40, 50);
      console.dir(NbBody);
      var maDiff = document.getElementById("launch").className;
      console.log(maDiff);

      switch ( maDiff ) {
          case "facile" :
              document.querySelector("section").innerHTML = "";
              document.querySelector("h2").innerHTML = "GO ! FACILE";
              ecart = 1.22;
              for (var index=0 ; index < NbBody ; index+=1) {
                  let accel = 1-(index*0.01);
                  let speed = index*2;
                  if (accel >= 0.8) {
                      velocity = speed*accel;
                      document.querySelector("section").innerHTML += "<div class='facile carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  } else {
                      velocity += ecart;
                      document.querySelector("section").innerHTML += "<div class='facile carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  }
                  totalvelocity = velocity;
              }
              break;

          case "moyen" :
              console.log("vous êtes en moyen");
              document.querySelector("section").innerHTML = "";
              document.querySelector("h2").innerHTML = "GO ! MOYEN";
              ecart = 1.0675;
              for (var index=0 ; index < NbBody ; index+=1 ) {
                  let accel = 1-(index*0.01);
                  let speed = index*1.75;
                  if (accel >= 0.8) {
                      velocity = speed*accel;
                      document.querySelector("section").innerHTML += "<div class='moyen carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  } else {
                      velocity += ecart;
                      document.querySelector("section").innerHTML += "<div class='moyen carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  }
                  totalvelocity = velocity;
              }
              break;

          case "hard" :
              console.log("vous êtes en hard");
              document.querySelector("section").innerHTML = "";
              document.querySelector("h2").innerHTML = "GO ! HARD";
              ecart = 0.7625;
              for (var index=0 ; index < NbBody ; index+=1 ) {
                  let accel = 1-(index*0.01);
                  let speed = index*1.25;
                  if (accel >= 0.8) {
                      velocity = speed*accel;
                      document.querySelector("section").innerHTML += "<div class='hard carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  } else {
                      velocity += ecart;
                      document.querySelector("section").innerHTML += "<div class='hard carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  }
                  totalvelocity = velocity;
              }
              break;

          case "impossible" :
              console.log("vous êtes en impossible");
              document.querySelector("h2").innerHTML = "GO ! IMPOSSIBLE";
              document.querySelector("section").innerHTML = "";
              ecart = 0.4575;
              for (var index=0 ; index < NbBody ; index+=1 ) {
                  let accel = 1-(index*0.01);
                  let speed = index*0.75;
                  if (accel >= 0.8) {
                      velocity = speed*accel;
                      document.querySelector("section").innerHTML += "<div class='impossible carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  } else {
                      velocity += ecart;
                      document.querySelector("section").innerHTML += "<div class='impossible carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                  }
                  totalvelocity = velocity;
              }
              break
      }
  }

  // Le clicker

  function clique() {
      var score = 0;
      var divElement = document.querySelectorAll("div.carre");
      var condition = false;
      for(let select=0; select < divElement.length ; select ++){
          if (divElement[select].getBoundingClientRect().left < 1000 && divElement[select].getBoundingClientRect().left > 900){
              compteur = compteur + 1;
              condition = true;
              document.querySelector("#cliks").innerHTML = "<p>" + compteur + "</p>";
          }
      }
      if (! condition){ 
              compteur = compteur - 1;
              document.querySelector("#cliks").innerHTML = "<p>" + compteur + "</p>";
          }
      score = (compteur/NbBody);
      score = score*100;
      console.log("votre score est de : " + parseInt(score) + "%");
      document.querySelector(".score").innerHTML = "<p> Votre score est de " + parseInt(score) + "% !</p>";
      

  }

  function reset() {
      compteur = 0;
      document.querySelector("#cliks").innerHTML = "<p>" + compteur + "</p>"  ;   
  }


  // Success
  //function success(){
  //    object.addEventListener("animationend", myScript);
  //}