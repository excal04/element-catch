
// named elementCatch to stay consistent with the original
HTMLElement.prototype.elementCatch = function() {
    console.log("hi");
}


window.onscroll = function(ev) {
    var elem = document.querySelector(".menu");
    elem.elementCatch();
}
