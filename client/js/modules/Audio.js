export default Audio = (VOLUME, SPEED) => {
	let self = document.querySelector('audio');

	self.bar = document.querySelector('.timer-bar');
	self.bar.click = (evt) => {
		self.bar.addEventListener('click', (e) => evt(e));
	};
	self.timeline = document.querySelector('.timer');
	self.timeDisplay = {
		current: document.querySelector('.js-current-time'),
		total: document.querySelector('.js-total-time')
	};
	if (VOLUME) {
		self.volume = VOLUME;
	}
	if (SPEED) {
		self.playbackRate = SPEED;
	}

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

	self.updateDisplayTime = () => {
		let formattedTime = getFormattedTime(self);
		self.timeDisplay.current.textContent = formattedTime;
	};

	self.selectTimeLine = (mouseX) => {
		self.currentTime = (mouseX * self.duration) / barWidth;
		self.updateWidth();
	};

	return self;
};

function getFormattedTime(self) {
	let currentTime = Math.floor(self.currentTime);

	if (currentTime < 10) {
		currentTime = '00:0' + currentTime;
	} else if (currentTime < 60) {
		currentTime = '00:' + currentTime;
	} else if (currentTime < 600) {
		let minutes = Math.floor(currentTime / 60);
		let seconds = Math.floor(currentTime % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		currentTime = '0' + minutes + ':' + seconds;
	} else {
		let minutes = Math.floor(currentTime / 60);
		let seconds = Math.floor(currentTime % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		currentTime = minutes + ':' + seconds;
	}

	return currentTime;
}
