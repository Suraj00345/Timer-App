// get a reference to the "activeTimers" elements in the HTML
const activeTimers = document.getElementById("activeTimers");
// Display the initial "You have no timers currently!" text
displayNoTimersText();
// Get a reference to the 'startTimer' button in the HTML
const startTimerButton = document.getElementById('startTimer');
// Initialize a flag to track whether a timer is currently active
let isTimerActive = false;
// Add a click event listener to the 'Start New Timer' button