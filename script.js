const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let noClickCount = 0;
const maxClicks = 3; // change to 4 if you want

// When "No" is clicked
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount <= maxClicks) {
    const messages = [
      "Are you sure? 🥺",
      "Think again... 💔",
      "That hurts 😢",
      "Last chance 😏"
    ];
    alert(messages[noClickCount - 1]);
  }
});

// After enough clicks, button starts running
noBtn.addEventListener("mouseover", () => {
  if (noClickCount >= maxClicks) {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }
});

// YES button
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:Poppins;">
      <h1 style="color:#ff4d6d; font-family:Pacifico;">YAYYYY 😍❤️</h1>
      <p style="font-size:1.4rem; margin-top:20px;">
        You tried saying no... but destiny had other plans 💕<br><br>
        Thank you for being my Valentine 💖<br><br>
        I love you endlessly 😘
      </p>
    </div>
  `;
});
