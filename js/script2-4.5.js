$(function () {
  $(".last").css("color", "red");
  $("h1").click(function () {
    $(this).addClass("point");
  });
  $(".point").click(function () {
    $(this).removeClass("point");
  });
  $(".box").prepend("앞쪽입니다.");
  $(".box").append("뒤쪽입니다.");
  let i;
  $("li").click(function () {
    i = $(this).index();
    $(".txt").text(i);
  });
});
