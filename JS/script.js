AOS.init({
 duration: 2400
});

window.addEventListener('load', AOS.refresh);

/*De functie om het menu te tonen als er op de hamburger geklikt wordt*/
let hamburger = document.getElementsByClassName("menu")[0];
let hamburgerMenu = document.getElementsByTagName("nav")[0];
hamburger.addEventListener("click", toonMenu);

function toonMenu() {
  console.log("toonMenu werkt!");
  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
  }
}

//PHOTOSWIPE
'use strict';

/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */

(function($) {
  var container = [];
  // Loop over gallery items and push it to the array
  $('#gallery').find('figure').each(function() {
    var $link = $(this).find('.fotolink'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('.fotolink').click(function(event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.85,
        showHideOpacity: true
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));

imagesLoaded:true;
