$(".c-usage__viewmore").click(function () {
  $(this)
    .parent()
    .parent()
    .find(".c-usage__imageconent")
    .removeClass("is-showContent");
  $(this).parent().find(".c-usage__imageconent").addClass("is-showContent");
});
