// Menu Catch - 1.0.1
// February 8, 2015
// The MIT License (MIT)
// Copyright (c) 2015 Dustin Dowell
// http://github.com/dustindowell22/menu-catch


(function($) {
  $.fn.menuCatch = function(options) {

    // Settings
    var settings = $.extend({
      scrolled: 'scrolled',
      animated: 'animated'
    }, options);

    // Store object
    var $this = $(this);

    // Set scope
    var marginTop;

    // Concatenate classes
    var scrollClasses = settings.scrolled + ' ' + settings.animated;

    // Add or remove classes to element according to scrollbar position
    function menuCatch() {

      // Update top margin
      if($this.hasClass(settings.scrolled)) {
        $this.removeClass(settings.scrolled);
        marginTop = parseFloat($this.css('margin-top'));
        $this.addClass(settings.scrolled);
      }

      // Scrollbar distance from top of document
      var scrollPos = parseFloat($(document).scrollTop());

      // Add classes if scroll position is larger than top margin
      return scrollPos > marginTop ? $this.addClass(scrollClasses) : $this.removeClass(scrollClasses);
    }

    // Execute during runtime
    menuCatch();

    // Execute on resize
    $(window).on('scroll resize orientationchange', menuCatch);
  };
})(jQuery);
