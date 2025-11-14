export function handleViewportChange() {
  if (window.innerWidth < 600) {
    document.body.style.background = '#f0f8ff';
  } else {
    document.body.style.background = 'white';
  }
}

export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');
  sessionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('session')) {
      alert("You selected: " + e.target.textContent);
    }
  });
}