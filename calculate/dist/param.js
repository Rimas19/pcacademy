"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Param = /** @class */ (function () {
    function Param() {
    }
    Param.prototype.getFastParameter = function () {
        var percentValue = document.getElementById("percent").value;
        this.percent = parseInt(percentValue);
        var creditValue = document.getElementById("credit").value;
        this.credit = parseInt(creditValue);
        var periodValue = document.getElementById("period").value;
        this.period = parseInt(periodValue);
    };
    Param.prototype.getLongParameter = function () {
        var percentValue = document.getElementById("percent").value;
        this.percent = parseInt(percentValue);
        var periodValue = document.getElementById("period").value;
        this.period = parseInt(periodValue);
        var salaryValue = document.getElementById("salar").value;
        this.salary = parseInt(salaryValue);
        var childrenValue = document.getElementById("child").value;
        this.children = parseInt(childrenValue);
    };
    Param.prototype.getConsumParameter = function () {
        var itemp = document.getElementById("id_of_select").value;
        this.percent = (parseInt(itemp));
        var periodValue = document.getElementById("period").value;
        this.period = parseInt(periodValue);
        var creditValue = document.getElementById("credit").value;
        this.credit = parseInt(creditValue);
    };
    Param.prototype.fastResult = function (perc, per, pay) {
        document.getElementById('percentag').innerHTML = (perc.toString() + " %");
        document.getElementById('monthly').innerHTML = (pay.toString() + " euros");
        document.getElementById('resperiod').innerHTML = per.toString();
    };
    Param.prototype.longResult = function (perc, mcred, mnum) {
        document.getElementById('percentag').innerHTML = (perc.toString() + " %");
        document.getElementById('mcred').innerHTML = (mcred.toString() + " euros");
        document.getElementById('mnum').innerHTML = mnum.toString();
    };
    Param.prototype.consumResult = function (perc, resMonth, mnum) {
        document.getElementById('percentag').innerHTML = (perc.toString() + " %");
        document.getElementById('resmon').innerHTML = (resMonth.toString() + " euros");
        document.getElementById('mnum').innerHTML = mnum.toString();
    };
    return Param;
}());
exports.default = Param;
//# sourceMappingURL=param.js.map