var myList = document.getElementsByTagName("LI")
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

//yeni görev ekle
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var newValue = document.createTextNode(inputValue);
  li.appendChild(newValue);

 if (inputValue === '') {
   $('.error').toast('show');

 } else {
   $('.success').toast('show');
   document.getElementById("list").appendChild(li);

 }

  document.getElementById("task").value = "";

  var span = document.createElement('span');
  var text = document.createTextNode("\u00D7");
  span.className = 'close';
  span.appendChild(text);
  li.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
