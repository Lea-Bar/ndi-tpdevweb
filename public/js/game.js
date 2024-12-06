function onLoad(){
    loadCanvas()
    loadQuestion()
}

function loadQuestion(){
    setTimeout(() => {
        console.log("lol")
        axios.get("/api/randomQuestion").then(response => {
            const data = response.data
            document.getElementById("question").innerHTML = data.question;
            document.getElementById("questionModal").style.display = "block"
            document.getElementById("answer1").innerHTML = data.answerValues[0]
            document.getElementById("answer2").innerHTML = data.answerValues[1]
        })
    }, ((Math.floor(Math.random()*1))+1)*1000)
}

function loadCanvas(){
    const canvas = document.getElementById("gamecanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "/img/map.png"
    img.addEventListener("load", (e) => {
        ctx.drawImage(img, 0,0, canvas.clientWidth, canvas.clientHeight)
    })
}

window.addEventListener('load', onLoad, false);