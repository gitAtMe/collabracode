var physics = function(){
  //drag force: Fd = 1/2 * Cd * A * rho * v.v
  var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
  var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);

  //calc acceleration
  Fx = isNaN(Fx)?0:Fx;
  Fy = isNaN(Fy)?0:Fy;

  var ax = Fx / ball.mass;
  var ay = 9.81 + (Fy / ball.mass);

  //integrate to get velocity
  ball.velocity.x += ax*frameRate;
  ball.velocity.y += ay*frameRate;

  //integrate to get position
  ball.position.x += ball.velocity.x * frameRate * 100;
  ball.position.y += ball.velocity.y * frameRate * 100;
}