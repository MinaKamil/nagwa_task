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
// A $( document ).ready() block.
$(document).ready(function () {
  $(".btn_semester__one").click(function () {
    $(this).addClass('active');
    $('.btn_semester__two').removeClass('active');
    $('.semester__one').addClass('active').removeClass('none');
    $('.semester__two').addClass('none').removeClass('active');
  });
  $(".btn_semester__two").click(function () {
    $(this).addClass('active');
    $('.btn_semester__one').removeClass('active');
    $('.semester__two').addClass('active').removeClass('none');
    $('.semester__one').addClass('none').removeClass('active');
  });
});