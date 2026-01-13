// 卡片資料
const cards = [
  { name: "舒華", img: "images/shuhua.jpg" },
  { name: "Miyeon", img: "images/miyeon.jpg" },
  { name: "小娟", img: "images/soyeon.jpg" },
  { name: "雨琦", img: "images/yuqi.jpg" },
  { name: "米妮", img: "images/minnie.jpg" },
  { name: "I-DLE 團卡", img: "images/idle_group.jpg" }
];

const middleSchoolQuotes = [
  "命運的輪盤已經決定了…",
  "你的羈絆正在被選中！",
  "星辰已指引你…",
  "看來宇宙青睞於你…",
  "宿命的契約已生效！",
  "力量已降臨於你…"
];

const cardImg = document.getElementById("cardImg");
const result = document.getElementById("result");
const pullBtn = document.getElementById("pullBtn");

pullBtn.addEventListener("click", () => {
  // 翻到背面動畫
  cardImg.style.transform = "rotateY(180deg)";
  cardImg.src = "images/back.png";
  result.innerText = "";

  setTimeout(() => {
    // 隨機抽一張卡
    const index = Math.floor(Math.random() * cards.length);
    const card = cards[index];

    // 顯示正面
    cardImg.style.transform = "rotateY(0deg)";
    cardImg.src = card.img;

    // 隨機中二文案
    const quoteIndex = Math.floor(Math.random() * middleSchoolQuotes.length);
    const quote = middleSchoolQuotes[quoteIndex];

    result.innerText = `${quote} 你抽到了 ✨ ${card.name} ✨`;
  }, 600);
});
