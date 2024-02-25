// List of names to cycle through
const names = ["SAM 👋", "A DESIGNER 🎨🖌️", "A DEVELOPER 🧑‍💻"];

// Delay between changing names (in milliseconds)
const delay = 2000; // 2 seconds

let currentIndex = 0;

// Function to change the name
function changeName() {
  const callSign = document.getElementById("callSign");
  const currentName = callSign.textContent;
  const nextName = names[currentIndex];

  // Fade out the current name
  callSign.style.opacity = 0;

  // After a short delay, change the name and fade it back in
  setTimeout(() => {
    callSign.textContent = nextName;
    callSign.style.opacity = 1;
  }, delay / 2); // Half the delay for smoother transition

  // Update the index for the next name
  currentIndex = (currentIndex + 1) % names.length;
}

// Change the name periodically
setInterval(changeName, delay);
