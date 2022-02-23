const diceBtn = document.querySelector(".dice_icon");
const adviceId = document.querySelector(".advice_id");
const adviceEl = document.querySelector(".advice");
const mobilePt = document.querySelector("#mobile_pattern");
const desktopPt = document.querySelector("#desktop_pattern");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceId.textContent = `Advice #${data.slip.id}`;
  adviceEl.textContent = `"${data.slip.advice}"`;
};

diceBtn.addEventListener("click", () => {
  getAdvice();
});

window.onresize = () => {
  const width = window.innerWidth;
  if (width > 450) {
    mobilePt.classList.add("display_none");
    desktopPt.classList.remove("display_none");
  } else {
    mobilePt.classList.remove("display_none");
    desktopPt.classList.add("display_none");
  }
};
