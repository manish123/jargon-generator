const phrases = [
  { text: "Let's leverage synergistic paradigms", meaning: "Let’s work together using combined methods to find solutions." },
  { text: "We need to disrupt the vertical", meaning: "We need to shake up the industry we operate in." },
  // add more
];


function generateJargon() {
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById('jargon').innerText = random;
}
