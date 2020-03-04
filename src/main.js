let demo = document.querySelector("#html");
let string = `/*你好，我是errgou
接下来我要添加一个div */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来
我要把 div 变成一个
太极图

首先
把 div 变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
太极生两仪
让我来上个色
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
还要你中有我，我中有你
*/
#div1::before{
    height: 100px;
    width: 100px;
    top: 0; 
    left: 50%;
    transform: translate(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    height: 100px;
    width: 100px;
    bottom: 0; 
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
`;
let string2 = ''

//string = string.replace(/\n/g, "<br>") // 通过正则表达式，通过 replace 将字符串内的 回车，统统变成 HTML 的换行语法
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            // 如果是回车，就改为 <br>
            string2 += string[n] === "\n" ? "<br>" : string[n]
        } else if (string[n] === ' ') {
            string2 += '&nbsp';
        } else {
            // 如果不是回车，就照搬即可
            string2 += string[n]
        }
        demo.innerHTML = string2; //将合并的string2展示到HTML中
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999)
        html.scrollTo(0, 9999)
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 30);
};
step()