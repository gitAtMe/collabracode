var getMousePosition = function(e){
  mouse.x = e.pageX - canvas.offsetLeft;
  mouse.y = e.pageY - canvas.offsetTop;
}

var mouseDown = function(e){
  if(e.which==1){
	getMousePosition(e);
	mouse.isDown	= true;
	ball.position.x =  mouse.x;
	ball.position.y =  mouse.y;
  }
}

var mouseUp = function(e){
  if(e.which==1){
	mouse.isDown	= false;
	ball.velocity.y = (ball.position.y - mouse.y)/10;
	ball.velocity.x = (ball.position.x - mouse.x)/10;
  }
}