export function fade(element, fadeIn, duration) {
	let opacity;
	let start = null;

	// 初始化透明度
	const startOpacity = fadeIn ? 0 : 1;
	const endOpacity = fadeIn ? 1 : 0;

	element.style.opacity = startOpacity;
	if (endOpacity === 1) {
		element.style.visibility = 'visible'
	}

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;

		if (fadeIn) {
			opacity = startOpacity + progress / duration;
			if (opacity > 1) opacity = 1;
		} else {
			opacity = startOpacity - progress / duration;
			if (opacity < 0) opacity = 0;
		}

		element.style.opacity = opacity;

		if ((fadeIn && opacity < endOpacity) || (!fadeIn && opacity > endOpacity)) {
			window.requestAnimationFrame(step);
		} else {
			// 动画完成后确保将透明度设为目标值
			element.style.opacity = endOpacity;
			if (endOpacity === 0) {
				element.style.visibility = 'hidden'
			}
		}
	}

	window.requestAnimationFrame(step);
}