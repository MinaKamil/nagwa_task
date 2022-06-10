function child(e, childName) {
  var i;
  var childs__img = document.getElementsByClassName("childs__info__img");
  var activeChild = document.getElementsByClassName("tabs__item");

  for (i = 0; i < childs__img.length; i++) {
    childs__img[i].style.display = "none";
  }
  for (i = 0; i < activeChild.length; i++) {
    activeChild[i].className = activeChild[i].className.replace(" active", "");
  }
  document.getElementById(childName).style.display = "flex";
  e.currentTarget.className += " active";
}
function samsterFun(e, semester) {
  var i;
  var semester__info = document.getElementsByClassName("semester__info");
  var activeSemester = document.getElementsByClassName("btn_semester");

  for (i = 0; i < semester__info.length; i++) {
    // Check if the media query is true
    semester__info[i].style.display = "none";
  }
  for (i = 0; i < activeSemester.length; i++) {
    activeSemester[i].className = activeSemester[i].className.replace(" active", "");
  }
  document.getElementById(semester).style.display = "block";
  e.currentTarget.className += " active";
}