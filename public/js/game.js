function onLoad(){
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