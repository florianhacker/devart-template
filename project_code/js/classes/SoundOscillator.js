FH.SoundOscillator = (function(){

	function SoundOscillator( type, frequency ){
		
		this.type = type;
		this.frequency = frequency;

		this.init();
	}

	SoundOscillator.prototype.init = function(){	

		var context = new webkitAudioContext();
		oscillator = context.createOscillator();
		oscillator.type = this.type;
		oscillator.frequency.value = this.frequency; 
		oscillator.connect(context.destination); 
	}

	

	SoundOscillator.prototype.play = function(){

		oscillator.noteOn(0); 
	}

	return SoundOscillator;

})();