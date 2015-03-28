var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var images = {
};

function loadImages() {
	var imgs = $('img');
	for (var i = 0; i < imgs.length; i++) {
		images[imgs[i].id] = imgs[i];
	}
	console.log(images);
}

loadImages();

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

function draw() {
	drawCharacter(0, 0);
}

function drawCharacter(x, y) {
}
