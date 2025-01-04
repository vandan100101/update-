function updateDateTime() {
  const now = new Date();  // Get current date and time
  const dateStr = now.toLocaleString();  // Convert to a localized string (e.g., "12/5/2024, 2:30:45 PM")
  
  // Find the text element by ID
  const textElement = document.querySelector('#dateTimeText');
  
  // Update the value of the text element
  textElement.setAttribute('value', dateStr);
}

// Call the updateDateTime function every 1000ms (1 second)
setInterval(updateDateTime, 1000);