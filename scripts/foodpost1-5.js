// 點擊填飽肚子的地方之1，換圖
const foodclass1 = document.querySelector("#foodclass1");
foodclass1.addEventListener("click", foodpost);
const foodclass2 = document.querySelector("#foodclass2");
foodclass2.addEventListener("click", foodpost);
const foodclass3 = document.querySelector("#foodclass3");
foodclass3.addEventListener("click", foodpost);
const foodclass4 = document.querySelector("#foodclass4");
foodclass4.addEventListener("click", foodpost);
const foodclass5 = document.querySelector("#foodclass5");
foodclass5.addEventListener("click", foodpost);

function foodpost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "foodclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "foodclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "foodclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "foodclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "foodclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);
  td11img.src = `./images/foodpost/foodpost${arrtt[0]}.jpg`; td12img.src = `./images/foodpost/foodpost${arrtt[1]}.jpg`;
  td13img.src = `./images/foodpost/foodpost${arrtt[2]}.jpg`; td14img.src = `./images/foodpost/foodpost${arrtt[3]}.jpg`;
  td21img.src = `./images/foodpost/foodpost${arrtt[4]}.jpg`; td22img.src = `./images/foodpost/foodpost${arrtt[5]}.jpg`;
  td23img.src = `./images/foodpost/foodpost${arrtt[6]}.jpg`; td24img.src = `./images/foodpost/foodpost${arrtt[7]}.jpg`;

  figcap11a.textContent = "吃不能落人後";
  figcap12a.textContent = "能夠坐下來好好吃一頓真好";
  figcap13a.textContent = "卓溪鄉的黑熊不能吃";
  figcap14a.textContent = "用你的零用錢吃好料";
  figcap21a.textContent = "不夾娃娃就能吃大餐";
  figcap22a.textContent = "吃原來那麼簡單";
  figcap23a.textContent = "便當裡的米飯太好吃";
  figcap24a.textContent = "好吃的秘訣原來是水";
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