FH.SOUNDSERVICE = {

	getSoundFilter : function(){
		
		var soundFilter = new FH.SoundFilter(0, 50);
		return soundFilter;
	},

	getOscillator : function(waveForm, frequency){

		console.log("getOscillator", waveForm, frequency)
		var oscillator = new FH.SoundOscillator(waveForm, frequency);

		oscillator.value = waveForm;

		return oscillator;
	}
};