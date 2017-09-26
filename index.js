"use srtict";

(function(window, creator) {
  window.cssDom = creator();
})(this, function() {
  let cssDom = function(selector) {
    return new cssDom.prototype.nodes(selector);
  };
  cssDom.prototype.nodes = function(selector) {
    let nodes;

    if (!selector) {
      return this;
    } else if (typeof selector === "string") {
      nodes = document.querySelectorAll(selector);
    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    } else {
      nodes = selector;
    }

    for (let i = 0; i < nodes.length; i++) {
      this[i] = nodes[i];
    }

    this.length = nodes.length;
  };

  cssDom.prototype.nodes.prototype = cssDom.prototype;

  cssDom.prototype.addClass = function(str) {
    let elem = this;
    for (let i = 0; i < elem.length; i++) {
      elem[i].classList
        ? elem[i].classList.add(str)
        : (elem[i].className += " " + str);
    }
  };

  return cssDom;
});
