import { oceans } from "../src/data/oceans.js"; // Liste des océans

function onLoad(){
    loadQuestion();
    loadCanvas();
}

let life = 1500;
const maxLife = 1500;
let finish = false;

const backgroundImage = document.getElementById("game-container");

setInterval(updateBackground, 200);
//setInterval(updateTextStatus, 2000);
setInterval(loosePointSeconds, 200);
updateLifeBar();
//updateTextStatus();
function loadQuestion() {
    // Calcul d'un timeout entre 20s (15000 ms) et 45s (35000 ms)
    const timeoutDuration = Math.random() * (35000 - 15000) + 15000;

    setTimeout(() => {
        axios.get("/api/randomQuestion").then(response => {
            const data = response.data;
            document.getElementById("question").innerHTML = data.question;
            document.getElementById("questionModal").style.display = "block";
            document.getElementById("answer1").innerHTML = data.answerValues[0];
            document.getElementById("answer2").innerHTML = data.answerValues[1];
            document.getElementById("hint").innerHTML = `<a href="${data.hint}">Aide</a>`;
            updateButton(data.answer);
        });
    }, timeoutDuration);
}



function updateButton(response){
    const answer1 = document.getElementById("answer1")
    const answer2 = document.getElementById("answer2")
    answer1.removeEventListener("click", answer1.clickHandler)
    answer2.removeEventListener("click", answer2.clickHandler)
    answer1.clickHandler = () => checkButton(true, response)
    answer2.clickHandler = () => checkButton(false, response)
    answer1.addEventListener("click", answer1.clickHandler)
    answer2.addEventListener("click", answer2.clickHandler)
}

function checkButton(state, response){
    if(state == response){
        life = life + 300;
        removePollution(getRandomOcean());
        if(life > maxLife){
            life = maxLife;
        }
    }else{
        life = life - 300;
        addPollution(getRandomOcean());
        if(life < 0){
            alert("Tu es mort comme la nature");
            finish = true;
        }
    }
    updateLifeBar();
    document.getElementById("questionModal").style.display = "none"
    loadQuestion()
}

function loosePointSeconds(){
    if(finish){ return;}
    life = life - (1 + getPollutionMalus(oceans));
    updateLifeBar();
    if(life < 0){
        alert("Tu es mort comme la nature");
        finish = true;
    }
}

function getRandomOcean(){
    return oceans[Math.floor(Math.random() * oceans.length)];
}

function addPollution(ocean){
    ocean.tauxDePollution = ocean.tauxDePollution + (Math.random() * 20);
    if(ocean.tauxDePollution > 100){
        ocean.tauxDePollution = 100;
    }
    updateTextStatus();
}

function removePollution(ocean){
    ocean.tauxDePollution = ocean.tauxDePollution + (Math.random() * 20);
    if(ocean.tauxDePollution > 100){
        ocean.tauxDePollution = 100;
    }
    updateTextStatus();
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

function updateLifeBar() {
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


const getPollutionMalus = (oceans) => {
    let pollutionSum = 0;
    for (let ocean of oceans) {
        if(ocean.tauxDePollution == 100){
            pollutionSum+=1;
        }
    }
    return pollutionSum * 5;
};

window.addEventListener('load', onLoad, false);