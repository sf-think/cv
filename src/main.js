let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 先来一个 div */
#div1 {
  width: 200px;
  height: 200px;
}
/* 画一个八卦图 
** 先画一个圆
*/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
  background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(253,253,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 加两个球 */
#div1::after {
  content: '';
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}

#div1::before {
  content: '';
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}

/* 转起来 */
#div1 {
  animation: 3s linear infinite rotate;
}
@keyframes rotate{
  0% {
    transform: rotate(0turn);
  }
  100% {
    transform: rotate(1turn);
  }
}
`;
let string2 = "";
let n = 0;
let step = function () {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999)
    // 手机端下拉滚动条
    html.scrollTo(0, 99999)
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 50);
};

step();
