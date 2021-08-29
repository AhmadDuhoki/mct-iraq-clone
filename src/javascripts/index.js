document.addEventListener('DOMContentLoaded', function () {
  //   const langWrapper = document.getElementsByClassName('lang_container');
  //   const langChoser = document.getElementsByClassName('lang_choser');
  //   const langOptions = document.getElementsByClassName('lang_options');

  //   function handleClick() {
  //     langChoser.classList.toggle('rotate_lang_choser');
  //     langOptions.classList.toggle('show_languages');
  //   }

  //   langWrapper.onclick = handleClick();

  $(document).ready(function () {
    $('.lang_container').on('click', function (e) {
      e.preventDefault;
      $('.lang_choser').toggleClass('rotate_lang_choser');
      $('.lang_container ul').toggleClass('show_languages');
    });

    $('.showcase_slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    });

    $('.our_projects_slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  });
});
