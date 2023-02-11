// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

var options = {
	accessibility: true,
	prevNextButtons: true,
	pageDots: true,
	setGallerySize: false,
	arrowShape: {
	  x0: 10,
	  x1: 60,
	  y1: 50,
	  x2: 60,
	  y2: 45,
	  x3: 15
	}
  };
  
  var $carousel = $('[data-carousel]').flickity(options);
  var $slideContent = $('.slide-content');
  var flkty = $carousel.data('flickity');
  var selectedSlide = flkty.selectedElement;
  
  flkty.on('settle', function(index) {
	selectedSlide = flkty.selectedElement;
  });
  
  flkty.on('change', function(index) {
	$slideContent.eq(index).removeClass('mask');
  
	setTimeout(function() {
	  $slideContent.addClass('mask');
	}, 500);
  });
  
  flkty.on('dragStart', function(event) {
	var index = 0;
	selectedSlide = flkty.selectedElement;
  
	if (event.layerX > 0) { // direction right
	  index = $(selectedSlide).index() + 1;
	} else { // direction left
	  index = $(selectedSlide).index() - 1;
	}
  
	$slideContent.eq(index).removeClass('mask');
  });
  
  setTimeout(function() {
	$slideContent.addClass('mask');
  }, 500);

  $(function() {
	// Owl Carousel
	var owl = $(".owl-carousel");
	owl.owlCarousel({
	  items: 3,
	  margin: 10,
	  loop: true,
	  nav: false,
	  dots:false
	});
  });
  