import { oceans } from "../src/data/oceans.js"; // Liste des océans

function onLoad(){
    loadQuestion();
    loadCanvas();

    window.life = 1500;
    window.maxLife = 1500;
}

const backgroundImage = document.getElementById("game-container");

setInterval(updateBackground, 200);
setInterval(updateTextStatus, 2000);
setInterval(loosePointSeconds, 200);

function loadQuestion(){
    setTimeout(() => {
        axios.get("/api/randomQuestion").then(response => {
            const data = response.data
            document.getElementById("question").innerHTML = data.question;
            document.getElementById("questionModal").style.display = "block"
            document.getElementById("answer1").innerHTML = data.answerValues[0]
            document.getElementById("answer2").innerHTML = data.answerValues[1]
            updateButton(data.answer)
        })
    }, ((Math.floor(Math.random()*1))+20)*1)
}


function updateButton(response){
    const answer1 = document.getElementById("answer1")
    const answer2 = document.getElementById("answer2")
    answer1.removeEventListener("click", answer1.clickHandler)
    answer2.removeEventListener("click", answer2.clickHandler)
    answer1.clickHandler = () => checkButton(false, response)
    answer2.clickHandler = () => checkButton(true, response)
    answer1.addEventListener("click", answer1.clickHandler)
    answer2.addEventListener("click", answer2.clickHandler)
}

function checkButton(state, response){
    if(state == response){
        window.life = window.life + 300;
        if(window.life > window.maxLife){
            window.life = window.maxLife;
        }
    }else{
        window.life = window.life - 300;
        if(window.life < 0){
            alert("Tu es mort comme la nature");
        }
    }
    updateLifeBar(window.life, window.lifeMax);
    document.getElementById("questionModal").style.display = "none"
    loadQuestion()
}

function loosePointSeconds(){
    window.life = window.life - 1;
    updateLifeBar(window.life, window.lifeMax);
    if(window.life < 0){
        alert("Tu es mort comme la nature");
    }
  }

      // Charge et redimensionne l'image sur le canevas
function loadCanvas() {
    const canvas = document.getElementById("gamecanvas");
    if(canvas != null) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = "/img/mapv.png";
        img.addEventListener("load", () => {
            if(ctx != null)ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight);
        });
    }
}

function updateLifeBar(life, maxLife) {
    const lifeBar = document.getElementById('life-bar');
    const lifeBarText = document.getElementById('life-bar-text');

    if (lifeBar != null && lifeBarText != null) {
        // Calcul du pourcentage de vie restante
        const lifePercentage = (life / maxLife) * 100;

        // Mise à jour de la largeur de la barre de vie
        lifeBar.style.width = `${lifePercentage}%`;

        // Mise à jour du texte
        lifeBarText.textContent = `${life} / ${maxLife}`;
    }
}


function updateBackground(){
    var polution = (oceans[0].tauxDePollution + oceans[1].tauxDePollution + oceans[2].tauxDePollution + oceans[3].tauxDePollution + oceans[4].tauxDePollution) / 5;
    if(backgroundImage != null){
        backgroundImage.style.backgroundColor = getBallColor(polution);
    }
  }

function updateTextStatus() {
    // Parcourir chaque océan (index de 0 à 4)
    for (let i = 0; i < oceans.length; i++) {
        const el = document.getElementById(`pollutionBall${i}`);
        if (el != null) {
        // Mettre à jour la couleur de fond de l'élément en fonction du taux de pollution
            el.style.backgroundColor = getBallColor(oceans[i].tauxDePollution);

            // Accéder à l'élément contenant les statistiques détaillées
            const elStats = document.getElementById(`stats-pollutionBall${i}`);
            if (elStats != null) {
                // Mettre à jour la température dans l'élément <strong> de température
                const temperatureElement = elStats.querySelector("p strong:nth-of-type(1)");
                if (temperatureElement != null) {
                temperatureElement.textContent = `Température : ${oceans[i].temperature}°C`;
                }

                // Mettre à jour la superficie dans l'élément <strong> de superficie
                const superficieElement = elStats.querySelector("p strong:nth-of-type(2)");
                if (superficieElement != null) {
                superficieElement.textContent = `Superficie : ${oceans[i].superficie} millions km²`;
                }

                // Mettre à jour le taux de pollution dans l'élément <strong> du taux de pollution
                const pollutionElement = elStats.querySelector("p strong:nth-of-type(3)");
                if (pollutionElement != null) {
                pollutionElement.textContent = `Taux de Pollution : ${oceans[i].tauxDePollution}%`;
                }
            }
        }
    }
    console.log(oceans.map(ocean => ocean.tauxDePollution));
}


const getBallColor = (pollution) => {
    if (pollution >= 100) return "black";  // Très haute pollution
    if (pollution >= 80) return "grey";    // Pollution élevée
    if (pollution >= 60) return "red";     // Pollution élevée
    if (pollution >= 40) return "orange";  // Pollution modérée
    if (pollution >= 20) return "yellow";  // Pollution faible
    return "darkgreen";                    // Pas de pollution
};




window.addEventListener('load', onLoad, false);