AFRAME.registerComponent('drag-move', {
  init: function () {
    const ball = this.el;
    let isDragging = false;

    ball.addEventListener('mousedown', () => {
      isDragging = true;
      // Disable physics during dragging
      ball.removeAttribute('dynamic-body');
    });

    window.addEventListener('mousemove', (event) => {
      if (isDragging) {
        // Map cursor position to the scene
        const cursor = document.querySelector('a-camera').components.cursor.raycaster.ray.origin;
        ball.setAttribute('position', `${cursor.x} ${cursor.y} ${cursor.z}`);
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        // Re-enable physics after releasing the ball
        ball.setAttribute('dynamic-body', 'sphereRadius: 0.2');
      }
    });
  }
});

// Attach the drag-move component to the ball
document.querySelector('#ball').setAttribute('drag-move', '');