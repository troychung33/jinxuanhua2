//函式全部計算完成 - 同時執行
//主導航顯示與不顯示
const navigationfa = document.querySelector(".navigation");
const navhiddenfa = document.querySelector("#navhidden");
//宣告子導航
let navhiddenkey = "on";
// 監聽navhidden圓形按鈕，"on"則激發喚醒li主導航
navhiddenfa.addEventListener("click", navhiddentoogle);
function navhiddentoogle() {
  console.log(navhiddenkey);
  if (navhiddenkey == "on") { navigationfa.style.display = "none"; navhiddenkey = "off"; return; }
  if (navhiddenkey == "off") { navigationfa.style.display = "block"; navhiddenkey = "on"; return; }
}
