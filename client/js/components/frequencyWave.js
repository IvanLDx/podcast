const canvas = document.querySelectorAll('.js-cv-frequency');
for (let i = 0; i < canvas.length; i++) {
	canvas[i].width = canvas[i].parentElement.clientWidth;
}
const canvasCtx = [canvas[0].getContext('2d'), canvas[1].getContext('2d')];

const audioCtx = new AudioContext();
let $audio = document.querySelector('audio');
const audioSourceNode = audioCtx.createMediaElementSource($audio);

const analyserNode = audioCtx.createAnalyser();
analyserNode.fftSize = 256; // 16384
const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Float32Array(bufferLength);

audioSourceNode.connect(analyserNode);
analyserNode.connect(audioCtx.destination);

function cvLoop(evt) {
	for (let i = 0; i < canvasCtx.length; i++) {
		evt(canvasCtx[i]);
	}
}

export const getWaves = () => {
	let fbc_array = new Uint8Array(analyserNode.frequencyBinCount);
	// let bar_count = window.innerWidth / 2;

	analyserNode.getByteFrequencyData(fbc_array);

	cvLoop((cv) => cv.clearRect(0, 0, canvas[0].width, canvas[0].height));

	for (var i = 0; i < fbc_array.length; i++) {
		let bar_pos = (canvas[0].width * i * 2) / fbc_array.length;
		// let bar_pos = (fbc_array.length * i) / canvas[0].width;
		let bar_width = canvas[0].width / fbc_array.length;
		let bar_height = -fbc_array[i] * 0.7;

		cvLoop((cv) => (cv.fillStyle = 'rgb(' + ~~fbc_array[i] + ', 50, 50)'));
		cvLoop((cv) =>
			cv.fillRect(bar_pos, canvas[0].height, bar_width, bar_height)
		);
	}
	// analyserNode.getFloatFrequencyData(dataArray);

	// canvasCtx.fillStyle = '#FFE6C5';
	// canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

	// const barWidth = (canvas.width / bufferLength) * 2;
	// let posX = 0;
	// for (let i = 0; i < bufferLength; i++) {
	// 	const barHeight = (dataArray[i] + 140) * 2;
	// 	canvasCtx.fillStyle =
	// 		'rgb(' + Math.floor(barHeight + 100) + ', 50, 50)';
	// 	canvasCtx.fillRect(
	// 		posX,
	// 		canvas.height - barHeight / 2,
	// 		barWidth,
	// 		barHeight / 2
	// 	);
	// 	posX += barWidth;
	// }
};
