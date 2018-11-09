'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var textbox = document.getElementById('textarea');

var TextArea = function () {
    function TextArea() {
        _classCallCheck(this, TextArea);
    }

    _createClass(TextArea, [{
        key: 'resizeTextarea',
        value: function resizeTextarea() {
            textarea.addEventListener("input", function () {
                var maxrows = 5;
                var minrows = 2;
                var overflOn = 'auto';
                var overfOff = 'hidden';
                var txt = textbox.value;
                var rows = void 0;
                var textarea = document.getElementById('textarea');
                textarea.style.overflow = overfOff;
                var arraytxt = txt.split('\n');
                if (arraytxt <= minrows) {
                    rows = minrows;
                } else {
                    rows = arraytxt.length;
                }
                if (rows > maxrows) {
                    textarea.style.overflow = overflOn;
                    textbox.rows = maxrows;
                } else {
                    textbox.rows = rows;
                }
            });
        }
    }]);

    return TextArea;
}();

var test = new TextArea();
textbox.addEventListener('keyup', test.resizeTextarea);