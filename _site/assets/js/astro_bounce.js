/* Adapted from Microsoft's intermediate SVG animation course:

https://msdn.microsoft.com/en-us/library/gg193985(v=vs.85).aspx

*/

//-------------------------------------------------------------
// Goal: Move astro around space with outer box as colliding element.
//-------------------------------------------------------------

  // Contains the requestAnimationFrame() object.
  var requestAnimationFrameID;

  // Used to compute the required displacement value.
  var delay = 15;

  // Bounding wall selections.
  var spaceBox = document.getElementById("space-box");
  var spaceBoxDims = spaceBox.getBBox();

  // Create box around astronaut for testing collision detection coordinates.
  var svgElement = document.getElementById("astro-spinner");

  // Velocity:
  svgElement.vx = 50; // Move astro at a velocity of vx pixels per second in the x-direction.
  svgElement.vy = 20; // Move astro at a velocity of vy pixels per second in the y-direction.

  // Velocity for faster testing:
  // svgElement.vx = 500; // Move astro at a velocity of vx pixels per second in the x-direction.
  // svgElement.vy = 200; // Move astro at a velocity of vy pixels per second in the y-direction.

  // Call the doAnim() function.
  requestAnimationFrameID = window.requestAnimationFrame(doAnim);

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  /*
  "s2d" = "speed to displacement". This function returns the required
  displacement value for an object traveling at "s" pixels per second. This function assumes the following:

    * The parameter s is in pixels per second.
    * "constants.delay" is a valid global constant.
    * The SVG viewport is set up such that 1 user unit equals 1 pixel.
  */

  function s2d(s) {
    return (s / 1000) * delay; // Given "constants.delay", return the object's displacement such that it will travel at s pixels per second across the screen.
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  //  Returns true if astro has hit (or gone past) the left or the right wall; false otherwise.

  // Vertical wall collision according to window bounds (works when not attempting to make single-page application; breaks when trying to make astro responsive)
  // function verticalWallCollision() {
  //   return ((svgElement.x.baseVal.value <= 0) || (svgElement.x.baseVal.value >= window.innerWidth - svgElement.width.baseVal.value));
  // }

  // Vertical wall collision according to bounds of background gradient
  function verticalWallCollision() {
    return ((svgElement.x.baseVal.value <= 0) || (svgElement.x.baseVal.value + svgElement.width.baseVal.value >= spaceBoxDims.width));
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  //  Returns true if astro has hit (or gone past) the top or the bottom wall; false otherwise.

  // Horizontal wall collision according to window bounds (works when not attempting to make single-page application; breaks when trying to make astro responsive)
  // function horizontalWallCollision() {
  //   return ((svgElement.y.baseVal.value <= 0) || (svgElement.y.baseVal.value >= window.innerHeight - svgElement.height.baseVal.value));
  // }

  // Horizontal wall collision according to bounds of background gradient
  function horizontalWallCollision() {
    return ((svgElement.y.baseVal.value <= 0) || (svgElement.y.baseVal.value >= spaceBoxDims.height - svgElement.height.baseVal.value));
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  // function doAnim() {
  // 	// Move astro in the x-direction by vx.
  //   svgElement.x.baseVal.value += s2d(svgElement.vx);
  //   // Move astro in the y-direction by vy.
  //   svgElement.y.baseVal.value += s2d(svgElement.vy);
  //
  //   // Reverse the direction of the x-component of astro's velocity vector.
  //   if (verticalWallCollision())
  //     svgElement.vx *= -1;
  //   // Reverse the direction of the y-component of astro's velocity vector.
  //   if (horizontalWallCollision())
  //     svgElement.vy *= -1; // Reverse the direction of the y-component of astro's velocity vector.
  //
  //   // Continue calling the doAnim() function.
  //   requestAnimationFrameID = window.requestAnimationFrame(doAnim);
  // }
