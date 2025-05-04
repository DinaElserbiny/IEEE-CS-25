function updateCountdown() {
    const target = new Date("May 25, 2025 09:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;
  
    if (diff <= 0) {
      document.getElementById("countdown").innerText = "Time is up!";
      clearInterval(interval);
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("countdown").innerHTML = `
      <div class="unit">${days} <div class="label">Days</div></div>
      <div class="unit">${hours} <div class="label">Hours</div></div>
      <div class="unit">${minutes} <div class="label">Minutes</div></div>
      <div class="unit">${seconds} <div class="label">Seconds</div></div>
    `;
  }
  
  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
  