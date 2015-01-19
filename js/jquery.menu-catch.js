// Menu Catch - 1.0.0
// January 19, 2015
// The MIT License (MIT)
// Copyright (c) 2015 Dustin Dowell
// http://github.com/dustindowell22/menu-catch


(function($) {
  $.fn.menuCatch = function(options) {
    var settings = $.extend({
      scrolled: 'scrolled',
      animated: 'animated'
    }, options);

    var $menu = $(this),
        marginTop = null,
        scrollClasses = settings.scrolled + ' ' + settings.animated;

    function menuCatch() {

      // Update top margin
      if($menu.hasClass(settings.scrolled)) {
        $menu.removeClass(settings.scrolled);
        marginTop = parseFloat($menu.css('margin-top'));
        $menu.addClass(settings.scrolled);
      }

      // Checks scrollbar distance from top
      var scrollPos = parseFloat($(document).scrollTop());

      // Add classes if scroll position is larger than top margin
      return scrollPos > marginTop ? $menu.addClass(scrollClasses) : $menu.removeClass(scrollClasses);
    }

    menuCatch();

    $(window).on('scroll resize', menuCatch);
  };
})(jQuery);
