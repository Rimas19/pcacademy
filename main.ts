import { FastCredit } from "./source/fastCredit/fastCredit";
import { LongCredit } from "./source/longCredit/longCredit";
import { ConsumCredit } from "./source/consumCredit/consumCredit";

let fastResult = new FastCredit();
document.getElementById("fast_btn").addEventListener('click', fastResult.calculateCredit);

// let longResult = new LongCredit();
// document.getElementById("btn").addEventListener('click', longResult.calculateCredit);

// let consumResult = new ConsumCredit();
// document.getElementById("con_btn").addEventListener('click', consumResult.calculateCredit);
