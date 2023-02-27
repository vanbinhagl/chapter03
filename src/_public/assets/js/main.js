$(function () {
  $(".c-usage__viewmore").click(function () {
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".c-usage__imagecontent")
      .removeClass("is-showContent");
    $(this).parent().find(".c-usage__imagecontent").addClass("is-showContent");
  });
  // Animation
  $(window).scroll(function () {
    const scrollTop = 100;

    if ($(window).scrollTop() >= 100) {
      $(".c-bubble").css("transform", "translateY(-100%)");
      $(".c-leafs__top").addClass("c-leafs__transformtop");
      $(".c-leafs__right").addClass("c-leafs__transformright");
    }
    if ($(window).scrollTop() < 100) {
      $(".c-bubble").css("transform", "translateY(0)");
      $(".c-leafs__top").removeClass("c-leafs__transformtop");
      $(".c-leafs__right").removeClass("c-leafs__transformright");
    }
  });

  // Handle show hide menu
  function handleCloseMenu() {
    $(".c-header").css("height", "0");
    $('.c-header__toggleclose').css("display", "none");
  }

  // Close menu
  $(".c-header__toggleclose").click(handleCloseMenu);
  $('.c-header__navlink').click(handleCloseMenu)

  // Open menu
  $(".c-header__toggleopen").click(function () {
    $(".c-header").css("height", "100%");
    $(".c-header__toggleclose").css("display", "block");
  });

  // Handle expand feature


  $(".c-feature__expand").click(function(){
    $(".c-feature__item").not($(this).parent()).removeClass('is-showFeatureContent')

    $(this).parent().toggleClass('is-showFeatureContent')
  })
});
