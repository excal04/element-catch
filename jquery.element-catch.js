// Element Catch - 1.0.3
// March 15, 2015
// The MIT License (MIT)
// Copyright (c) 2015 Dustin Dowell
// http://github.com/dustindowell22/element-catch
// =============================================


(function($) {
  $.fn.elementCatch = function(className) {

    // Store object
    var $this = $(this);

    // Set defaults
    className = className || 'scrolled';

    // Distance from top of document
    var distanceTop = $this.offset().top;

    // Menu Catch
    function menuCatch() {

      // Scrollbar distance from top of document
      var scrollPosition = parseFloat($(document).scrollTop());

      // Add class if scroll position is larger than margin
      if(scrollPosition > distanceTop) {
        if(!$this.hasClass(className)) {
          $this.addClass(className);
        }
      }
      else {
        $this.removeClass(className);
      }
    }

    // Execute during runtime
    menuCatch();

    // Execute on resize
    $(window).on('scroll resize orientationchange', menuCatch);
  };
})($);
