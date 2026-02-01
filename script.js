const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let noClickCount = 0;
const maxClicks = 3;

// NO button logic
noBtn.addEventListener("click", () => {
  noClickCount++;

  const messages = [
    "Are you sure? 🥺",
    "Think again 💔",
    "That hurts 😢"
  ];

  if (noClickCount <= maxClicks) {
    alert(messages[noClickCount - 1]);
  }

  if (noClickCount === maxClicks) {
    noBtn.innerText = "You can't catch me 😜";
  }
});

// Runaway after limit
noBtn.addEventListener("mouseover", () => {
  if (noClickCount >= maxClicks) {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// YES button
yesBtn.addEventListener("click", () => {
  music.play();

  setInterval(createHeart, 300);

  document.body.innerHTML = `
    <div style="text-align:center; padding:40px; font-family:Poppins;">
      <h1 style="color:#ff4d6d; font-family:Pacifico;">YAYYYY 😍❤️</h1>

      <img src="love.png" 
           alt="Cute Love Image" 
           style="max-width:300px; margin:25px auto; display:block;">

      <p style="font-size:1.4rem;">
        You + Me = Forever 💕<br><br>
        Happy Valentine’s Day my love 💖<br><br>
        I’m so lucky to have you 😘
      </p>
    </div>
  `;
});

