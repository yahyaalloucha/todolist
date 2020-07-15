function Myob(m) {
  this.text = m;
  this.slector = false;
}
var arr = [];

document.getElementById("submit").addEventListener("click", function () {
  var d = document.getElementById("d1");
  var x = prompt("please enter your note");

  var obj = new Myob(x);
  arr.push(obj);
  var newdiv = document.createElement("div");
  newdiv.className = "mind";
  d.appendChild(newdiv);
  var radio = document.createElement("input");
  radio.type = "radio";
  radio.className = "rd";
  newdiv.appendChild(radio);
  var newp = document.createElement("p");
  newp.className = "newp";
  newp.innerText = x;
  newdiv.appendChild(newp);
  var del = document.createElement("i");
  del.className = "fa fa-trash-o" + " dele";

  newdiv.appendChild(del);
  del.addEventListener("click", function () {
    newdiv.parentNode.removeChild(newdiv);
  });
  radio.addEventListener("click", function () {
    newp.style.textDecoration = "line-through";
  });
});
