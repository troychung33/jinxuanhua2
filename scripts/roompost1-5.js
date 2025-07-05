// 點擊睡覺的地方之1，換圖
const roomclass1 = document.querySelector("#roomclass1");
roomclass1.addEventListener("click", roompost);
const roomclass2 = document.querySelector("#roomclass2");
roomclass2.addEventListener("click", roompost);
const roomclass3 = document.querySelector("#roomclass3");
roomclass3.addEventListener("click", roompost);
const roomclass4 = document.querySelector("#roomclass4");
roomclass4.addEventListener("click", roompost);
const roomclass5 = document.querySelector("#roomclass5");
roomclass5.addEventListener("click", roompost);

function roompost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "roomclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "roomclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "roomclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "roomclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "roomclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);
  td11img.src = `./images/roompost/roompost${arrtt[0]}.jpg`; td12img.src = `./images/roompost/roompost${arrtt[1]}.jpg`;
  td13img.src = `./images/roompost/roompost${arrtt[2]}.jpg`; td14img.src = `./images/roompost/roompost${arrtt[3]}.jpg`;
  td21img.src = `./images/roompost/roompost${arrtt[4]}.jpg`; td22img.src = `./images/roompost/roompost${arrtt[5]}.jpg`;
  td23img.src = `./images/roompost/roompost${arrtt[6]}.jpg`; td24img.src = `./images/roompost/roompost${arrtt[7]}.jpg`;

  figcap11a.textContent = "天子寢宮：住你千遍也不厭倦";
  figcap12a.textContent = "宰相寢宮：鄉下六十秒快樂一整天";
  figcap13a.textContent = "尚書寢宮：隱世之地唯我獨尊";
  figcap14a.textContent = "元帥寢宮：享受發呆發呆享受";
  figcap21a.textContent = "將軍寢宮：聽說花蓮比日本遠";
  figcap22a.textContent = "主席寢宮：來趟時光之旅吧";
  figcap23a.textContent = "首相寢宮：發呆還遠遠不夠";
  figcap24a.textContent = "狀元寢宮：這裡時間多得很";
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