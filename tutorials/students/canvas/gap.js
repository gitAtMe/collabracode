//update gap's vertical position
var moveGap = function(){
  //if the gap is completely off the bottom of the canvas
  if(gapVerticalPosition>height)
	//reset the gap's vertical position to zero
	gapVerticalPosition = 0;
  //else (if the gap is not completely off the bottom of the canvas)
  else
	//update the gap's vertical position by the step value
	gapVerticalPosition += gapVerticalStep;
}

//check if ball is lined up with gap vertically
var ballVerticallyLinedUpWithGap = function(){
  //if the 
  if(
	//ball's top is lower than the top of the gap
	((ball.position.y - ball.radius) > gapVerticalPosition)
	//AND
	&&
	//ball's bottom is higher than the bottom of the gap
	((ball.position.y + ball.radius) < (gapVerticalPosition + gap.height))
  )
	//ball's vertical position is lined up with the gap's vertical position
	return true;
  //else (if the ball's vertical position is anywhere else) 
  else
	//ball's vertical position is not lined up with the gap's vertical position
	return false;
}