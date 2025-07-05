// 點擊最不想去的地方之1，換圖
const dislikeclass1 = document.querySelector("#dislikeclass1");
dislikeclass1.addEventListener("click", dislikepost);
const dislikeclass2 = document.querySelector("#dislikeclass2");
dislikeclass2.addEventListener("click", dislikepost);
const dislikeclass3 = document.querySelector("#dislikeclass3");
dislikeclass3.addEventListener("click", dislikepost);
const dislikeclass4 = document.querySelector("#dislikeclass4");
dislikeclass4.addEventListener("click", dislikepost);
const dislikeclass5 = document.querySelector("#dislikeclass5");
dislikeclass5.addEventListener("click", dislikepost);

function dislikepost(arqu1) {
  // 轉跳到頁面中間照片區
  // window.location.href = "#browerpoint";
  console.log(this.id);
  let arrtt = [];
  if (this.id == "dislikeclass1") { arrtt = [1, 2, 3, 4, 5, 6, 7, 8] }
  if (this.id == "dislikeclass2") { arrtt = [11, 12, 13, 14, 15, 16, 17, 18] }
  if (this.id == "dislikeclass3") { arrtt = [21, 22, 23, 24, 25, 26, 27, 28] }
  if (this.id == "dislikeclass4") { arrtt = [31, 32, 33, 44, 45, 46, 47, 48] }
  if (this.id == "dislikeclass5") { arrtt = [41, 42, 43, 44, 45, 46, 47, 48] }
  console.log(arrtt[0]);

  td11img.src = `./images/dislikepost/dislikepost${arrtt[0]}.jpg`; td12img.src = `./images/dislikepost/dislikepost${arrtt[1]}.jpg`;
  td13img.src = `./images/dislikepost/dislikepost${arrtt[2]}.jpg`; td14img.src = `./images/dislikepost/dislikepost${arrtt[3]}.jpg`;
  td21img.src = `./images/dislikepost/dislikepost${arrtt[4]}.jpg`; td22img.src = `./images/dislikepost/dislikepost${arrtt[5]}.jpg`;
  td23img.src = `./images/dislikepost/dislikepost${arrtt[6]}.jpg`; td24img.src = `./images/dislikepost/dislikepost${arrtt[7]}.jpg`;

  figcap11a.textContent = "沒有三天三不能走玉山";
  figcap12a.textContent = "八通關風景";
  figcap13a.textContent = "八通關風景";
  figcap14a.textContent = "八通關風景";
  figcap21a.textContent = "八通關風景";
  figcap22a.textContent = "八通關風景";
  figcap23a.textContent = "八通關風景";
  figcap24a.textContent = "八通關風景";
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
  console.log(li11key,li12key,li13key,li14key,li15key,li16key,li17key);
};