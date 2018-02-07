export const utils = state => {

}

(function() {
    function _$(els) {
        this.element = [];
        for (var i = 0, len = els.length; i < len; i++) {
            var element = els[i];
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this.element.push(element);
        }
        return this
    }
    _$.prototype = {
        fun1(fn) {
            for (var i = 0, len = this.element.length; i < len; i++) {
                fn.call(this, this.element[i]);
            }
            return this;
        }
    }
    window.$ = function() {
        return new _$(arguments)
    }
})()