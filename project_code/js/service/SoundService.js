FH.SOUNDSERVICE = {

	getSoundFilter : function(){
		
		var soundFilter = new FH.SoundFilter(0, 50);
		return soundFilter;
	},

	getOscillator : function(waveForm){

		var frequency = 20;
		var oscillator = new FH.SoundOscillator(waveForm, frequency);

		oscillator.value = Math.random();

		return oscillator;
	}
};