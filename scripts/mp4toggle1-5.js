// 選擇播放標籤元素
const videoPlayer = document.querySelector("#videoPlayerid");
// 逐一querySelector選擇元素
const toggle1 = document.querySelector("#toggleid1");
const toggle2 = document.querySelector("#toggleid2");
const toggle3 = document.querySelector("#toggleid3");
const toggle4 = document.querySelector("#toggleid4");
const toggle5 = document.querySelector("#toggleid5");

// 點擊toggle1，換圖
toggle1.addEventListener("click", togglem5);
toggle2.addEventListener("click", togglem5);
toggle3.addEventListener("click", togglem5);
toggle4.addEventListener("click", togglem5);
toggle5.addEventListener("click", togglem5);

function togglem5() {
  videoPlayer.pause();
  videoPlayer.src = "";
  if (this.id == "toggleid1") { videoPlayer.src = "./mpeg/赤科山/MOV_001.mp4" }
  if (this.id == "toggleid2") { videoPlayer.src = "./mpeg/赤科山/MOV_002.mp4" }
  if (this.id == "toggleid3") { videoPlayer.src = "./mpeg/赤科山/MOV_003.mp4" }
  if (this.id == "toggleid4") { videoPlayer.src = "./mpeg/赤科山/MOV_004.mp4" }
  if (this.id == "toggleid5") { videoPlayer.src = "./mpeg/赤科山/MOV_005.mp4" }
  // console.log(this.id);
  // console.log(videoPlayer.src);
  videoPlayer.play();
};

