Element Catch - 1.0.4
==========

A jQuery plugin that catches an element as the page scrolls.



## Quick Start

Do this and style your selector with the `.scrolled` class...

```js
$('#menu').elementCatch();
```

...or define your own class name...

```js
$('#menu').elementCatch('my-scrolled-class-name');
```

...then add some styles.

```scss
.menu {
  transform: translateY(32px);
  position: absolute;
  transition: background-color 0.25s;

  &.scrolled {
    transform: translateY(0);
    position: fixed;
    background-color: #000;
  }
}
```
