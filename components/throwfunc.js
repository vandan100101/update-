AFRAME.registerComponent("throwable", {
  init: function () {
    const el = this.el;

    // Add mouseup event listener
    el.addEventListener("mouseup", (e) => {
      const camera = document.querySelector("#camera");
      const cameraDirection = new THREE.Vector3();
      camera.object3D.getWorldDirection(cameraDirection); // Get camera's forward direction

      // Apply force to the sphere in the camera's direction
      const force = cameraDirection.multiplyScalar(10); // Adjust scalar for throw strength
      const position = el.getAttribute("position");

      el.body.applyForce(
        new CANNON.Vec3(force.x, force.y, force.z), // Force vector
        new CANNON.Vec3(position.x, position.y, position.z) // Sphere's position
      );
    });
  },
});
