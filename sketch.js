var a = 2;
var b = 1;
var c = 1;

function setup() {
	canv = createCanvas(500, 500);
	canvPos();
	a = 0.5;
	b = 1;
	c = 1;
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
			c--;
			break;
		case 87: // W
			c-=5;
			break;
		case DOWN_ARROW:
			c++;
			break;
		case 83: // S
			c+=5;
			break;
		case RIGHT_ARROW:
			b--;
			break;
		case 68: // D
			b-=5;
			break;
		case LEFT_ARROW:
			b++;
			break;
		case 65: // A
			b+=5;
			break;
		default:
			break;
	}
}

function draw() {
	background(255, 255, 255);
	stroke(220);
	line(250,0,250,500);
	line(0,250,500,250);

	// f(x) = 2x^2 + 2x - 4

	var d = Math.pow(b, 2)-4*-a*c;
	var p = -(b/2*-a);
	var q = -(d/4*-a);

	for(x=-500;x<500;x++) {
		var y = -a*Math.pow(x-p, 2)+q;
		fill(0);
		stroke(0);
		point(x+250,y/4+250,3);
	}

	//document.getElementById('info-box').innerHTML = "a: " + a + " | b: " + b + " | c: " + c + " | p: " + p + " | q: " + q + " | delta: " + d;
	document.getElementById('info1').innerHTML = "a: " + a;
	document.getElementById('info2').innerHTML = "b: " + b;
	document.getElementById('info3').innerHTML = "c: " + c;
	document.getElementById('info4').innerHTML = "p: " + p;
	document.getElementById('info5').innerHTML = "q: " + q;
	document.getElementById('info6').innerHTML = "delta: " + d;

}

function windowResized() {
  canvPos();
}

function canvPos() {
	var x = (windowWidth - width) / 2;
	var y = 100;
	canv.position(x, y);
}
