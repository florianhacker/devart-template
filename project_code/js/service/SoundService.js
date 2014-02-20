FH.SOUNDSERVICE = {

	getSoundFilter : function(){
		
		var soundFilter = new FH.SoundFilter(0, 50);
		return soundFilter;
	},

	getOscillator : function(){

		var frequency = 200;
		var waveForm = 1;
		var oscillator = new FH.SoundOscillator(waveForm, frequency);

		oscillator.value = Math.random();

		return oscillator;
	}
};