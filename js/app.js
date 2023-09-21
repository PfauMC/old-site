document.addEventListener('mousemove', e => {
	document.getElementsByClassName('xtxt')[0].innerText = "X: " + e.clientX;
	document.getElementsByClassName('ytxt')[0].innerText = "Y: " + e.clientY;

	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

document.addEventListener('deviceorientation', e => {
	const x = e.beta;
	const y = e.gamma;
	const z = e.alpha;

	document.getElementsByClassName('xtxt')[0].innerText = "X: " + x;
	document.getElementsByClassName('ytxt')[0].innerText = "Y: " + y;
	document.getElementsByClassName('ztxt')[0].innerText = "Z: " + z;

	Object.assign(document.documentElement, {
		style: `
		--move-x: ${((window.innerWidth - ((x + 90) * (window.innerWidth / 180.0))) - window.innerWidth / 2) * -.005}deg;
		--move-y: ${((window.innerWidth - ((y + 90) * (window.innerWidth / 180.0))) - window.innerWidth / 2) * .01}deg;
		`
	})
})

