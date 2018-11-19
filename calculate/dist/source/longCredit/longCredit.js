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
var LongCredit = /** @class */ (function (_super) {
    __extends(LongCredit, _super);
    function LongCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongCredit.prototype.calculateCredit = function () {
        var parameter = new LongCredit();
        parameter.getLongParameter();
        var earnings = 600;
        var childMoney = 30 * parameter.children;
        var maxMonth = 360;
        if (parameter.period >= maxMonth)
            parameter.period = maxMonth;
        var cost = earnings + childMoney;
        var monthPayment = parameter.salary - cost;
        var credit = monthPayment * parameter.period;
        var interest = (credit / 100 * parameter.percent) / 12;
        var maxCredit = Math.round(credit - (interest * parameter.period));
        var result = new LongCredit();
        result.longResult(parameter.percent, maxCredit, parameter.period);
    };
    return LongCredit;
}(param_1.default));
exports.LongCredit = LongCredit;
document.getElementById("long_btn").onclick = function (e) {
    if (e.target != null) {
        document.getElementById("percent").style.display = "none";
        document.getElementById("salar").style.display = "none";
        document.getElementById("period").style.display = "none";
        document.getElementById("child").style.display = "none";
        document.getElementById("labelp").style.display = "none";
        document.getElementById("labelch").style.display = "none";
        document.getElementById("labels").style.display = "none";
        document.getElementById("labelper").style.display = "none";
        document.getElementById("res").style.display = "block";
        document.getElementById("back").style.display = "block";
        document.getElementById("long_btn").style.display = "none";
        document.getElementById("xx").style.display = "none";
        document.getElementById("mcred").style.display = "block";
        document.getElementById("mnum").style.display = "block";
    }
};
//# sourceMappingURL=longCredit.js.map