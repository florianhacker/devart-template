FH.SoundOscillatorView = function( type, frequency ){

	PIXI.DisplayObjectContainer.call( this );

	this.init();
};

FH.SoundOscillatorView.constructor = FH.SoundOscillatorView;
FH.SoundOscillatorView.prototype = Object.create( FH.AbstractView.prototype );


FH.SoundOscillatorView.prototype.init = function(soundSpectrum){	

	this.view = new PIXI.Graphics();
	this.view.setInteractive(true);

	this.view.setInteractive(this.view);
	this.initTouchGestures(this.view, 'osc');

	this.drawSpectrum();


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

FH.SoundOscillatorView.prototype.destroy = function(soundSpectrum){
	this.dispatchEvent( { type: 'oscillator-view-destroyed' });
};


FH.SoundOscillatorView.prototype.drawSpectrum = function(soundSpectrum){

	this.view.beginFill(0xFF3300);
	this.view.drawCircle(0, 0, 40);

	this.view.hitArea = new PIXI.Circle(0, 0, 40);
};






