// Define the frequency of each piano key
const keyFrequency = {
	"C2": 65.41,
	"C#2": 69.30,
	"D2": 73.42,
	"D#2": 77.78,
	"E2": 82.41,
	"F2": 87.31,
	"F#2": 92.50,
	"G2": 98.00,
	"G#2": 103.83,
	"A2": 110.00,
	"A#2": 116.54,
	"B2": 123.47,
	"C3": 130.81,
	"C#3": 138.59,
	"D3": 146.83,
	"D#3": 155.56,
	"E3": 164.81,
	"F3": 174.61,
	"F#3": 185.00,
	"G3": 196.00,
	"G#3": 207.65,
	"A3": 220.00,
	"A#3": 233.08,
	"B3": 246.94,
	"C4": 261.63,
	"C#4": 277.18,
	"D4": 293.66,
	"D#4": 311.13,
	"E4": 329.63,
	"F4": 349.23,
	"F#4": 369.99,
	"G4": 392.00,
	"G#4": 415.30,
	"A4": 440.00,
	"A#4": 466.16,
	"B4": 493.88,
	"C5": 523.25,
	"C#5": 554.37,
	"D5": 587.33,
	"D#5": 622.25,
	"E5": 659.25,
	"F5": 698.46,
	"F#5": 739.99,
	"G5": 783.99,
	"G#5": 830.61,
	"A5": 880.00,
	"A#5": 932.33,
	"B5": 987.77,
	"C6": 1046.50
};

// Define the dimensions of each piano key
const keyDimensions = {
	"C2": { x: 0, width: 40, height: 160 },
	"C#2": { x: 35, width: 30, height: 100 },
	"D2": { x: 60, width: 40, height: 160 },
	"D#2": { x: 95, width: 30, height: 100 },
	"E2": { x: 120, width: 40, height: 160 },
	"F2": { x: 160, width: 40, height: 160 },
	"F#2": { x: 195, width: 30, height: 100 },
	"G2": { x: 220, width: 40, height: 160 },
	"G#2": { x: 255, width: 30, height: 100 },
	"A2": { x: 280, width: 40, height: 160 },
	"A#2": { x: 315, width: 30, height: 100 },
	"B2": { x: 340, width: 40, height: 160 },
	"C3": { x: 380, width: 40, height: 160 },
	"C#3": { x: 415, width: 30, height: 100 },
	"D3": { x: 440, width: 40, height: 160 },
	"D#3": { x: 475, width: 30, height: 100 },
	"E3": { x: 500, width: 40, height: 160 },
	"F3": { x: 540, width: 40, height: 160 },
	"F#3": { x: 575, width: 30, height: 100 },
	"G3": { x: 600, width: 40, height: 160 },
	"G#3": { x: 635, width: 30, height: 100 },
	"A3": { x: 660, width: 40, height: 160 },
	"A#3": { x: 695, width: 30, height: 100 },
	"B3": { x: 720, width: 40, height: 160 },
	"C4": { x: 760, width: 40, height: 160 },
	"C#4": { x: 795, width: 30, height: 100 },
	"D4": { x: 820, width: 40, height: 160 },
	"D#4": { x: 855, width: 30, height: 100 },
	"E4": { x: 880, width: 40, height: 160 },
	"F4": { x: 920, width: 40, height: 160 },
	"F#4": { x: 955, width: 30, height: 100 },
	"G4": { x: 980, width: 40, height: 160 },
	"G#4": { x: 1015, width: 30, height: 100 },
	"A4": { x: 1040, width: 40, height: 160 },
	"A#4": { x: 1075, width: 30, height: 100 },
	"B4": { x: 1100, width: 40, height: 160 },
	"C5": { x: 1140, width: 40, height: 160 },
	"C#5": { x: 1175, width: 30, height: 100 },
	"D#5": { x: 1210, width: 30, height: 100 },
	"E5": { x: 1240, width: 40, height: 160 },
	"F5": { x: 1280, width: 40, height: 160 },
	"F#5": { x: 1315, width: 30, height: 100 },
	"G5": { x: 1340, width: 40, height: 160 },
	"G#5": { x: 1375, width: 30, height: 100 },
	"A5": { x: 1400, width: 40, height: 160 },
	"A#5": { x: 1435, width: 30, height: 100 },
	"B5": { x: 1460, width: 40, height: 160 },
	"C6": { x: 1500, width: 40, height: 160 }
};

// Create a function to get the key based on the position of the mouse click
function getKeyFromMouseClick(x, y) {
for (let key in keyDimensions) {
let keyX = keyDimensions[key].x;
let keyWidth = keyDimensions[key].width;
let keyHeight = keyDimensions[key].height;
if (x >= keyX && x <= keyX + keyWidth && y >= 0 && y <= keyHeight) {
return key;
}
}
return null;
}

// Add an event listener to the body to detect mouse clicks
document.body.addEventListener("mousedown", function(event) {
let key = getKeyFromMouseClick(event.clientX, event.clientY);
if (key) {
let audio = new Audio(key + ".mp3");
audio.play();
}
});
