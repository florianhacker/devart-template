FH.SoundOscillatorView = function( type, frequency ){

	PIXI.DisplayObjectContainer.call( this );

	this.init();
};

FH.SoundOscillatorView.constructor = FH.SoundOscillatorView;
FH.SoundOscillatorView.prototype = Object.create( FH.AbstractView.prototype );


FH.SoundOscillatorView.prototype.init = function(soundSpectrum){	

	this.helper = 0;

	this.view = new PIXI.Graphics();
	this.view.setInteractive(true);

	this.view.setInteractive(this.view);
	this.initTouchGestures(this.view, 'osc');

	//this.drawSpectrum();


	// this.addChild(this.view);
	this.addEventListeners();
};


FH.SoundOscillatorView.prototype.addEventListeners = function(soundSpectrum){

	var _this = this;

	this.view.mousedown = this.view.touchstart = function(data){

		data.originalEvent.preventDefault();
		
		_this.data = data;
		_this.dragging = true;
	};

	this.view.mousemove = this.view.touchmove = function(data){

		if(_this.data && _this.dragging){
			var newPosition = _this.data.getLocalPosition(_this.view.parent);
			_this.view.position.x = newPosition.x;
			_this.view.position.y = newPosition.y;

			_this.dispatchEvent( { type: 'oscillator-view-moving', view : _this.view });
		}
	};

	this.view.mouseup = this.view.mouseup = function(data){
		
		_this.dragging = null;
	};
	
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

	var frequency = Math.floor(this.model.oscillator.frequency);
//	console.log(frequency)

	var frequencies = soundSpectrum;//[10,10,10,10,10,10,10, 10, 10, 10, 10, 10];
	var amount = (Math.PI*2)/(frequencies.length-1);//frequencies.length;    

	this.view.clear();
	this.view.beginFill(0xFF0000);
	this.view.lineStyle(1, 0xFF0000);

	this.helper+= frequency/1000;
	
	for (var i=0; i < frequencies.length; i++)
	{
		//var volume = 100 + frequencies[i]*0.09;
		var volume = 100 + ( Math.sin(this.helper) );
    	this.view.lineTo( volume*Math.cos(amount*i), volume*Math.sin(amount*i));
	}
	this.view.endFill();

	this.view.hitArea = new PIXI.Circle(0, 0, 100);
};






