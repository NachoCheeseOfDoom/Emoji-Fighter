const fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩",
  "☠️", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random 
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let randomEmoji1 = Math.floor(Math.random() * fighters.length);
  let randomEmoji2 = Math.floor(Math.random() * fighters.length);
  stageEl.innerHTML = `${fighters[randomEmoji1]} vs ${fighters[randomEmoji2]}`;
})