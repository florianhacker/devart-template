var FH = FH || {};

function init(){

	var oscillator = new FH.SoundOscillator(0, 200);
	oscillator.play();

	var textToSpeech = new FH.TextToSpeech();
	setInterval(function(){
		textToSpeech.speak('The sound of silence');
	}, 3000);
}