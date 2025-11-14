import { logEvent } from './helper.js';
export function handleViewportChange() {
  const width = window.innerWidth;
  if (width < 700) {
    document.body.style.background = '#ffcccc'; // light red
    document.body.style.fontSize = '15px';
  } else if (width < 1000) {
    document.body.style.background = '#f0f8ff'; // light blue
    document.body.style.fontSize = '17px';
   } else {
    document.body.style.background = 'white';
    document.body.style.fontSize = '19px'; }
  logEvent(`Viewport resized: width=${width}px`); }
export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');
  sessionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('session')) {
      alert("You selected: " + e.target.textContent);
      logEvent(`User clicked on ${e.target.textContent}`);
    }
  }); }
export function setupAddSessionButton() {
  const button = document.getElementById('addSession');
  button.addEventListener('click', () => {
    const sessionsDiv = document.getElementById('sessions');
    const newSession = document.createElement('div');
    const newTime = prompt("Enter session time (e.g., 12:00):", "12:00");
    const newTitle = prompt("Enter session title:", "New Topic");
    if (newTime && newTitle) {
      newSession.classList.add('session');
      newSession.dataset.time = newTime;
      newSession.textContent = `${newTitle} - ${newTime}`;
      sessionsDiv.appendChild(newSession);
      logEvent(`New session added: ${newTitle} at ${newTime}`);
    }
  }); }
