function setup() {
	canv = createCanvas(750, 750)
	canvPos()
}

function draw() {
	clear()
	background(255, 255, 255, 0)
	stroke(220)
	line(375, 0, 375, 750)
	line(0, 375, 750, 375)

	var a = Number(document.querySelector('#input-a').value) / 100
	var b = Number(document.querySelector('#input-b').value)
	var c = Number(document.querySelector('#input-c').value)
	var d = Math.pow(b, 2) - 4 * -a * c
	var p = -((b / 2) * -a)
	var q = -((d / 4) * -a)

	for (x = -750; x < 750; x++) {
		var y = -a * Math.pow(x - p, 2) + q
		line(x + 375, -a * Math.pow(x - p, 2) + q + 375, x + 376, -a * Math.pow(x + 1 - p, 2) + q + 375)

		fill(0)
		stroke(0)
	}

	document.getElementById('info-box').innerHTML = `
		a: ${a}<br />
		b: ${b}<br />
		c: ${c}<br />
		p: ${p}<br />
		q: ${q}<br />
		Δ: ${d}
	`
}

function windowResized() {
	canvPos()
}

function canvPos() {
	var x = (windowWidth - width) / 2
	var y = 20
	canv.position(x, y)
}
