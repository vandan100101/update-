AFRAME.registerComponent('hover-animation', {
  init: function () {
    const el = this.el; // The entity with the component
    let timeout; // Variable to store the timeout ID

    // Listen for mouseenter
    el.addEventListener('mouseenter', () => {
      console.log('Hover started');
      // Play hover animation immediately
      el.setAttribute('animation-mixer', 'clip: FG_Emote_Wave_A; clampWhenFinished: true');
      // Clear any existing timeout to avoid premature idle animation
      if (timeout) clearTimeout(timeout);
    });

    // Listen for mouseleave
    el.addEventListener('mouseleave', () => {
      console.log('Hover ended');
      // Set a timeout to transition back to idle animation after a delay
      timeout = setTimeout(() => {
        console.log('Back to idle');
        el.setAttribute('animation-mixer', 'clip: FG_Idle_A; clampWhenFinished: true');
      }, 1250); 
    });
  }
});
