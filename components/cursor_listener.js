// Define the cursor-listener component
AFRAME.registerComponent("cursor-listener", {
  init: function () {
    this.el.addEventListener("click", (evt) => {
      console.log(`${this.el.id || "Entity"} clicked!`);

      // Perform actions based on the clicked button's ID
      switch (this.el.id) {
        case "start-button":
          alert("Start button clicked!");
          break;
        case "settings-button":
          alert("Settings button clicked!");
          break;
        case "exit-button":
          alert("Exit button clicked!");
          break;
      }
    });
  },
});
