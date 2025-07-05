     //函式全部計算完成 - 同時執行
    //懸浮所有li時半透明，離時恢復不透明明
    //監聽導航區，設置mouseover&moudeout變透明table
    const hiddentable = document.querySelector(".hiddentable");
    const lielement = document.querySelectorAll("li");
    const pioneerpost = document.querySelector(".pioneerpost");
    // 逐一激發喚醒
    for (let i = 0; i < lielement.length; i++) {
      lielement[i].addEventListener("mouseover", lielementchange);
      lielement[i].addEventListener("mouseout", lielementresume);
      // console.log(i);
    };
    // console.log(lielement); 
    // console.log(hiddentable); 
    function lielementchange() {
      // td顯示區
      hiddentable.style.opacity = "1";
      hiddentable.style.transition = "0.5s";
    };
    // 平滑過渡.transition ; 
    function lielementresume() {
      // td顯示區
      hiddentable.style.opacity = "1";
    };