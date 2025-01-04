AFRAME.registerComponent("click-spawn", {
  schema: {
    ballTemplateId: { type: "string" }, // ID of the ball template
    spawnPosition: { type: "string" }, // Position to spawn the new ball
  },

  init: function () {
    const el = this.el; // 'el' refers to the element this component is attached to
    const scene = document.querySelector("a-scene");
    let isCooldown = false; // Flag to prevent multiple rapid clicks

    // Event listener for the click action
    el.addEventListener("click", () => {
      if (isCooldown) return; // Prevent rapid spawns

      // Retrieve the ball template using the provided ID
      const ballTemplate = document.querySelector(this.data.ballTemplateId);
      if (!ballTemplate) {
        console.error(
          `Error: ${this.data.ballTemplateId} not found in the DOM.`
        );
        return;
      }

      const newBall = ballTemplate.cloneNode(true); // Clone the ball template
      newBall.setAttribute("position", this.data.spawnPosition); // Set the spawn position
      newBall.setAttribute("visible", "true"); // Make the ball visible
      newBall.setAttribute("dynamic-body", "shape: sphere; sphereRadius: 0.05"); // Add physics
      newBall.setAttribute("grabbable", "maxGrabbers: 1"); // Make the ball grabbable
      newBall.setAttribute("hoverable", ""); // Enable hover interactions
      newBall.setAttribute("draggable", ""); // Enable dragging
      newBall.setAttribute("droppable", ""); // Allow dropping
      newBall.setAttribute("velocity", "0 0 0"); // Set initial velocity to 0

      scene.appendChild(newBall); // Add the new ball to the scene

      // Start cooldown to prevent rapid spawning
      isCooldown = true;
      setTimeout(() => {
        isCooldown = false; // Reset cooldown after 500ms
      }, 500);
    });
  },
});
