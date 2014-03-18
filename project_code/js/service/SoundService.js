FH.SOUNDSERVICE = {

	getSoundFilter : function(filterType, cutOffFrequency){

		console.log("getSoundFilter", filterType, cutOffFrequency);

		var soundFilter = new FH.SoundFilter(filterType, cutOffFrequency);
		return soundFilter;
	},

	getOscillator : function(waveForm, frequency){

		console.log("getOscillator", waveForm, frequency);

		var oscillator = new FH.SoundOscillator(waveForm, frequency);

		oscillator.value = waveForm;

		return oscillator;
	}
};