const next_btn = document.getElementById("next_btn");
const prev_btn = document.getElementById("prev_btn");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const txt4 = document.getElementById("txt4");

function f1() {
  txt1.innerText = "is";
  txt2.innerText = "JScript";
  txt3.innerText = "Hello";
  txt4.innerText = "This";
}
function f2() {
  txt1.innerText = "JScript";
  txt2.innerText = "Hello";
  txt3.innerText = "This";
  txt4.innerText = "is";
}

next_btn.addEventListener("click", f1);
prev_btn.addEventListener("click", f2);
