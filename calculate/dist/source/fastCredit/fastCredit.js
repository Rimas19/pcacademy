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
var FastCredit = /** @class */ (function (_super) {
    __extends(FastCredit, _super);
    function FastCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FastCredit.prototype.calculateCredit = function () {
        var parameter = new FastCredit();
        parameter.getFastParameter();
        var maxMontx = 24;
        if (parameter.period >= maxMontx)
            parameter.period = maxMontx;
        var monthlypayment = Math.round((((parameter.credit / 100) * parameter.percent) + parameter.credit) / parameter.period);
        var maxCredit = 5000;
        if (parameter.credit >= maxCredit)
            parameter.credit = maxCredit;
        var result = new FastCredit();
        result.fastResult(parameter.percent, parameter.period, monthlypayment);
    };
    return FastCredit;
}(param_1.default));
exports.FastCredit = FastCredit;
document.getElementById("fast_btn").onclick = function (e) {
    if (e.target != null) {
        document.getElementById("period").style.display = "none";
        document.getElementById("percent").style.display = "none";
        document.getElementById("credit").style.display = "none";
        document.getElementById("labelc").style.display = "none";
        document.getElementById("labelp").style.display = "none";
        document.getElementById("labelper").style.display = "none";
        document.getElementById("calc").style.display = "none";
        document.getElementById("res").style.display = "block";
        document.getElementById("back").style.display = "block";
    }
};
//# sourceMappingURL=fastCredit.js.map