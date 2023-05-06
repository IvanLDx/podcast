export default Audio = (VOLUME, SPEED) => {
	let self = document.querySelector('audio');

	self.bar = document.querySelector('.timer-bar');
	self.bar.click = (evt) => {
		self.bar.addEventListener('click', (e) => evt(e));
	};
	self.playerSrc = document.querySelector('.js-player-src');
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

	var super_load = self.load();
	self.load = () => {
		super_load;
		var waitForDataLoaded = setInterval(() => {
			if (self.readyState > 2) {
				self.setTotalTime();
				clearInterval(waitForDataLoaded);
			}
		}, 100);
	};

	self.playAction = (e) => {
		e.attr('data-action', 'pause');
		self.play();
	};

	self.setTotalTime = () => {
		self.timeDisplay.total.textContent = self.getFormattedTime(
			self.duration
		);
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

	self.getCurrentTime = (currentTime) => {
		let minutes = Math.floor(currentTime / 60);
		let seconds = Math.floor(currentTime % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		return minutes + ':' + seconds;
	};

	self.getFormattedTime = (time) => {
		let currentTime = Math.floor(time);

		if (currentTime < 10) {
			currentTime = '00:0' + currentTime;
		} else if (currentTime < 60) {
			currentTime = '00:' + currentTime;
		} else if (currentTime < 600) {
			currentTime = '0' + self.getCurrentTime(currentTime);
		} else {
			currentTime = self.getCurrentTime(currentTime);
		}

		return currentTime;
	};

	self.updateDisplayTime = () => {
		let formattedTime = self.getFormattedTime(self.currentTime);
		self.timeDisplay.current.textContent = formattedTime;
	};

	self.selectTimeLine = (mouseX) => {
		self.currentTime = (mouseX * self.duration) / barWidth;
		self.updateWidth();
		self.updateDisplayTime();
	};

	self.setEpisode = () => {
		var $audioContainer = document.querySelector('.js-audio-container');
		var currentEpisode = $audioContainer.getAttribute(
			'data-current-episode'
		);
		self.playerSrc.src = `audio/${currentEpisode}.mp3`;

		self.load();
	};

	return self;
};
