// Attach the 'click-spawn' component to the first invisible box and specify the ball template and spawn position
document.querySelector("#poff-box-1").setAttribute("click-spawn", {
  ballTemplateId: "#ball-template-1", // Use the first ball template
  spawnPosition: "11.634 1.525 2.991", // Set a unique spawn position for the first box
});

// Attach the 'click-spawn' component to the second invisible box with different settings
document.querySelector("#poff-box-2").setAttribute("click-spawn", {
  ballTemplateId: "#ball-template-2", // Use the second ball template
  spawnPosition: "11.099 1.863 -5.198", // Set a unique spawn position for the second box
});
