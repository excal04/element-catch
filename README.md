Menu Catch - 1.0.2
==========

A jQuery plugin that's intended to work with CSS to "catch" the navigation as the page scrolls.



## Quick Start

Do this...

```js
$('#menu').menuCatch();
```

...or this.

```js
$('#menu').menuCatch({
  scrolled: 'my-scrolled-class-name',
  animated: 'my-animated-class-name'
});
```

Then do something like this.

```scss
.menu {
  margin-top: 32px;
  transition: background-color 0.25s;

  &.scrolled {
    margin-top: 0;
    position: fixed;
  }

  &.animated {
    background-color: #000;
  }
}
```



## Using the "scrolled" Class

Use the scrolled class for changing the top margin.

Why?

In order to check the original top margin and not the margin applied from the scrolled class, the scrolled class has to be temporarily removed to prevent the menu from getting stuck to the top of the window in the case that the scrolled class sets the top margin to 0.



## Using the "animated" Class

Use the animated class for applying transitions and animations.

Why?

This class is not temporarily removed like the scrolled class, so transitions and animations won't abruptly stop.
