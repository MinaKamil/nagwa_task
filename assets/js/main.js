function child(e, childName) {
  var i;
  var x = document.getElementsByClassName("childs__info__img");
  var active = document.getElementsByClassName("tabs__item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < active.length; i++) {
    active[i].className = active[i].className.replace(" active", "");
  }
  document.getElementById(childName).style.display = "flex";
  e.currentTarget.className += " active";
}