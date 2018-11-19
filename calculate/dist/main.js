"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastCredit_1 = require("./source/fastCredit/fastCredit");
var longCredit_1 = require("./source/longCredit/longCredit");
var consumCredit_1 = require("./source/consumCredit/consumCredit");
var fastResult = new fastCredit_1.FastCredit();
document.getElementById('fast_btn').addEventListener('click', fastResult.calculateCredit);
var longResult = new longCredit_1.LongCredit();
document.getElementById('long_btn').addEventListener('click', longResult.calculateCredit);
var consumResult = new consumCredit_1.ConsumCredit();
document.getElementById('con_btn').addEventListener('click', consumResult.calculateCredit);
//# sourceMappingURL=main.js.map