// A Little Place Made Just for You 💜
// You can personalize the messages in the reasons array below.

const floatingSky = document.querySelector("#floating-sky");
const envelopeButton = document.querySelector("#envelope-button");
const envelopeHint = document.querySelector("#envelope-hint");
const letterMessage = document.querySelector("#love-letter-message");
const drawReasonButton = document.querySelector("#draw-reason");
const reasonNote = document.querySelector("#reason-note");

// Decorative hearts and stars. These are text characters, not image files.
function createFloatingSpecks() {
  if (!floatingSky) return;
  const symbols = ["✦", "♡", "✧", "·", "♥"];
  const count = window.matchMedia("(max-width: 650px)").matches ? 18 : 30;

  for (let i = 0; i < count; i += 1) {
    const speck = document.createElement("span");
    speck.className = "sky-speck";
    speck.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    speck.style.left = `${Math.random() * 100}%`;
    speck.style.top = `${Math.random() * 100 + 20}%`;
    speck.style.fontSize = `${Math.random() * 12 + 9}px`;
    speck.style.animationDuration = `${Math.random() * 14 + 13}s`;
    speck.style.animationDelay = `${Math.random() * -24}s`;
    floatingSky.appendChild(speck);
  }
}
createFloatingSpecks();

// Open and close the envelope. The letter appears below it when opened.
envelopeButton.addEventListener("click", () => {
  const isOpen = envelopeButton.classList.toggle("open");
  envelopeButton.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    letterMessage.classList.remove("hidden");
    envelopeHint.textContent = "Your letter is open. Take your time reading it. 💜";
    window.setTimeout(() => {
      letterMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 250);
  } else {
    letterMessage.classList.add("hidden");
    envelopeHint.textContent = "Tap the envelope to open your letter ✨";
  }
});

// Edit or add your own reasons here. Keep each reason inside quotation marks.
const reasons = [
  "You make ordinary moments feel special.",
  "Your smile can make a difficult day feel lighter.",
  "I love the little things that make you uniquely you.",
  "You deserve kindness, patience, and a love that feels safe.",
  "You make me want to become a more thoughtful person.",
  "I love the way you can make me laugh.",
  "You are worth celebrating, even on days when you don't feel your best.",
  "Being able to share little moments with you means a lot to me.",
  "I admire the way you keep going, even when things are hard.",
  "You don't have to be perfect to be precious to me.",
  "I love learning new things about you.",
  "Your happiness matters to me.",
  "You bring a kind of warmth into my life that is hard to explain.",
  "I appreciate the time, effort, and care you give.",
  "If I could choose again, I'd still want to know you and choose you.",
  "You deserve to feel loved not just today, but every day."
];

let previousReasonIndex = -1;

drawReasonButton.addEventListener("click", () => {
  let nextIndex = Math.floor(Math.random() * reasons.length);

  // Avoid showing the exact same reason twice in a row.
  if (reasons.length > 1) {
    while (nextIndex === previousReasonIndex) {
      nextIndex = Math.floor(Math.random() * reasons.length);
    }
  }
  previousReasonIndex = nextIndex;

  reasonNote.innerHTML = `
    <span class="note-heart" aria-hidden="true">♥</span>
    <p>${reasons[nextIndex]}</p>
  `;
  reasonNote.animate(
    [{ opacity: 0.55, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 350, easing: "ease-out" }
  );
  drawReasonButton.innerHTML = 'Pick another little heart <span>♡</span>';
});
