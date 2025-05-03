const phrases = [
  "Let's leverage synergistic paradigms to ideate scalable solutions.",
  "We need to disrupt the vertical to pivot our core competencies.",
  "Let's circle back and touch base offline.",
  "We're driving innovation through proactive alignment.",
  "Let's empower stakeholders with out-of-the-box thinking.",
  "Time to deep-dive into the granular data.",
  "Let's move the needle by streamlining KPIs.",
  "We must think outside the box to maximize ROI."
];

function generateJargon() {
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById('jargon').innerText = random;
}
