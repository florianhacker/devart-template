FH.SoundOscillatorView = function( type, frequency ){

	this.init();
};

FH.SoundOscillatorView.constructor = FH.SoundOscillatorView;
FH.SoundOscillatorView.prototype = Object.create( FH.AbstractView.prototype );


FH.SoundOscillatorView.prototype.init = function(soundSpectrum){	

	this.canvas = document.getElementById('myCanvas');
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;

	this.ctx = this.canvas.getContext('2d');

	this.view = document.createElement('div');
	this.view.className = "osc";

	this.arrowUp = document.createElement('span');
	this.arrowUp.className = "arrow-up";

	this.arrowDown = document.createElement('span');
	this.arrowDown.className = "arrow-down";

	this.arrowLeft = document.createElement('span');
	this.arrowLeft.className = "arrow-left";

	this.arrowRight = document.createElement('span');
	this.arrowRight.className = "arrow-right";

	this.view.appendChild(this.arrowUp);
	this.view.appendChild(this.arrowDown);
	this.view.appendChild(this.arrowLeft);
	this.view.appendChild(this.arrowRight);

	this.helper = 0;

	this.addEventListeners();
};


FH.SoundOscillatorView.prototype.addEventListeners = function(soundSpectrum){

	var _this = this;

	this.view.addEventListener('dblclick', function(e){
		e.stopPropagation();
		e.preventDefault();	

		_this.dispatchEvent( {type: 'double-click'} );	
	});

	this.arrowUp.addEventListener('click', function(e){
		_this.dispatchEvent( {type: 'change-octave-up'} );	
	});

	this.arrowDown.addEventListener('click', function(e){
		_this.dispatchEvent( {type: 'change-octave-down'} );	
	});

	this.arrowLeft.addEventListener('click', function(e){
		_this.dispatchEvent( {type: 'change-waveform-left'} );	
	});

	this.arrowRight.addEventListener('click', function(e){
		_this.dispatchEvent( {type: 'change-waveform-right'} );	
	});


	var hammertime = new Hammer( _this.view );
	
	hammertime.on("drag", function(ev) {

		var x = ev.gesture.center.pageX;
		var y = ev.gesture.center.pageY;

		_this.view.style.left = x + "px";
		_this.view.style.top = y + "px";

		_this.dispatchEvent( { type: 'oscillator-view-moving', position : { x : x, y : y }});

	});	
};

FH.SoundOscillatorView.prototype.addFilter = function(){
	
	this.filter = document.createElement('div');
	this.filter.className = "filter";
	this.filter.style.left = 100;
	this.filter.style.top = 100;

	document.body.appendChild(this.filter);

	var hammertime = new Hammer( this.filter );
	var _this = this;

	hammertime.on("drag", function(ev) {

		var x = ev.gesture.center.pageX;
		var y = ev.gesture.center.pageY;

		_this.filter.style.left = x + "px";
		_this.filter.style.top = y + "px";

		_this.dispatchEvent( { type: 'filter-view-moving', position : { x : x, y : y }});

	});	
};

FH.SoundOscillatorView.prototype.addModel = function(model){
	
	var _this = this;
	this.model = model;

	this.model.analyzer.addEventListener('sound-analayzed', function(data){

		if(data){
			_this.drawSpectrum(data.soundSpectrum);
		}
	});

};

FH.SoundOscillatorView.prototype.destroy = function(soundSpectrum){

	this.dispatchEvent( { type: 'oscillator-view-destroyed' });
};


FH.SoundOscillatorView.prototype.drawSpectrum = function(soundSpectrum){

	// var f = soundSpectrum;
	// var _this = this;

	// _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);

	// for ( var i = 0; i < (soundSpectrum.length); i++ ){
	// 	var value = soundSpectrum[i];
	// 	_this.ctx.fillRect(i*5,_this.canvas.height-value,3,_this.canvas.height);
	// }

	// var offset = this.canvas.width / soundSpectrum.length;
	// var x = 0;

	// _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
	// _this.ctx.moveTo( 0, 0);

	// _this.ctx.save();

	// for(var i = 0; i<soundSpectrum.length; i++){

	// 	_this.ctx.translate(x, 0);
	// 	_this.ctx.lineTo( 0, soundSpectrum[i]*10);

	// 	x+=offset;
 //   	}

	// _this.ctx.stroke();
	// _this.ctx.restore();


};






