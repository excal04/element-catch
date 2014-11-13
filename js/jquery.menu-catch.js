// Menu Catch
// November 12, 2014
// The MIT License (MIT)
// Copyright (c) 2014 Dustin Dowell
// http://github.com/dustindowell22/menu-catch


// Note:
// + Use the scrolled class for changing the top margin.
// + Use the animated class for applying CSS animations.
// + Any anmation of the top margin will prevent the scrolled class from being removed when the scrollbar hits the top of the window.
// + If you must animate the position of the menu use translate.


(function ( $ ) {
	$.fn.menuCatch = function( scrolledClass, animatedClass ) {

		// ====================
		// Preferences
		// ====================

			// Menu selector
			var $menu = $( this );

			// Scrolled class name
			if( scrolledClass === undefined ) {
				scrolledClass = 'scrolled';
			}

			// Animated class name
			if( scrolledClass === undefined ) {
				animatedClass = 'animated';
			}

		// ====================


		// Placeholder for top margin
		var marginTop = null;

		// Update top margin
		// Note: The scrolled class might change the top margin which could prevent it from being removed or cause jumps when the scrollbar hits the top of the window.
		function updateMargin() {
			if( $menu.hasClass( scrolledClass ) ) {
				$menu.removeClass( scrolledClass );
				marginTop = parseInt( $menu.css( 'margin-top' ) );
				$menu.addClass( scrolledClass );
			}
			else {
				marginTop = parseInt( $menu.css( 'margin-top' ) );
			}
		}

		function menuCatch() {
			updateMargin();

			// Checks scrollbar distance from top
			// Note: Firefox checks from the HTML tag instead.
			var scrollPosHtml = parseInt( $( 'html' ).scrollTop() ); // Firefox
			var scrollPosBody = parseInt( $( 'body' ).scrollTop() ); // Everyone else

			// Use larger scrollbar position
			var scrollPos = null;
			if ( scrollPosHtml > scrollPosBody ) {
				scrollPos = scrollPosHtml;
			}
			else {
				scrollPos = scrollPosBody;
			}

			// Add scrolled class if scroll position is larger than top margin
			if( scrollPos > marginTop ) {
				$menu.addClass( scrolledClass );
				$menu.addClass( animatedClass );
			}
			else if( scrollPos < marginTop ) {
				$menu.removeClass( scrolledClass );
				$menu.removeClass( animatedClass );
			}
		}

		// Execute function
		$( document ).on( 'ready', menuCatch );
		$( window ).on( 'scroll', menuCatch );
		$( window ).on( 'resize', menuCatch );
	};
}( jQuery ));
