export default Audio = (VOLUME, SPEED) => {
	let self = document.querySelector('audio');

	self.bar = document.querySelector('.timer-bar');
	self.bar.click = (evt) => {
		self.bar.addEventListener('click', (e) => evt(e));
	};
	self.timeline = document.querySelector('.timer');
	self.volume = VOLUME;
	self.playbackRate = SPEED;

	self.playAction = (e) => {
		e.attr('data-action', 'pause');
		self.play();
	};

	self.pauseAction = (e) => {
		e.attr('data-action', 'play');
		self.pause();
	};

	let barWidth = self.bar.clientWidth;
	self.updateWidth = () => {
		self.width = (self.currentTime * barWidth) / self.duration;
		self.timeline.style.width = self.width + 'px';
	};
	self.selectTimeLine = (mouseX) => {
		self.currentTime = (mouseX * self.duration) / barWidth;
		self.updateWidth();
	};

	return self;
};
