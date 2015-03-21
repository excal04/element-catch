# Element Catch - 1.0.5
# March 20, 2015
# The MIT License (MIT)
# Copyright (c) 2015 Dustin Dowell
# http:#github.com/dustindowell22/element-catch
# =============================================


(($) ->
  $.fn.elementCatch = (scrolledClass = 'scrolled') ->

    # Cache object
    $this = $(this)

    # Distance from top of document
    distanceTop = $this.offset().top

    # Element Catch
    elementCatch = ->

      # Scrollbar distance from top of document
      scrollPosition = $(document).scrollTop();

      # Add class if scroll position is larger than distance from top of document
      if scrollPosition > distanceTop
        if not $this.hasClass(scrolledClass)
          $this.addClass(scrolledClass)
      else
        $this.removeClass(scrolledClass)

    # Call during runtime
    elementCatch()

    # Call on events
    $(window).on('scroll resize orientationchange', elementCatch)

    # Don't break the chain
    return this
) jQuery
