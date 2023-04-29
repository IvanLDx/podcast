export const volumeScrew = {
	screw: document.querySelector('.js-volume-screw'),
	wheel: document.querySelector('.js-volume-wheel'),
	clickPos: 0,
	rotate: 0,
	speed: 3
};

function mouseMove(e) {
	let nextPos =
		e.clientX -
		volumeScrew.currentPos +
		(e.clientX - volumeScrew.clickPos) * volumeScrew.speed;

	if (nextPos > 67.5) nextPos = 67.5;
	if (nextPos < -67.5) nextPos = -67.5;
	volumeScrew.wheel.style.transform = `rotate(${nextPos}deg)`;
	volumeScrew.rotate = nextPos;
}

function removeEvents() {
	document.onmousemove = null;
	document.onmouseup = null;
}

function startDrag() {
	document.onmousemove = mouseMove;
	document.onmouseup = removeEvents;
}

const getRotateStyle = function () {
	let rotateRaw = volumeScrew.wheel.style.transform;
	let rotate = rotateRaw.replace('rotate(', '');
	rotate = rotate.replace('deg)');
	rotate = parseInt(rotate, 10);
	return rotate;
};
getRotateStyle.success = function (evt) {
	evt(this);
};

getRotateStyle.setRotate = function () {
	if (!isNaN(getRotateStyle())) {
		volumeScrew.rotate = getRotateStyle();
	}
};

volumeScrew.start = function () {
	volumeScrew.screw.onmousedown = (e) => {
		getRotateStyle.setRotate();

		console.info(volumeScrew.rotate);
		volumeScrew.clickPos = e.clientX;
		volumeScrew.currentPos = e.clientX - volumeScrew.rotate;
		startDrag();
	};
};
