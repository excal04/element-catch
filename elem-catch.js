
// named elementCatch to stay consistent with the original
HTMLElement.prototype.elementCatch = elementCatch;

function elementCatch(scrolledClass) {
    scrolledClass = scrolledClass || "scrolled";

    var $this = this;

    var distFromTop = $this.offsetTop;

    var scrollPosition = document.body.scrollTop;

    if (scrollPosition > distFromTop) {
        $this.classList.add(scrolledClass);
    } else {    // element is within page
        $this.classList.remove(scrolledClass);
    }



    return this;
}
//
// window.onscroll = function(ev) {
//     var elem = document.querySelector(".menu");
//     elem.elementCatch();
// }
