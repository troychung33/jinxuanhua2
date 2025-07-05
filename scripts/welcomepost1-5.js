// 點擊最歡迎大家地方之1，換圖
const welcomeclass1 = document.querySelector("#welcomeclass1");
welcomeclass1.addEventListener("click", welcomepost);
const welcomeclass2 = document.querySelector("#welcomeclass2");
welcomeclass2.addEventListener("click", welcomepost);
const welcomeclass3 = document.querySelector("#welcomeclass3");
welcomeclass3.addEventListener("click", welcomepost);
const welcomeclass4 = document.querySelector("#welcomeclass4");
welcomeclass4.addEventListener("click", welcomepost);
const welcomeclass5 = document.querySelector("#welcomeclass5");
welcomeclass5.addEventListener("click", welcomepost);

function welcomepost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "welcomeclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "welcomeclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "welcomeclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "welcomeclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "welcomeclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);

  td11img.src = `./images/welcomepost/welcomepost${arrtt[0]}.jpg`; td12img.src = `./images/welcomepost/welcomepost${arrtt[1]}.jpg`;
  td13img.src = `./images/welcomepost/welcomepost${arrtt[2]}.jpg`; td14img.src = `./images/welcomepost/welcomepost${arrtt[3]}.jpg`;
  td21img.src = `./images/welcomepost/welcomepost${arrtt[4]}.jpg`; td22img.src = `./images/welcomepost/welcomepost${arrtt[5]}.jpg`;
  td23img.src = `./images/welcomepost/welcomepost${arrtt[6]}.jpg`; td24img.src = `./images/welcomepost/welcomepost${arrtt[7]}.jpg`;

  figcap11a.textContent = "你歡迎我我也歡迎你";
  figcap12a.textContent = "喜歡不用任何理由";
  figcap13a.textContent = "開開心心來花蓮";
  figcap14a.textContent = "施主你的笑容很迷人";
  figcap21a.textContent = "把開心帶回你家";
  figcap22a.textContent = "你選的出遊日子都棒";
  figcap23a.textContent = "來我們家就對了";
  figcap24a.textContent = "大家都替你開心";
  // 子導航全隱藏
  ulliul11.style.display = "none";
  ulliul12.style.display = "none";
  ulliul13.style.display = "none";
  ulliul14.style.display = "none";
  ulliul15.style.display = "none";
  ulliul16.style.display = "none";
  ulliul17.style.display = "none";
  // 所有主導航顏色取消
  lielement[0].style.backgroundColor = "rgb(255, 255, 255)";
  lielement[1].style.backgroundColor = "rgb(255, 255, 255)";
  lielement[2].style.backgroundColor = "rgb(255, 255, 255)";
  lielement[3].style.backgroundColor = "rgb(255, 255, 255)";
  lielement[4].style.backgroundColor = "rgb(255, 255, 255)";
  lielement[5].style.backgroundColor = "rgb(255, 255, 255)";
  lielement[6].style.backgroundColor = "rgb(255, 255, 255)";
};