const colorMap = {
	"Black": "\x1b[30m",
	"Red": "\x1b[31m",
	"Green": "\x1b[32m",
	"Yellow": "\x1b[33m",
	"Blue": "\x1b[34m",
	"Magenta": "\x1b[35m",
	"Cyan": "\x1b[36m",
	"White": "\x1b[37m"
}

let colors = (function() {
	let result = [];
	Object.keys(colorMap).forEach((key) => {
		result.push(colorMap[key]);
	});
	return result
})();

function pickRandomColor() {
	let index = parseInt(Math.random() * colors.length);
	return colors[index];
}

function colorLog(...args) {
	let color = pickRandomColor();
	console.log(color, ...args);
}

// let words = ['hellow', 'hhha','sdfsfs','s']
// colorLog(...words)

module.exports = {
	colorLog
}
