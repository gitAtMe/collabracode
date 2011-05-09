var loop = function(){
  //if not mouse down
  if(!mouse.isDown)
	//do ball physics
	physics();

  //update gap's vertical position
  moveGap();

  //canvas and wall collision checks
  canvasCollision();
  wallCollision();

  //clear the canvas and save the state
  ctx.clearRect(0,0,width,height);
  ctx.save();

  //update the wall, the gap, and the ball
  drawWall();
  drawGap();
  drawBall();

  //restore the cleared canvas
  ctx.restore();

  //if mouse down
  if(mouse.isDown)
	//update the sling shot
	drawSlingShot();
}