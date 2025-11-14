export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

export function logEvent(message) {
  console.log(`[Event Log] ${new Date().toLocaleTimeString()}: ${message}`);
}