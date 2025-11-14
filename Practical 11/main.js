import { startCountdown, highlightActiveSession } from './timer.js';
import { handleViewportChange, addDynamicSessions, setupAddSessionButton } from './ui.js';

const countdownDisplay = document.getElementById('countdown');
startCountdown(300, countdownDisplay);

setInterval(highlightActiveSession, 60000);
highlightActiveSession();

window.addEventListener('resize', handleViewportChange);
handleViewportChange(); 

addDynamicSessions();
setupAddSessionButton();
