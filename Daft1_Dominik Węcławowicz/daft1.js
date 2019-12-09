const x = document.querySelector(".page-navigation");
function hamburgerFunction() {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
document.querySelector(".icon").addEventListener("click", hamburgerFunction)

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