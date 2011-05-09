var drawBall = function(){
  ctx.fillStyle = ball.color;
  ctx.translate(ball.position.x,ball.position.y);
  ctx.beginPath();
  ctx.arc(0,0,ball.radius,0,Math.PI*2,true);
  ctx.fill();
  ctx.closePath();
}

var drawSlingShot = function(){
  ctx.beginPath();
  ctx.moveTo(ball.position.x,ball.position.y);
  ctx.lineTo(mouse.x,mouse.y);
  ctx.stroke();
  ctx.close;
}

var drawWall = function(){
  ctx.fillStyle = wall.color;
  ctx.fillRect(wall.position.x,wall.position.y,wall.width,wall.height);
}

var drawGap = function(){
  ctx.fillStyle = gap.color;
  ctx.fillRect(gap.position.x,gapVerticalPosition,gap.width,gap.height);
}