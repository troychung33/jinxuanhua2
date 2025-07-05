//函式全部計算完成 - 同時執行
//點擊主導航顯示子導航
const lielement = document.querySelectorAll("#ulpa>li");
//宣告子導航
const ulliul11 = document.querySelector("#ul11");
const ulliul12 = document.querySelector("#ul12");
const ulliul13 = document.querySelector("#ul13");
const ulliul14 = document.querySelector("#ul14");
const ulliul15 = document.querySelector("#ul15");
const ulliul16 = document.querySelector("#ul16");
const ulliul17 = document.querySelector("#ul17");
let li11key = "off";
let li12key = "off";
let li13key = "off";
let li14key = "off";
let li15key = "off";
let li16key = "off";
let li17key = "off";
// 逐一監聽激發喚醒li主導航
for (let i = 0; i < lielement.length; i++) {
  lielement[i].addEventListener("click", lielementchange);
  // console.log(i);
};

function lielementchange() {
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

  // console.log(li11key,li12key,li13key,li14key,li15key,li16key,li17key);

  // console.log(this.id);

  // ul顯示
  if (li11key == "on" || li12key == "on" || li13key == "on" || li14key == "on" || li15key == "on" || li16key == "on" || li17key == "on") {
    // on有兩種情形(一)重復按同導航鈕
    if (this.id == "li11" && li11key == "on") { ulliul11.style.display = "none"; li11key = "off"; lielement[0].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    if (this.id == "li12" && li12key == "on") { ulliul12.style.display = "none"; li12key = "off"; lielement[1].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    if (this.id == "li13" && li13key == "on") { ulliul13.style.display = "none"; li13key = "off"; lielement[2].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    if (this.id == "li14" && li14key == "on") { ulliul14.style.display = "none"; li14key = "off"; lielement[3].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    if (this.id == "li15" && li15key == "on") { ulliul15.style.display = "none"; li15key = "off"; lielement[4].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    if (this.id == "li16" && li16key == "on") { ulliul16.style.display = "none"; li16key = "off"; lielement[5].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    if (this.id == "li17" && li17key == "on") { ulliul17.style.display = "none"; li17key = "off"; lielement[6].style.backgroundColor = "rgb(255, 255, 255)"; return; };
    // on有兩種情形(二)按不同導航鈕
    if (this.id == "li11" && li11key != "on") { ulliul11.style.display = "block"; li11key = "on"; li12key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[0].style.backgroundColor = "rgb(255, 245, 255)"; return; };
    if (this.id == "li12" && li12key != "on") { ulliul12.style.display = "block"; li12key = "on"; li11key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[1].style.backgroundColor = "rgb(255, 245, 255)"; return; };
    if (this.id == "li13" && li13key != "on") { ulliul13.style.display = "block"; li13key = "on"; li11key = "off"; li12key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[2].style.backgroundColor = "rgb(255, 245, 255)"; return; };
    if (this.id == "li14" && li14key != "on") { ulliul14.style.display = "block"; li14key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[3].style.backgroundColor = "rgb(255, 245, 255)"; return; };
    if (this.id == "li15" && li15key != "on") { ulliul15.style.display = "block"; li15key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li14key = "off"; li16key = "off"; li17key = "off"; lielement[4].style.backgroundColor = "rgb(255, 245, 255)"; return; };
    if (this.id == "li16" && li16key != "on") { ulliul16.style.display = "block"; li16key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li17key = "off"; lielement[5].style.backgroundColor = "rgb(255, 245, 255)"; return; };
    if (this.id == "li17" && li17key != "on") { ulliul17.style.display = "block"; li17key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; lielement[6].style.backgroundColor = "rgb(255, 245, 255)"; return; };
  }

  if (li11key == "off" && li12key == "off" && li13key == "off" && li14key == "off" && li15key == "off" && li16key == "off" && li17key == "off") {
    // off只有一種情形全部沒有人按
    if (this.id == "li11" && li11key == "off") { ulliul11.style.display = "block"; li11key = "on"; li12key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[0].style.backgroundColor = "rgb(255, 245, 255)"; };
    if (this.id == "li12" && li12key == "off") { ulliul12.style.display = "block"; li12key = "on"; li11key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[1].style.backgroundColor = "rgb(255, 245, 255)"; };
    if (this.id == "li13" && li13key == "off") { ulliul13.style.display = "block"; li13key = "on"; li11key = "off"; li12key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[2].style.backgroundColor = "rgb(255, 245, 255)"; };
    if (this.id == "li14" && li14key == "off") { ulliul14.style.display = "block"; li14key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li15key = "off"; li16key = "off"; li17key = "off"; lielement[3].style.backgroundColor = "rgb(255, 245, 255)"; };
    if (this.id == "li15" && li15key == "off") { ulliul15.style.display = "block"; li15key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li14key = "off"; li16key = "off"; li17key = "off"; lielement[4].style.backgroundColor = "rgb(255, 245, 255)"; };
    if (this.id == "li16" && li16key == "off") { ulliul16.style.display = "block"; li16key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li17key = "off"; lielement[5].style.backgroundColor = "rgb(255, 245, 255)"; };
    if (this.id == "li17" && li17key == "off") { ulliul17.style.display = "block"; li17key = "on"; li11key = "off"; li12key = "off"; li13key = "off"; li14key = "off"; li15key = "off"; li16key = "off"; lielement[6].style.backgroundColor = "rgb(255, 245, 255)"; };
    return;
  };

};
