function startGame(){
    let tractor;
    let myCanvas = document.getElementById("myCanvas");
    let ctx = myCanvas.getContext("2d");
    tractor = new Image();
    tractor.src = "../imgs/tractor.png";
    tractor.onload = function () {
        ctx.drawImage(tractor, 50, 50, 50, 50);
    }
};
