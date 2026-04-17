$(function () {
  $(".point1").click(function () {
    $(this).toggleClass("point");
  });

  // $(".point2").mouseenter(function () {
  //   $(this).addClass("point");
  // });
  // $(".point2").mouseleave(function () {
  //   $(this).removeClass("point");
  // });

  $(".point2").mouseover(function () {
    $(this).addClass("point");
  });
  $(".point2").mouseout(function () {
    $(this).removeClass("point");
  });

  $(".point3").hover(
    function () {
      $(this).addClass("point");
    },
    function () {
      $(this).removeClass("point");
    },
  );

  $(".point4 a").focusin(function () {
    $(this).parent().addClass("point");
  });
  $(".point4 a").focusout(function () {
    $(this).parent().removeClass("point");
  });
});
