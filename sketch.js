
function setup() {
	canv = createCanvas(750, 750);
	canvPos();
	

	aSlider = createSlider(-100, 100, 0.5);
	aSlider.position(25, 15);
	bSlider = createSlider(-100, 100, 0);
	bSlider.position(25, 45);
	cSlider = createSlider(-1000, 1000, 0);
	cSlider.position(25, 75);
	
}

function draw() {
	background(255, 255, 255);
	stroke(220);
	line(375, 0, 375, 750);
	line(0, 375, 750, 375);

	// f(x) = 2x^2 + 2x - 4
	var a = aSlider.value();
	var b = bSlider.value();
	var c = cSlider.value();
	var d = Math.pow(b, 2)-4*-a*c;
	var p = -(b/2*-a);
	var q = -(d/4*-a);

	for(x=-750;x<750;x++) {
		var y = -a*Math.pow(x-p, 2)+q;
		line(x+375, (-a*Math.pow(x-p, 2)+q)+375, x+376, (-a*Math.pow(x+1-p, 2)+q) + 375)
		
		fill(0);
		stroke(0);
		// point(x+375,y/8+375,3);
	}

	text("a: " + a, 1, 15);
	text("b: " + b, 1, 35);
	text("c: " + c, 1, 55);
	text("p: " + p, 1, 85);
	text("q: " + q, 1, 105);
	text("Δ: " + d, 1, 125);
	
	

	//document.getElementById('info-box').innerHTML = "a: " + a + " | b: " + b + " | c: " + c + " | p: " + p + " | q: " + q + " | delta: " + d;
	// document.getElementById('info1').innerHTML = "a: " + a;
	// document.getElementById('info2').innerHTML = "b: " + b;
	// document.getElementById('info3').innerHTML = "c: " + c;
	// document.getElementById('info4').innerHTML = "p: " + p;
	// document.getElementById('info5').innerHTML = "q: " + q;
	// document.getElementById('info6').innerHTML = "delta: " + d;

}

function windowResized() {
  canvPos();
}

function canvPos() {
	var x = (windowWidth - width) / 2;
	var y = 20;
	canv.position(x, y);
}
