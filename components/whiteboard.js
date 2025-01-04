let isPlaying = false; // Flag to track if the audio and animations are playing
let animationInterval; // Variable to store the animation interval
const audio = new Audio('assets/voice.mp3'); // Create a single audio instance

document.querySelector('#click-box').addEventListener('click', () => {
  const text1 = document.querySelector('#text1');
  const text2 = document.querySelector('#text2');
  const fallGuy = document.querySelector('#fall-guy-entity');
  const animations = ['FG_Emote_Zsnap_A', 'FG_Emote_Armthrow_A', 'CH_Fallguy_FG_emote_HappyClap']; // Add animation clips

  // If already playing, stop everything
  if (isPlaying) {
    isPlaying = false;
    audio.pause(); // Stop the audio
    audio.currentTime = 0; // Reset the audio to the beginning
    clearInterval(animationInterval); // Stop random animations
    fallGuy.setAttribute('animation-mixer', 'clip: FG_Idle_A; clampWhenFinished: true; crossFadeDuration: 1'); // Reset to idle
    return;
  }

  // If not playing, start the sequence
  isPlaying = true;

  // Toggle visibility of texts
  if (text1.getAttribute('visible')) {
    text1.setAttribute('visible', false);
    text2.setAttribute('visible', true);
  } else {
    text1.setAttribute('visible', true);
    text2.setAttribute('visible', false);
  }

  // Play the audio only if it's not already playing
  if (audio.paused) {
    audio.play();
  }

  // Start random animation sequence
  const randomAnimation = () => {
    const randomClip = animations[Math.floor(Math.random() * animations.length)];
    fallGuy.setAttribute('animation-mixer', `clip: ${randomClip}; clampWhenFinished: true; crossFadeDuration: 0.5`);
  };

  // Trigger an initial animation
  randomAnimation();

  // Change animation every 4 seconds while audio is playing
  animationInterval = setInterval(randomAnimation, 4000);

  // Stop random animations and reset to idle after audio ends
  audio.onended = () => {
    clearInterval(animationInterval); // Stop the interval
    fallGuy.setAttribute('animation-mixer', 'clip: FG_Idle_A; clampWhenFinished: true; crossFadeDuration: 1'); // Reset to idle
    isPlaying = false; // Reset the flag
  };
});
