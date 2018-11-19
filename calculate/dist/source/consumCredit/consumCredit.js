"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var param_1 = require("../../param");
var ConsumCredit = /** @class */ (function (_super) {
    __extends(ConsumCredit, _super);
    function ConsumCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsumCredit.prototype.dropDownList = function () {
        document.getElementById("myDropdown").classList.toggle("show");
    };
    ConsumCredit.prototype.calculateCredit = function () {
        var parameter = new ConsumCredit();
        parameter.getConsumParameter();
        var monthMax = 30;
        if (parameter.period > monthMax) {
            parameter.period = monthMax;
        }
        var credMax = 10000;
        if (parameter.credit > credMax) {
            parameter.credit = credMax;
        }
        var resMonth = Math.round(((parameter.credit * (parameter.percent / 100)) + parameter.credit) / parameter.period);
        var result = new ConsumCredit();
        result.consumResult(parameter.percent, resMonth, parameter.period);
    };
    return ConsumCredit;
}(param_1.default));
exports.ConsumCredit = ConsumCredit;
document.getElementById("con_btn").onclick = function (e) {
    if (e.target != null) {
        document.getElementById("credit").style.display = "none";
        document.getElementById("period").style.display = "none";
        document.getElementById("labelc").style.display = "none";
        document.getElementById("labelp").style.display = "none";
        document.getElementById("calc").style.display = "none";
        document.getElementById("sel").style.display = "none";
        document.getElementById("res").style.display = "block";
        document.getElementById("back").style.display = "block";
    }
};
//# sourceMappingURL=consumCredit.js.map