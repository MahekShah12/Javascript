export function startCountdown(duration, display) {
  let time = duration;
  const timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    display.textContent = `Next session starts in ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    time--;
    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Session Started!";
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