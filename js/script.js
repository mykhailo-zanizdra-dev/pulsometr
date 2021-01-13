$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $("ul.tabs__list").on("click", "li:not(.active)", function (e) {
    e.preventDefault();
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("section.tabs")
      .find("div.tabs__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  $(".card__link").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).closest(".card__body").toggleClass("card__body_active");
    });
  });
  document.querySelectorAll("[data-modal=consult]").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".modal#consult").classList.toggle("show");
      document.querySelector(".overlay").classList.toggle("show");
      document.querySelector("body").classList.toggle("lock");
    });
  });
  document.querySelectorAll(".modal__close").forEach((item) => {
    item.addEventListener("click", () => {
      item.closest(".modal").classList.remove("show");
      document.querySelector(".overlay").classList.remove("show");
      document.querySelector("body").classList.remove("lock");
    });
  });
  document.querySelectorAll(".card__footer-button").forEach((item, i) => {
    item.addEventListener("click", () => {
      document.querySelector(
        ".modal#bye .modal__subtitle"
      ).textContent = document.querySelectorAll(".card__title")[i].textContent;
      document.querySelector(".modal#bye").classList.toggle("show");
      document.querySelector(".overlay").classList.toggle("show");
      document.querySelector("body").classList.toggle("lock");
    });
  });

  $("form").submit(function (e) {
    e.preventDefault();
    // if (!$(this).valid()) return false;
    // $.ajax({
    //   type: "POST",
    //   url: "mailer/smart.php",
    //   data: $(this).serialize(),
    // }).done(function () {
    //   $(this).find("input").val("");
    //   $(".modal#consult, .modal#bye").removeClass("show");
    //   $(".modal#info").addClass("show");
    //   $(".overlay").addClass("show");
    //   $("body").addClass("lock");
    //   $("form").trigger("reset");
    // });
    // return false;
  });

  function validateForm(form) {
    $(form).validate({
      errorClass: "form-error",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Ваше имя...",
          minlength: jQuery.validator.format("Минимум {0} символа!"),
        },
        phone: "Ваш телефон...",
        email: {
          required: "Пожалуйста введите свою почту.",
          email: "Формат почты: name@domain.com",
        },
      },
    });
  }
    validateForm(".consult .feed-form");
    validateForm("#consult .feed-form");
    validateForm("#bye .feed-form");

  $("input[name=phone]").mask("+7 (999) 999-99-99");
    $("a[href^='#header-main']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
      $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
          $(".scroll-up").fadeIn();
        } else {
            $(".scroll-up").fadeOut();
        }
    });
    new WOW().init(); 
});
