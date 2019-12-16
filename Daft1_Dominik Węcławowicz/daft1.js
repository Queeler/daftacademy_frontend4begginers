$("#icon").click(function() {
  $('.page-navigation').toggleClass('.page-navigation-active');
});

let butt = document.querySelectorAll('.button'), el;
for (let i = 0; i < 4; i++) {
    el = butt[i];
    el.addEventListener('click',() => {
      butt[i].style.display = "none"
      document.getElementsByClassName('hidden')[i].style.display = "block"
  })
}

const emailInput = document.getElementById('email');
const topicInput = document.getElementById('topic');

document.getElementsByClassName('form__field')[2].addEventListener('click', function (e) {
  e.preventDefault();

  var formData = new FormData();
  formData.append('email', emailInput.value);
  formData.append('topic', topicInput.value);

  const obj = Object.fromEntries(formData);
  console.log(obj);
});

function myFunction(x) {
  x.classList.toggle("open");
}

icon.addEventListener('click', function toggle() {
  const menu = document.querySelector(".page-navigation");
  menu.classList.toggle("new")
});

for (let i = 0; i < 9; i++) {
  var element = document.getElementsByClassName('gallery__image');
  result1 = element[i]
  result1.addEventListener('mouseleave', () => {
    element[i].classList.toggle("newer");
  });
}

// const elements = document.getElementById('photos').getElementsByClassName('gallery__image');

// for (let i = 0; i <= elements.length; i++) {
// 	elements[i].addEventListener('animationend', function(e) {
//     elements[i].classList.remove('animated');
// 	});

//   elements[i].addEventListener('mouseover', function(e) {
//     elements[i].classList.add('animated')
//   })
// }