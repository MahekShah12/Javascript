import { formatTime, logEvent } from './helper.js';

export function startCountdown(duration, display) {
  let time = duration;
  const timer = setInterval(() => {
    display.textContent = `Next session starts in ${formatTime(time)}`;
    if (time < 60) display.style.color = 'red';
    else display.style.color = 'black';
    time--;
    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Session Started!";
      logEvent("Countdown reached zero");
    }
  }, 1000);
}

export function highlightActiveSession() {
  const sessions = document.querySelectorAll('.session');
  const now = new Date();
  const currentHour = now.getHours();
  sessions.forEach(session => {
    const hour = parseInt(session.dataset.time.split(':')[0]);
    if (hour === currentHour) {
      session.classList.add('active');
      
    } else {
      session.classList.remove('active');
    }
  });
}
