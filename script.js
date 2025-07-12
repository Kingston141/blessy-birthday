// Add a floating hearts animation
document.addEventListener("DOMContentLoaded", () => {
  const emoji = ["💖", "🎉", "🎂", "✨", "👼"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating";
    heart.innerText = emoji[Math.floor(Math.random() * emoji.length)];
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }, 500);
});
