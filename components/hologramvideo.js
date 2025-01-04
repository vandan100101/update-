document.querySelector(".clickable").addEventListener("click", () => {
  const video = document.querySelector("#video1");

  console.log("Video 1 interactive box clicked!"); // Confirm interaction

  if (video.paused) {
    video
      .play()
      .then(() => {
        console.log("Video 1 is now playing.");
      })
      .catch((error) => {
        console.error("Video 1 play failed:", error);
      });
  } else {
    video.pause();
    console.log("Video 1 is paused.");
  }
});

document.querySelector(".clickable2").addEventListener("click", () => {
  const video2 = document.querySelector("#video2");

  console.log("Video 2 interactive box clicked!"); // Confirm interaction

  if (video2.paused) {
    video2
      .play()
      .then(() => {
        console.log("Video 2 is now playing.");
      })
      .catch((error) => {
        console.error("Video 2 play failed:", error);
      });
  } else {
    video2.pause();
    console.log("Video 2 is paused.");
  }
});

document.querySelector(".clickable3").addEventListener("click", () => {
  const video3 = document.querySelector("#video3");

  console.log("Video 3 interactive box clicked!"); // Confirm interaction

  if (video3.paused) {
    video3
      .play()
      .then(() => {
        console.log("Video 3 is now playing.");
      })
      .catch((error) => {
        console.error("Video 3 play failed:", error);
      });
  } else {
    video3.pause();
    console.log("Video 3 is paused.");
  }
});

AFRAME.registerComponent("follow-camera", {
  tick: function () {
    const camera = document.querySelector("#camera");
    const plane = this.el;

    // Get the camera's world position
    const cameraWorldPos = new THREE.Vector3();
    camera.object3D.getWorldPosition(cameraWorldPos);

    // Get the plane's world position
    const planeWorldPos = new THREE.Vector3();
    plane.object3D.getWorldPosition(planeWorldPos);

    // Calculate the direction vector from plane to camera
    const direction = cameraWorldPos.clone().sub(planeWorldPos).normalize();

    // Set the rotation to face the camera
    plane.object3D.lookAt(cameraWorldPos);
  },
});
