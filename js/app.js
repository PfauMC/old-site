document.addEventListener('mousemove', e => {
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

	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(x - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(y - window.innerHeight / 2) * .01}deg;
		`
	})
})