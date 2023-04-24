import { $ } from '../modules/dom.js';

const $timerBar = $('.timer-bar');
const $timeLine = $('.timer');
const $audio = $('audio');
$audio[0].volume = 0;

const barWidth = $timerBar[0].clientWidth;

export const timer = () => {
	let audio = {
		dom: $audio[0],
		duration: $audio[0].duration,
		currentTime: $audio[0].currentTime
	};
	audio.width = (audio.currentTime * barWidth) / audio.duration;
	setTimeout(() => {
		$timeLine.css('width', audio.width + 'px');
		// console.info(audio);
		timer();
	}, 1000);
};
$timerBar.on('click', (e) => {
	let targetRect = e.target.getBoundingClientRect();
	let xPos = e.clientX - targetRect.left;
	console.info(xPos);
});
