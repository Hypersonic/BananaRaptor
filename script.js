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
    ctx.translate(-img.width/2 * sclx, -img.height/2 * scly);
    ctx.scale(sclx, scly);
    ctx.rotate(rot);
    ctx.translate(transx, transy);
    ctx.drawImage(img, 0, 0);
    ctx.translate(-transx, -transy);
    ctx.rotate(-rot);
    ctx.scale(1/sclx, 1/scly);
    ctx.translate(img.width/2 * sclx, img.height/2 * scly);
    console.log("asdf");
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCharacter(200, 200);
	console.log("fux");
}

function drawCharacter(x, y) {
	var ban = images['banana'];
	drawImage(ban, x, y, 0.3, 0.3, 0);
}

draw();
