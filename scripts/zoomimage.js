// 選擇放大照片區div標籤元素
const zoomimage = document.querySelector(".zoomimage");
const zoomimg = document.createElement("img");
zoomimage.appendChild(zoomimg);
// 插入img標籤元素
const alltdimg = document.querySelectorAll(".imagetr td div img");
// 選擇頁面顯示的所有照片(八張)
// console.log(alltdimg);
// media query handler function

const mqLarge = window.matchMedia("(min-width: 768px)");
mqLarge.addEventListener('change', mqHandler);
// ***初次呼叫以便確大小
mqHandler();
function mqHandler(e) {
  // 監聽八張照片，若點擊則function zoomimageing
  // console.log(mqLarge);
  // ***mqLarge.matches.toString()轉成字串方能比對
  // 768px以上若為true則監聽
  if (mqLarge.matches.toString() == "true") {
    // ***768px以上主導航若被關閉，利用zoomimage代碼顯示不另外寫js
    navigationfa.style.display = "block";
    navhiddenkey = "on";
    alltdimg.forEach((arrayimg) => {
      arrayimg.addEventListener("click", zoomimageing);
      // console.log("true");
    })
  } else {
    // 768px以下移除監聽
    alltdimg.forEach((arrayimg) => {
      arrayimg.removeEventListener("click", zoomimageing);
      // console.log("flase");
    })
  };
  // 下面這段程式和上面程式相同功能
  // for (let imgi = 0; imgi < alltdimg.length; imgi++) {
  //   alltdimg[i].addEventListener("click", zoomimageing);
  // };
};


function zoomimageing() {
  // window.location.href = "#browerpoint";
  // 頁內返回
  zoomimg.src = this.src
  zoomimage.style.display = "flex";
  // 打開放大圖
  // 陣列 動畫
  const Spinning = [
    { transform: " scale(0)" },
    { transform: " scale(1)" },];

  const newsTiming = {
    duration: 300,
    iterations: 1, // 次數
    // onComplete: () => { console.log('Animation completed'); },    
  };
  zoomimg.animate(Spinning, newsTiming);
};

// 監聽放大照片區zoomimg
zoomimg.addEventListener("click", zoomimageed);
// 觸發則(放大照片)
function zoomimageed() {
  // 陣列 動畫
  const Spinning = [
    { transform: " scale(1)" },
    { transform: " scale(0)" },];

  const newsTiming = {
    duration: 300,
    iterations: 1, // 次數
    // onComplete: () => { console.log('Animation completed'); },    
  };
  zoomimg.animate(Spinning, newsTiming);
  // 執行動畫
  setTimeout('zoomimage.style.display = "none"', 290);
  // 設置與縮小畫相同的時間來，***隱藏zoomimage

};

