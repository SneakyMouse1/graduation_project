export const animate = ({
	timing,
	draw,
	duration
}) => {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction change from 0 to 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// Calculate actual animation status
		let progress = timing(timeFraction);
        
        // Rendering
		draw(progress); 

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
};