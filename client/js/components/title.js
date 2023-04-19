import { chars } from './chars.js';

const cv = document.querySelector('.js-cv-title');
const ctx = cv.getContext('2d');
cv.width = 347;
cv.height = 40;

const charGrid = function () {
	this.w = 7;
	this.h = 8;
	this.dot = { size: 2 };
	this.paint = (phrase) => {
		ctx.clearRect(0, 0, cv.width, cv.height);
		ctx.fillStyle = '#da3';
		for (let i = 0; i < phrase.length; i++) {
			let key = phrase[i];
			this.char = chars[key];
			if (this.char) {
				this.fillCharBox(i);
			}
		}
	};
	this.fillCharBox = (i) => {
		for (let r = 0; r < this.h; r++) {
			for (let c = 0; c < this.w; c++) {
				if (this.char[r * this.w + c]) {
					ctx.fillRect(
						i * this.dot.size +
							i * this.w * this.dot.size +
							c * this.dot.size +
							c +
							this.w * i +
							this.dot.size,
						r * this.dot.size + r,
						this.dot.size,
						this.dot.size
					);
				}
			}
		}
	};
};

const grid = new charGrid();

export const title = {
	paint: (phrase) => {
		grid.paint(phrase);
	}
};
