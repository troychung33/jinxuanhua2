// 點擊大家都去過的地方之1，換圖
const arrivedclass1 = document.querySelector("#arrivedclass1");
arrivedclass1.addEventListener("click", arrivedpost);
const arrivedclass2 = document.querySelector("#arrivedclass2");
arrivedclass2.addEventListener("click", arrivedpost);
const arrivedclass3 = document.querySelector("#arrivedclass3");
arrivedclass3.addEventListener("click", arrivedpost);
const arrivedclass4 = document.querySelector("#arrivedclass4");
arrivedclass4.addEventListener("click", arrivedpost);
const arrivedclass5 = document.querySelector("#arrivedclass5");
arrivedclass5.addEventListener("click", arrivedpost);

function arrivedpost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "arrivedclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "arrivedclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "arrivedclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "arrivedclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "arrivedclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);

  td11img.src = `./images/arrivedpost/arrivedpost${arrtt[0]}.jpg`; td12img.src = `./images/arrivedpost/arrivedpost${arrtt[1]}.jpg`;
  td13img.src = `./images/arrivedpost/arrivedpost${arrtt[2]}.jpg`; td14img.src = `./images/arrivedpost/arrivedpost${arrtt[3]}.jpg`;
  td21img.src = `./images/arrivedpost/arrivedpost${arrtt[4]}.jpg`; td22img.src = `./images/arrivedpost/arrivedpost${arrtt[5]}.jpg`;
  td23img.src = `./images/arrivedpost/arrivedpost${arrtt[6]}.jpg`; td24img.src = `./images/arrivedpost/arrivedpost${arrtt[7]}.jpg`;

  figcap11a.textContent = "玉里神社沒有神";
  figcap12a.textContent = "曾經的玉里威尼斯民權停車場";
  figcap13a.textContent = "樂樂溪流到南安變瀑布";
  figcap14a.textContent = "安通露天野溪溫泉有夠燙";
  figcap21a.textContent = "赤科山不能形容的美";
  figcap22a.textContent = "歐亞菲板塊就在玉里大橋";
  figcap23a.textContent = "給大家勇氣的地方協天宮";
  figcap24a.textContent = "玉里最大的井就是玉里圓環";
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