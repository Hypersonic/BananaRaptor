var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.scale(0.4, 0.4);

var t = 0;

var images = {};

function loadImages() {
	var imgs = $('img');
	for (var i = 0; i < imgs.length; i++) {
		images[imgs[i].id] = imgs[i];
	}
}

loadImages();

function drawImage(img, transx, transy, sclx, scly, rot) {
    ctx.save();
    ctx.translate(-img.width/2 * sclx, -img.height/2 * scly);
    ctx.translate(transx, transy);
    ctx.scale(sclx, scly);
    ctx.rotate(rot);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width * 2.5, canvas.height * 2.5);
	for (var j = 0; j < 10; j++) {
		for (var i = 0; i < 12; i++) {
			if (j % 2 == 0) {
				drawCharacter((t*10) % 280 + (i-1) * 280, (j+1) * 230);
			} else {
				drawCharacter((t*10) % 280 + (i-8) * 280, (j+1) * 230);
			}
		}
		ctx.scale(-1, 1);
	}
    t++;
    setTimeout(draw, 10);
}

function drawCharacter(x, y) {
	var ban = images['banana'];
	drawImage(ban, x, y, 0.2, 0.2, 0);
	var thl = images['thluffy'];
	drawImage(thl, x+130, y-80, 0.08, 0.08, 0);
	var leg = images['leg'];
	for (var i = 0; i < 20; i+= 2) {
		drawImage(leg, x-70, y+30, 0.3, 0.3, (t+i)/2.);
		drawImage(leg, x+130, y+30, 0.3, 0.3, (t+i)/2.);
	}
	drawImage(leg, x-70, y+30, 0.3, 0.3, t/2.);
	drawImage(leg, x+90, y+30, 0.3, 0.3, (t+1)/2.);
    for (var i = 0; i < 100; i+=20) {
        drawArm(x+i, y-10);
    }
}


function drawArm(x, y) { // x, y of char center
    var arm = images['arm'];
    drawImage(arm, x, y, .1, -.1, Math.sin(t/10));
}

draw();
