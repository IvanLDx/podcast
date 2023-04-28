import Audio from '../modules/Audio.js';
import { $ } from '../modules/dom.js';

const SPEED = 1;
const VOLUME = 1;
const $audio = Audio(VOLUME, SPEED);

export const timer = () => {
	setTimeout(() => {
		$audio.updateWidth();
		timer();
	}, 1000 / SPEED);
};

$audio.bar.click((e) => {
	let targetRect = e.target.getBoundingClientRect();
	let mouseX = e.clientX - targetRect.left;

	$audio.selectTimeLine(mouseX);
});

$.click('.play-pause', (e) => {
	switch (e.attr('data-action')) {
		case 'play':
			$audio.playAction(e);
			break;
		case 'pause':
			$audio.pauseAction(e);
			break;
	}
});
