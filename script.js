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
var rot = 0;

function velo() {
    drawImage(im, 0, 0, 1, 1, rot);
    rot += 2;
}

im.onload = function() {
    setInterval(velo, 10);
}
