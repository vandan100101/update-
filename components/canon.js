const GRAVITY = -9.8; // Earth gravity (m/s²)
const INITIAL_ANGLE = 45; // Launch angle in degrees
const INITIAL_SPEED = 10; // Launch speed (m/s)
const STEP = 0.05; // Simulation step in seconds

// Fire button event
const fireButton = document.querySelector("#fireButton");

fireButton.addEventListener("click", () => {
  fireCannonball(INITIAL_ANGLE, INITIAL_SPEED);
});

function fireCannonball(angle, speed) {
  const angleRad = (angle * Math.PI) / 180;
  const velocityX = -(speed * Math.cos(angleRad)); // Moving in negative X direction
  const velocityY = speed * Math.sin(angleRad);

  console.log(
    `Firing cannonball with velocityX: ${velocityX}, velocityY: ${velocityY}`
  );

  let time = 0;
  let x = 10.686; // Initial X position
  let y = 1.2; // Cannon height

  // Get reference to resultsText
  const resultsText = document.querySelector("#resultsText");

  // Create cannonball
  const cannonball = document.createElement("a-sphere");
  cannonball.setAttribute("position", `${x} ${y} 12.274`); // Set initial position
  cannonball.setAttribute("radius", "0.2");
  cannonball.setAttribute("color", "#000");
  cannonball.setAttribute("dynamic-body", "shape: sphere;");
  cannonball.setAttribute("velocity", `${velocityX} ${velocityY} 0`);

  document.querySelector("a-scene").appendChild(cannonball);

  // Simulate projectile motion
  const interval = setInterval(() => {
    time += STEP;
    x = 10.686 + velocityX * time; // Update X position
    y = 1.2 + velocityY * time + 0.5 * GRAVITY * time * time; // Update Y position

    // Stop when it hits the ground
    if (y <= 1) {
      clearInterval(interval);

      // Calculate range
      const range = Math.abs(x - 10.686).toFixed(2);

      // Update resultsText with range and speed
      resultsText.setAttribute(
        "value",
        `Range: ${range} m\nSpeed: ${speed} m/s`
      );

      console.log(`Range: ${range} m`);
      console.log(`Initial Speed: ${speed} m/s`);
      return;
    }

    // Update position
    cannonball.setAttribute("position", `${x} ${y} 12.274`);
  }, STEP * 1000); // Convert step to milliseconds
}
