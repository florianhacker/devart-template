FH.SoundOscillatorController = function(view){

	this.init(view);
};

FH.SoundOscillatorController.prototype.init = function(view){	

	// vars
	this.oscillatorIndex = 2;
	this.octaveIndex = 1;
	this.filterIndex = 0;
	this.filters = [
		"lowpass",
		"highpass",
		"bandpass",
		"lowshelf",
		"highshelf",
		"peaking",
		"notch",
		"allpass"
	];

	this.filterCutoffFrequency = 40;

	this.octaves = [ 20, 40, 80, 160,  320, 640, 1280, 2560, 5120, 10240, 20480 ];

	// init
	this.model = new FH.SoundOscillatorModel( 	this.oscillatorIndex, 
												20, 
												this.filterIndex, 
												this.filterCutoffFrequency);

	this.view = view;
	this.view.addModel(this.model);

	this.addEventListeners();
};

FH.SoundOscillatorController.prototype.addEventListeners = function(){	

	var _this = this;

	this.model.analyzer.addEventListener('sound-analayzed', function(data){
		
	});	

	/*****
		OSCILLATOR BEHAVIOUR
	*/
	this.view.addEventListener("change-waveform-left", function(e){
		
		if(_this.oscillatorIndex < 3) _this.oscillatorIndex++;
		_this.model.oscillator.waveform = _this.oscillatorIndex;
	});

	this.view.addEventListener("change-waveform-right", function(e){

		if(_this.oscillatorIndex > 1) _this.oscillatorIndex--;
		_this.model.oscillator.waveform = _this.oscillatorIndex;
	});

	this.view.addEventListener("change-octave-up", function(e){
		
		if(_this.octaveIndex < 10){
			
			_this.model.oscillator.frequency*=2;;
			_this.octaveIndex++;
		} 
	});

	this.view.addEventListener("change-octave-down", function(e){

		if(_this.octaveIndex > 1){

			_this.model.oscillator.frequency/=2;
			_this.octaveIndex--;
		} 
	});

	this.view.addEventListener("oscillator-view-moving", function(e){
		
		var oscillatorFrequency = _this.octaves[_this.octaveIndex-1] + _this.octaves[_this.octaveIndex] * (e.position.y/window.innerHeight);
		_this.model.oscillator.frequency = oscillatorFrequency;
	});

	this.view.addEventListener("double-click", function(e){

		if(!_this.view.filter){

			_this.view.addFilter();
		}
	});


	/******
		FILTER BEHAVIOUR
	*/
	this.view.addEventListener("filter-view-moving", function(e){
		
		var cutoffFilterFrequency = 20000 * (e.position.y/window.innerHeight);
		_this.model.filter.cutOffFrequency = cutoffFilterFrequency;
	});


	this.view.addEventListener("filter-arrow-up-clicked", function(e){
		
		console.log("filter up clicked")
	});


	this.view.addEventListener("filter-arrow-right-clicked", function(e){
		
		if(_this.filterIndex < _this.filters.length-1){

			_this.filterIndex++;	
		} 

		_this.model.filter.filterType = _this.filters[ _this.filterIndex ];
	});


	this.view.addEventListener("filter-arrow-down-clicked", function(e){
	
		console.log("filter down clicked");
		_this.model.filter.intensity = Math.random()*40;
	});


	this.view.addEventListener("filter-arrow-left-clicked", function(e){

		
		if(_this.filterIndex > 0){

			_this.filterIndex--;	
		} 

		_this.model.filter.filterType = _this.filters[ _this.filterIndex ];


		console.log("filter left clicked")
	});


};