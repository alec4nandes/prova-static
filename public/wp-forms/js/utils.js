"use strict";

const WPFormsUtils =
    window.WPFormsUtils ||
    (function (e) {
        return {
            triggerEvent: function (t, n, r = []) {
                n = new e.Event(n);
                return t.trigger(n, r), n;
            },
        };
    })((document, window, jQuery));
