const comments = class all {
    constructor() {
        if (!('placeholder' in document.createElement('input'))) { //如果浏览器原生支持placeholder
            setTimeout(() => {
                this.placeholder();
            }, 500)
        } else {
            this.placeholder = null;
        }
    }
    placeholder() {
        /* 解决IE9  placeholder 不显示*/
        function target(e) {
            var e = e || window.event;
            return e.target || e.srcElement;
        };

        function _getEmptyHintEl(el) {
            var hintEl = el.hintEl;
            return hintEl && g(hintEl);
        };

        function blurFn(e) {
            var el = target(e);
            if (!el || el.tagName != 'INPUT' && el.tagName != 'TEXTAREA') return; //IE下，onfocusin会在div等元素触发
            if (placeholder !== el.value && el.value == '') {
                el.value = placeholder;
            }
        };

        function focusFn(e) {
            var el = target(e);
            if (!el || el.tagName != 'INPUT' && el.tagName != 'TEXTAREA') return; //IE下，onfocusin会在div等元素触发
            var placeholder = el.getAttribute('placeholder');
            if (placeholder === el.value) {
                el.value = ""
            }
        };
        if (document.addEventListener) { //ie
            document.addEventListener('focus', focusFn, true);
            document.addEventListener('blur', blurFn, true);
        } else {
            document.attachEvent('onfocusin', focusFn);
            document.attachEvent('onfocusout', blurFn);
        }

        var elss = [document.getElementsByTagName('input'), document.getElementsByTagName('textarea')];
        for (var n = 0; n < 2; n++) {
            var els = elss[n];
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                var placeholder = el.getAttribute('placeholder');
                el.value = placeholder;
            }
        }

    }
}

export default new comments();