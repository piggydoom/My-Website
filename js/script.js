// window.onload = function() {
//     let c = document.getElementById("myCanvas");
//     let ctx = c.getContext("2d");
//     let img = document.getElementById("scream");
//     ctx.drawImage(img, 10, 10);
//   }; 

window.onload = function () {
    let myCanvas = document.getElementById("myCanvas");
    let ctx = myCanvas.getContext("2d");

}

let tractor = new Image();
tractor.src = "../imgs/tractor.png";
tractor.onload = function () {
    ctx.drawImage(tractor, ctx.width / 2, ctx.height / 2, 50, 50);
}