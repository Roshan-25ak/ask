import React, { useEffect } from "react";

export default function QuestionScreen({ onYes }) {
  useEffect(() => {
    const noBtn = document.getElementById("noBtn");
    if (!noBtn) return;

    const runAway = (e) => {
      const rect = noBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - x, e.clientY - y);

      if (dist < 100) {
        noBtn.style.left = Math.random() * (window.innerWidth - 90) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
      }
    };

    document.addEventListener("mousemove", runAway);

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const mobileRun = setInterval(() => {
        noBtn.style.left = Math.random() * (window.innerWidth - 90) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
      }, 70);
      return () => clearInterval(mobileRun);
    }

    return () => document.removeEventListener("mousemove", runAway);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white text-center">
      <div id="qScreen">
        <h1 className="text-3xl font-bold mb-6">Are you mad? 🤨</h1>

        <button
          onClick={onYes}
          className="bg-green-500 text-black"
          id="yesBtn"
        >
          YES ✔
        </button>

        <button id="noBtn">NO ❌</button>
      </div>
    </div>
  );
}
