// 點擊有趣的地方之1，換圖
const amusingclass1 = document.querySelector("#amusingclass1");
amusingclass1.addEventListener("click", amusingpost);
const amusingclass2 = document.querySelector("#amusingclass2");
amusingclass2.addEventListener("click", amusingpost);
const amusingclass3 = document.querySelector("#amusingclass3");
amusingclass3.addEventListener("click", amusingpost);
const amusingclass4 = document.querySelector("#amusingclass4");
amusingclass4.addEventListener("click", amusingpost);
const amusingclass5 = document.querySelector("#amusingclass5");
amusingclass5.addEventListener("click", amusingpost);

function amusingpost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "amusingclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "amusingclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "amusingclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "amusingclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "amusingclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);

  td11img.src = `./images/amusingpost/amusingpost${arrtt[0]}.jpg`; td12img.src = `./images/amusingpost/amusingpost${arrtt[1]}.jpg`;
  td13img.src = `./images/amusingpost/amusingpost${arrtt[2]}.jpg`; td14img.src = `./images/amusingpost/amusingpost${arrtt[3]}.jpg`;
  td21img.src = `./images/amusingpost/amusingpost${arrtt[4]}.jpg`; td22img.src = `./images/amusingpost/amusingpost${arrtt[5]}.jpg`;
  td23img.src = `./images/amusingpost/amusingpost${arrtt[6]}.jpg`; td24img.src = `./images/amusingpost/amusingpost${arrtt[7]}.jpg`;

  figcap11a.textContent = "歡迎來到地震之鄉";
  figcap12a.textContent = "秀姑巒溪魚很精";
  figcap13a.textContent = "歡迎來到地震之都";
  figcap14a.textContent = "歡迎來到地震之都";
  figcap21a.textContent = "歡迎來到地震之都";
  figcap22a.textContent = "歡迎來到地震之都";
  figcap23a.textContent = "獵人都是千里眼";
  figcap24a.textContent = "山猪精力好旺盛";
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