var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function drawImage(img, transx, transy, sclx, scly, rot) {
    ctx.translate(transx, transy);
    ctx.rotate(rot);
    ctx.drawImage(img, 0, 0);
    ctx.rotate(-rot);
    ctx.translate(-transx, -transy);
}

var im = document.getElementById('velo');
im.onload = function() {
    console.log("hey");
    drawImage(im, 0, 0, 1, 1, 0);
}
