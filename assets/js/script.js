// Read More/Less function
var serviceList = document.querySelectorAll('.services-list');
var description = document.querySelectorAll('.hidden-desc');
var dots = document.querySelectorAll('.dots');

var controlBtn = document.querySelectorAll('.toggle-btn'); 
controlBtn.forEach(function (btn,index) {
  btn.addEventListener('click',function () {
    serviceList[index].classList.toggle('active-list');
    description[index].classList.toggle('hide-content');
    dots[index].classList.toggle('hide-content');
    if (btn.innerHTML === 'Read Less') {
      btn.innerHTML = 'Read More';
    } else {
      btn.innerHTML = 'Read Less';
    }
  })
})























