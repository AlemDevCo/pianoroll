var audio = document.getElementById("myAudio");
var playSoundBtn = document.getElementById("playSoundBtn");

playSoundBtn.addEventListener("click", function() {
	audio.currentTime = 0; // This resets the audio to the beginning before playing
	audio.play();
});
