$(document).ready(function(){

	$('.team-carousel').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<i class="left-arrow arrow"></i>',
		nextArrow: '<i class="right-arrow arrow"></i>',
		dots: false,

		responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 730,
      settings: {
      	slidesToShow: 3,
      	arrows: false,
      }
    },
    {
      breakpoint: 611,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
	});
});