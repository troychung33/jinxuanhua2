// 逐一querySelector選擇元素，換照片
const td11img = document.querySelector(".td11img");
const td12img = document.querySelector(".td12img");
const td13img = document.querySelector(".td13img");
const td14img = document.querySelector(".td14img");
const td21img = document.querySelector(".td21img");
const td22img = document.querySelector(".td22img");
const td23img = document.querySelector(".td23img");
const td24img = document.querySelector(".td24img");
// 逐一querySelector選擇元素，換標題
// 沒有的class請不要query
const figcap11a = document.querySelector(".figcap11a");
const figcap12a = document.querySelector(".figcap12a");
const figcap13a = document.querySelector(".figcap13a");
const figcap14a = document.querySelector(".figcap14a");
const figcap21a = document.querySelector(".figcap21a");
const figcap22a = document.querySelector(".figcap22a");
const figcap23a = document.querySelector(".figcap23a");
const figcap24a = document.querySelector(".figcap24a");

// 點擊金萱花民宿之1，換圖
const jinclass1 = document.querySelector("#jinclass1");
jinclass1.addEventListener("click", jinpost);
const jinclass2 = document.querySelector("#jinclass2");
jinclass2.addEventListener("click", jinpost);
const jinclass3 = document.querySelector("#jinclass3");
jinclass3.addEventListener("click", jinpost);
const jinclass4 = document.querySelector("#jinclass4");
jinclass4.addEventListener("click", jinpost);
const jinclass5 = document.querySelector("#jinclass5");
jinclass5.addEventListener("click", jinpost);

function jinpost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "jinclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "jinclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "jinclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "jinclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "jinclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);
  td11img.src = `./images/jinpost/jinpost${arrtt[0]}.jpg`; td12img.src = `./images/jinpost/jinpost${arrtt[1]}.jpg`;
  td13img.src = `./images/jinpost/jinpost${arrtt[2]}.jpg`; td14img.src = `./images/jinpost/jinpost${arrtt[3]}.jpg`;
  td21img.src = `./images/jinpost/jinpost${arrtt[4]}.jpg`; td22img.src = `./images/jinpost/jinpost${arrtt[5]}.jpg`;
  td23img.src = `./images/jinpost/jinpost${arrtt[6]}.jpg`; td24img.src = `./images/jinpost/jinpost${arrtt[7]}.jpg`;

  figcap11a.textContent = "縱谷一隅比肩仙境";
  figcap12a.textContent = "難得偷得浮生半日閑";
  figcap13a.textContent = "時光悠悠美景依然";
  figcap14a.textContent = "這裡到處都是山";
  figcap21a.textContent = "我們是大自然的守護工";
  figcap22a.textContent = "時間多得不像話";
  figcap23a.textContent = "慢步鄉村最佳選擇";
  figcap24a.textContent = "金萱花最愛是你";
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