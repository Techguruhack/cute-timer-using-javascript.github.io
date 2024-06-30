document.getElementById('mycute-start-button').addEventListener('click', function() {
    const mycuteInput = document.getElementById('mycute-timer-input').value;
    let mycuteTimeLeft = parseInt(mycuteInput);
    
    if (isNaN(mycuteTimeLeft) || mycuteTimeLeft <= 0) {
      alert('Please enter a valid number of seconds.');
      return;
    }
  
    const mycuteDisplay = document.getElementById('mycute-timer-display');
    const mycuteTimer = setInterval(function() {
      mycuteTimeLeft--;
      mycuteDisplay.textContent = mycuteFormatTime(mycuteTimeLeft);
      
      if (mycuteTimeLeft <= 0) {
        clearInterval(mycuteTimer);
        mycuteDisplay.textContent = "00:00";
        mycuteLaunchConfetti();
      }
    }, 1000);
  });
  
  function mycuteFormatTime(seconds) {
    const mycuteMinutes = Math.floor(seconds / 60);
    const mycuteRemainingSeconds = seconds % 60;
    return `${String(mycuteMinutes).padStart(2, '0')}:${String(mycuteRemainingSeconds).padStart(2, '0')}`;
  }
  
  function mycuteLaunchConfetti() {
    const mycuteConfettiCanvas = document.getElementById('mycute-confetti-canvas');
    const mycuteContext = mycuteConfettiCanvas.getContext('2d');
    const mycuteConfettiCount = 300;
    const mycuteConfettiColors = ['#FFC0CB', '#FFD700', '#00FF00', '#00FFFF', '#FF00FF'];
  
    let mycuteConfettis = [];
    for (let i = 0; i < mycuteConfettiCount; i++) {
      mycuteConfettis.push({
        x: Math.random() * mycuteConfettiCanvas.width,
        y: Math.random() * mycuteConfettiCanvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * mycuteConfettiCount,
        color: mycuteConfettiColors[Math.floor(Math.random() * mycuteConfettiColors.length)],
        tilt: Math.random() * 30 - 15,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
      });
    }
  
    function mycuteDrawConfetti() {
      mycuteContext.clearRect(0, 0, mycuteConfettiCanvas.width, mycuteConfettiCanvas.height);
      for (let i = 0; i < mycuteConfettiCount; i++) {
        const mycuteConfetti = mycuteConfettis[i];
        mycuteContext.beginPath();
        mycuteContext.lineWidth = mycuteConfetti.r;
        mycuteContext.strokeStyle = mycuteConfetti.color;
        mycuteContext.moveTo(mycuteConfetti.x + mycuteConfetti.tilt + mycuteConfetti.r / 4, mycuteConfetti.y);
        mycuteContext.lineTo(mycuteConfetti.x + mycuteConfetti.tilt, mycuteConfetti.y + mycuteConfetti.tilt + mycuteConfetti.r / 4);
        mycuteContext.stroke();
      }
  
      mycuteUpdateConfetti();
    }
  
    function mycuteUpdateConfetti() {
      for (let i = 0; i < mycuteConfettiCount; i++) {
        const mycuteConfetti = mycuteConfettis[i];
        mycuteConfetti.tiltAngle += mycuteConfetti.tiltAngleIncremental;
        mycuteConfetti.y += (Math.cos(0.03 * mycuteConfetti.d) + 3 + mycuteConfetti.r / 2) / 2;
        mycuteConfetti.x += Math.sin(0.03 * mycuteConfetti.d) * 2; // Speed up horizontal movement for more side-to-side motion
        mycuteConfetti.tilt = Math.sin(mycuteConfetti.tiltAngle) * 15;
  
        if (mycuteConfetti.y > mycuteConfettiCanvas.height || mycuteConfetti.x > mycuteConfettiCanvas.width) {
          mycuteConfettis[i] = { x: Math.random() * mycuteConfettiCanvas.width, y: -10, r: mycuteConfetti.r, d: mycuteConfetti.d, color: mycuteConfetti.color, tilt: mycuteConfetti.tilt, tiltAngleIncremental: mycuteConfetti.tiltAngleIncremental, tiltAngle: mycuteConfetti.tiltAngle };
        }
      }
    }
  
    mycuteConfettiCanvas.width = window.innerWidth;
    mycuteConfettiCanvas.height = window.innerHeight;
    setInterval(mycuteDrawConfetti, 20);
  }
  