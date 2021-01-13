// 给小黄人所在块添加鼠标移动事件 eyeball
document.querySelector('.body-face').addEventListener('mousemove', eyeball);
// 事件函数
function eyeball() {
  // 根据css选择器 获取到元素 放入数组
  let eye = document.querySelectorAll('.eye');
  // 调用数组中的每个元素
  eye.forEach(function(eye) {
    // 元素相对于窗口左边的距离  元素左边距离页面左边的距离; 左边框的宽度 
    let x = (eye.getBoundingClientRect().left + (eye.clientLeft / 2));//除2或者不除2都会一样运行，不同是
    // 同上
    let y = (eye.getBoundingClientRect().top + (eye.clientTop /* / 2 */));
    // pageX 鼠标指针的位置，相对于文档左边缘
     
    let radian = Math.atan2(event.pageX - x, event.pageY -y);// 计算角度
    let rot = (radian * (180 / Math.PI) * -1) + 270;// 计算弧度
    // 修改旋转角度
    eye.style.transform = 'rotate(' + rot + 'deg)';
  })
}

/* 获取转动的角度

使用 Math.atan2() 函数可以非常高效的实现之，它是返回点与原点之间的倾斜角，如图所示，如果想计算出点 (x1,y1) 与 原点 (cx,cy) 与X轴的角度，只需要执行：

Math.atan2(y1 - cy, x1 - cx)

需要注意的是，它的取值范围是[-PI, PI]。
当 (x1, y1) 在第一象限, 0 < θ < PI/2

当 (x1, y1) 在第二象限 PI/2 < θ≤PI

当 (x1, y1) 在第三象限, -PI < θ < -PI/2

当 (x1, y1) 在第四象限, -PI/2 < θ < 0
3.2 角度与弧度之间的转换

角度 = 弧度 * 180 / Math.PI;
弧度= 角度 * Math.PI / 180;

3.3 组件中心点位置计算

使用getBoundingClientRect() 的方法可以获取出容器的位置信息，用当前位置减去宽/高的一半，即可获取中心点位置。

  //中心点 此处与本例子无法
  cx = x + width / 2;
  cy = y + height / 2;


  关于鼠标坐标

鼠标坐标一般是用event事件获取，其中有以下几个方法：

    pageX , pageY
    *screenX , *screenY
    *clientX , *clientY

其中以pageX , pageY方法使用得较多，其他的方法则不太常使用（*标明）。
一张图说明三者的区别：

作者：丶chlorine
链接：https://www.jianshu.com/p/6c7c9443b919
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */