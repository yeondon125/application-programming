$(function () {
  $(".list1>li:first-child").css("text-decoration", "underline");
  $(".list1>li").first().css("background-color", "yellow");
  $(".list1>li:last-child").css("text-decoration", "underline");
  $(".list1>li").last().css("background-color", "green");
  $(".list2>li").eq(0).css("color", "red");
  $(".list1").find(".sub").css("color", "blue");
});
