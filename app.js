const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const qScreen = document.getElementById("qScreen");
const ackScreen = document.getElementById("ackScreen");

// Desktop cursor escape
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const dist = Math.hypot(e.clientX - x, e.clientY - y);

  if (dist < 100) {
    noBtn.style.left = Math.random() * (window.innerWidth - 90) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  }
});

// Mobile rapid random movement
if (/Mobi|Android/i.test(navigator.userAgent)) {
  setInterval(() => {
    noBtn.style.left = Math.random() * (window.innerWidth - 90) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  }, 70);
}

// YES click → next screen
yesBtn?.addEventListener("click", () => {
  qScreen.style.display = "none";
  ackScreen.style.display = "block";
});
