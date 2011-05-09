var width = height = 400;
var canvas = ctx = false;

var frameRate  = 1/40;//sec
var frameDelay = frameRate * 1000;//ms

var loopTimer = false;

var mouse = {x:0,y:0,isDown:false};

var ballToWall = 'left';//'left', 'right', 'inGapGoingRight', 'inGapGoingLeft'

var gapVerticalPosition = 0;
var gapVerticalStep = 5;

var ball = {
  color:	  '#000',
  position:	  {x:width/2,y:0},
  velocity:	  {x:0,y:0},
  mass:		  0.1,
  radius:	  15,//1px = 1cm
  restitution:-0.7
};

var wall = {
  color:	'#999',
  position:	{x:width*0.8,y:0},
  width:	20,
  height:	height
};

var gap = {
  color:	'#FFF',
  position:	{x:wall.position.x,y:gapVerticalPosition},
  width:	wall.width,
  height:	height/5
};

//physics
var Cd	= 0.47;//dim
var rho	= 1.22;//kg/m^3
var A	= Math.PI * ball.radius * ball.radius / (10000);