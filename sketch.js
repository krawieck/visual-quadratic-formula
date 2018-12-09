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

	const a = Number(document.querySelector('#input-a').value) / 100
	const b = Number(document.querySelector('#input-b').value)
	const c = Number(document.querySelector('#input-c').value)
	const d = Math.pow(b, 2) - 4 * -a * c
	const p = -((b / 2) * -a)
	const q = -((d / 4) * -a)

	for (let x = -380; x < 380; x++) {
		// const y = -a * Math.pow(x - p, 2) + q
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
	const x = (windowWidth - width) / 2
	const y = 20
	canv.position(x, y)
}
