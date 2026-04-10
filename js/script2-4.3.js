$(function () {
  $(".point").css("background-color", "yellow");
  $(".point").parents().css("border", "1px solid blue");
  $(".point").parents(".list1").css("border", "1px solid red");
  $(".box1>h2").css("background-color", "yellow");
  $(".list2").children().css("text-decoration", "underline");
  $(".first").siblings().css("color", "green");
});
