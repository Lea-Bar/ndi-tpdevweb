function onLoad(){
    loadCanvas()
    loadQuestion()
}

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
    }, ((Math.floor(Math.random()*30))+20)*1000)
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
        console.log("c vrai ma gueule")
    }else{
        console.log("c fo")
    }
    document.getElementById("questionModal").style.display = "none"
    loadQuestion()
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