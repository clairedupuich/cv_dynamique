// 给body添加鼠标移动事件 eyeball
document.querySelector('body').addEventListener('mousemove', eyeball);
// 事件函数
function eyeball() {
  // 根据css选择器 获取到元素 放入数组
  var eye = document.querySelectorAll('.eye');
  // 调用数组中的每个元素
  eye.forEach(function(eye) {
    // 元素相对于窗口左边的距离  左边框的宽度
    let x = (eye.getBoundingClientRect().left + (eye.clientLeft / 2));
    // 同上
    let y = (eye.getBoundingClientRect().top + (eye.clientTop / 2));
    // pageX 鼠标指针的位置，相对于文档左边缘
    let radian = Math.atan2(event.pageX - x, event.pageY -y);
    let rot = (radian * (180 / Math.PI) * -1) + 270;
    // 修改旋转角度
    eye.style.transform = 'rotate(' + rot + 'deg)';
  })
}