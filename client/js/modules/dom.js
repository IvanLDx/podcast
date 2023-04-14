import { loop } from './helpers.js';

function getElapsedTime(audio) {
	setInterval(() => {
		console.info(
			~~(audio.currentTime / 60) +
				':' +
				Math.floor(audio.currentTime % 60)
		);
	}, 1000);
}

export const $ = function $(name) {
	let selves;
	if (typeof name === 'object') {
		selves = name;
	} else {
		selves = document.querySelectorAll(name);
	}

	if (selves.length === 0) {
		console.trace(`$('${name}') doesn't exist.`);
	}

	selves.click = (evt) => {
		loop(selves, (self) => {
			self.addEventListener('click', () => {
				evt(self);
			});
		});
	};

	selves.on = (listener, evt) => {
		loop(selves, (self) => {
			self.addEventListener(listener, (e) => {
				evt(e);
			});
		});
	};

	selves.attr = (attr, val) => {
		loop(selves, (self) => {
			self.setAttribute(attr, val);
		});
	};

	selves.val = (val) => {
		loop(selves, (self) => {
			self.val(val);
		});
	};

	selves.addClass = (val) => {
		loop(selves, (self) => {
			self.addClass(val);
		});
	};

	selves.removeClass = (val) => {
		loop(selves, (self) => {
			self.removeClass(val);
		});
	};

	selves.loadAudio = (id) => {
		loop(selves, (self) => {
			self.src = `audio/asefemeridas/${id}.mp3`;
			let audio = self.parentElement;
			audio.load();
			audio.play();

			getElapsedTime(audio);
		});
	};

	selves.html = (val) => {
		loop(selves, (self) => {
			self.innerHTML = val;
		});
	};

	loop(selves, (self) => {
		$.selfFunctions(self);
	});

	return selves;
};

$.selfFunctions = (self) => {
	self.getID = () => self.dataset?.id;
	self.getAudioUrl = () => self.dataset?.season + '/' + self.dataset?.episode;
	self.html = (val) => (self.innerHTML = val);
	self.addClass = (val) => self.classList.add(val);
	self.removeClass = (val) => self.classList.remove(val);
	self.val = (val) => {
		if (typeof val === 'string') {
			self.value = val;
		} else {
			return self.value;
		}
	};
	self.find = (name) => {
		return $(self.querySelectorAll(name));
	};
	return self;
};

$.click = function (el, evt) {
	document.querySelector('body').addEventListener('click', (e) => {
		let list = e.target.closest(el);
		if (!list) return;
		$.selfFunctions(list);
		evt(list);
	});
};
