//创建pioneer图片路径
let pioneerarray = [
    "./images/pioneerpost/pioneerpost1.jpg", "./images/pioneerpost/pioneerpost2.jpg",
    "./images/pioneerpost/pioneerpost3.jpg", "./images/pioneerpost/pioneerpost4.jpg",
    "./images/pioneerpost/pioneerpost5.jpg", "./images/pioneerpost/pioneerpost6.jpg",
    "./images/pioneerpost/pioneerpost7.jpg", "./images/pioneerpost/pioneerpost8.jpg",
];
let pioneerimg = document.querySelector("#pioneerimg");
// 启动自动轮播
let pioneerj = 0;
let intervalid = setInterval(pioneerpost1, 4000); // 每 4 秒切换一次
function pioneerpost1() {
    // console.log(pioneerj);
    // 轉場先不開
    // pioneerimg.style.transition = "1s";
    // 如果是偶數則執行(取2餘0的數)
    // if (pioneerj % 2 === 0) { pioneerimg.style.opacity = "0"; }
    // else { pioneerimg.style.opacity = "1"; };
    // 轉場先不開
    pioneerimg.src = pioneerarray[pioneerj];
    if (pioneerj > pioneerarray.length - 2) { pioneerj = 0; }
    else { pioneerj++; };
};
// 隱藏所有圖片
// pioneerarray.forEach(img => img.style.display = 'none');