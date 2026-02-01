const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:Poppins;">
      <h1 style="color:#ff4d6d; font-family:Pacifico;">YAYYYY 😍❤️</h1>
      <p style="font-size:1.4rem; margin-top:20px;">
        You just made me the happiest person alive 💕<br><br>
        I can't wait to celebrate this Valentine with you 💖<br><br>
        I love you forever 😘
      </p>
    </div>
  `;
});
