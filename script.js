const phrases = [
  { text: "Let's leverage synergistic paradigms", meaning: "Let’s work together using combined methods to find solutions." },
  { text: "We need to disrupt the vertical", meaning: "We need to shake up the industry we operate in." },
  { text: "Circle back on that", meaning: "We’ll discuss that later." },
  { text: "Take this offline", meaning: "Let’s discuss this privately, outside the current meeting." },
  { text: "Low-hanging fruit", meaning: "The easiest opportunities to achieve quick wins." },
  { text: "Move the needle", meaning: "Make a noticeable difference in performance." },
  { text: "Boil the ocean", meaning: "Trying to do too much at once; overly ambitious." },
  { text: "Touch base", meaning: "Check in with someone." },
  { text: "Ping me", meaning: "Send me a message." },
  { text: "Ideate new solutions", meaning: "Come up with new ideas." },
  { text: "Take ownership", meaning: "Be responsible for something." },
  { text: "Pivot strategy", meaning: "Change the business approach." },
  { text: "Quick win", meaning: "A small, easy success." },
  { text: "Deep dive", meaning: "A detailed analysis." },
  { text: "Bandwidth issue", meaning: "Limited time or resources." },
  { text: "Put a pin in it", meaning: "Postpone the discussion." },
  { text: "Out of pocket", meaning: "Unavailable or unreachable." },
  { text: "Align on priorities", meaning: "Agree on what’s most important." },
  { text: "Run it up the flagpole", meaning: "Test the idea to see if people like it." },
  { text: "Table that discussion", meaning: "Postpone or stop discussing that topic." },
  { text: "Game changer", meaning: "An idea or product that significantly shifts the status quo." },
  { text: "Growth hacking", meaning: "Using creative methods to achieve rapid growth." },
  { text: "Bleeding edge", meaning: "The most advanced, experimental technology." },
  { text: "Paradigm shift", meaning: "A fundamental change in approach." },
  { text: "Mission critical", meaning: "Essential for success." },
  { text: "Synergy", meaning: "The combined benefits from working together." },
  { text: "Think outside the box", meaning: "Be creative and unconventional." },
  { text: "Value proposition", meaning: "The unique value a product offers." },
  { text: "Drill down", meaning: "Look deeper into the details." },
  { text: "Blue-sky thinking", meaning: "Creative brainstorming without limits." },
  { text: "On the same page", meaning: "In agreement or alignment." },
  { text: "Empower the team", meaning: "Give the team authority and responsibility." },
  { text: "Streamline operations", meaning: "Make processes more efficient." },
  { text: "Scalable solution", meaning: "A solution that can grow without problems." },
  { text: "Best practices", meaning: "The most effective way of doing something." },
  { text: "Granular view", meaning: "A detailed perspective." },
  { text: "Push the envelope", meaning: "Go beyond the usual limits." },
  { text: "Win-win situation", meaning: "A solution that benefits everyone." },
  { text: "Bring to the table", meaning: "Offer something valuable." },
  { text: "Benchmark against peers", meaning: "Compare performance to similar companies." },
  { text: "Future-proofing", meaning: "Preparing something to withstand future challenges." },
  { text: "Core competency", meaning: "An organization’s main strength." },
  { text: "Move forward", meaning: "Continue progressing." },
  { text: "Actionable insights", meaning: "Data that leads to decisions or actions." },
  { text: "Loop in stakeholders", meaning: "Include others in the discussion." },
  { text: "Optimize for success", meaning: "Improve something to increase chances of success." },
  { text: "Key takeaway", meaning: "The most important point to remember." },
  { text: "Shift the paradigm", meaning: "Change the standard approach." },
  { text: "Elevator pitch", meaning: "A short summary of an idea or product." },
  { text: "Customer-centric approach", meaning: "Focusing on customer needs." },
  { text: "Level set expectations", meaning: "Clarify what’s realistic or possible." },
];


function generateJargon() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const selectedPhrase = phrases[randomIndex];
  
  document.getElementById("jargonText").innerText = selectedPhrase.text;
  document.getElementById("jargonMeaning").innerText = selectedPhrase.meaning;
}
document.getElementById("copyButton").addEventListener("click", function() {
  const jargonText = document.getElementById("jargonText").innerText;
  const jargonMeaning = document.getElementById("jargonMeaning").innerText;

  // Combine the text and meaning to copy to clipboard
  const fullText = `${jargonText}\n\nMeaning: ${jargonMeaning}`;

  // Create a temporary input element to hold the text for copying
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = fullText;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Notify the user that it has been copied
  alert("Copied to clipboard!");
});
