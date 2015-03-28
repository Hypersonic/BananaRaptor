var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var t = 0;

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
    ctx.translate(-img.width/2 * sclx, -img.height/2 * scly);
    ctx.translate(transx, transy);
    ctx.scale(sclx, scly);
    ctx.rotate(rot);
    ctx.drawImage(img, 0, 0);
    ctx.scale(1/sclx, 1/scly);
    ctx.rotate(-rot);
    ctx.translate(-transx, -transy);
    ctx.translate(img.width/2 * sclx, img.height/2 * scly);
    console.log("asdf");
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCharacter(400, 400);
	console.log("fux");
    t++;
}

function drawCharacter(x, y) {
	var ban = images['banana'];
	drawImage(ban, x, y, 0.2, 0.2, Math.PI/2);
	var thl = images['thluffy'];
	drawImage(thl, x-70, y-80, 0.08, 0.08, 0);
}

draw();
