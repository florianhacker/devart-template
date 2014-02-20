FH.AbstractView = function(width, height){

};

FH.AbstractView.prototype.initTouchGestures = function(displayObject, name){

	console.log(displayObject, name)
	var startPosition = null;
	var _this = this;

	// displayObject.click = function(e){
	// 	console.log("click", e)
	// }

	displayObject.mousedown = displayObject.touchstart = function(data){

		data.originalEvent.stopPropagation();
		data.originalEvent.preventDefault();

		startPosition = data.global.clone();
	};

	displayObject.mouseup = displayObject.mouseup = function(data){

		console.log( data )
		
		data.originalEvent.stopPropagation();
		data.originalEvent.preventDefault();

		if( startPosition.x === data.global.x && startPosition.y === data.global.y){

			console.log("start:", _this.timer);

			if (_this.timer){
				// double click
				clearTimeout(_this.timer);	
				_this.timer = null;
				_this.dispatchEvent( { type: 'fh-item-double-click' });
			} 
			else{	
				_this.timer = setTimeout(function() { 
					_this.timer = null;
					_this.dispatchEvent( { type: 'fh-item-single-click' });
				}, 250);
			}
		}
	};
};

EventDispatcher.prototype.apply( FH.AbstractView.prototype );