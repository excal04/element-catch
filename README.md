elem-catch.js
==========

Plugin written in CoffeeScript converted to JS just cuz :). Inspired by [this](https://github.com/dustindowell22/element-catch)

A jQuery plugin that catches an element as the page scrolls.


## Quick Start

Do this and style your selector with the `.scrolled` class...

```coffeescript
$('#menu').elementCatch()
```

...or define your own class name...

```coffeescript
$('#menu').elementCatch('my-scrolled-class-name')
```

...then add some styles.

```scss
.menu {
  width: 100%;
  transform: translateY(32px);
  position: absolute;

  &.scrolled {
    transform: translateY(0);
    position: fixed;
  }
}
```
