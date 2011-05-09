//three possible collisions: bottom, left, and right walls; no top
var canvasCollision = function(){
  //canvas floor
  if(ball.position.y > (height - ball.radius)){
	ball.velocity.y *= ball.restitution;
	ball.position.y = height - ball.radius;
  }

  //canvas right wall
  if(ball.position.x > (width - ball.radius)){
	ball.velocity.x *= ball.restitution;
	ball.position.x = width - ball.radius;
  }

  //canvas left wall
  if(ball.position.x < ball.radius){
	ball.velocity.x *= ball.restitution;
	ball.position.x = ball.radius;
  }
}

//5 states: ball is left & colliding, right & colliding, in gap, left & not colliding, right & not colliding
var wallCollision = function(){
  //if the ball is
  if(
	//to the left of the wall (per last frame)
  	ballToWall=='left'
	//AND
  	&&
	//colliding with the left side of the wall
  	(ball.position.x > (wall.position.x - ball.radius))
	//AND
  	&&
	//not lined up with the gap's vertical position
	!ballVerticallyLinedUpWithGap()
  ){
	//update ball's velocity and position
	ball.velocity.x *= ball.restitution;
	ball.position.x = wall.position.x - ball.radius;

	//blue
	wall.color = '#00F';
  }
  //else if the ball is
  else if(
	//to the right of the wall (per last frame)
  	ballToWall=='right'
	//AND
  	&&
	//colliding with the right side of the wall
	(ball.position.x < (wall.position.x + wall.width + ball.radius))
	//AND
  	&&
	//not lined up with the gap's vertical position
	!ballVerticallyLinedUpWithGap()
  ){
	//update ball's velocity and position
	ball.velocity.x *= ball.restitution;
	ball.position.x = wall.position.x + wall.width + ball.radius;

	//green
	wall.color = '#0F0';
  }
  //else if the ball is
  else if(
	//colliding with the left side of the wall
  	(ball.position.x > (wall.position.x - ball.radius))
	//AND
  	&&
	//colliding with the right side of the wall
	(ball.position.x < (wall.position.x + wall.width + ball.radius))
	//AND
  	&&
	//lined up with the gap's vertical position
	ballVerticallyLinedUpWithGap()
  ){
	//if the ball was to the left of the wall
  	if(ballToWall=='left')
	  //the ball is in the gap going right 
	  ballToWall = 'inGapGoingRight';
	//else if the ball was to the right of the wall
  	else if(ballToWall=='right')
	  //the ball is in the gap going left 
	  ballToWall = 'inGapGoingLeft';

	//red
	wall.color = '#F00';
  }
  //else if the ball
  else if(
	//was in the gap and going right (per last frame)
  	ballToWall=='inGapGoingRight'
	//AND
  	&&
	//is to the right of the wall
	(ball.position.x >= (wall.position.x + wall.width + ball.radius))
  ){
	//ball is right of the wall
  	ballToWall = 'right';

	//grey
	wall.color = '#999';
  }
  //else if the ball
  else if(
	//was in the gap and going left (per last frame)
  	ballToWall=='inGapGoingLeft'
	//AND
  	&&
	//is to the left of the wall
	(ball.position.x <= (wall.position.x - ball.radius))
  ){
	//ball is left of the wall
  	ballToWall = 'left';

	//grey
	wall.color = '#999';
  }
}