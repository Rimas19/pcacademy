import Param from "../../param";

export class ConsumCredit extends Param {
    param: Param;

    dropDownList() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    calculateCredit() {
        let parameter = new ConsumCredit();
        parameter.getConsumParameter();
        const monthMax = 30;
        if (parameter.period > monthMax) {
            parameter.period = monthMax;
        }

        const credMax = 10000;
        if (parameter.credit > credMax) {
            parameter.credit = credMax;
        }

        let resMonth = Math.round(((parameter.credit * (parameter.percent / 100)) + parameter.credit) / parameter.period);
        let result = new ConsumCredit();
        result.consumResult(parameter.percent, resMonth, parameter.period);
        (<HTMLInputElement>document.getElementById("credit")).style.display = "none";
        (<HTMLInputElement>document.getElementById("period")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelc")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelp")).style.display = "none";
        (<HTMLInputElement>document.getElementById("calc")).style.display = "none";
        (<HTMLInputElement>document.getElementById("sel")).style.display = "none";
        (<HTMLInputElement>document.getElementById("res")).style.display = "block";
        (<HTMLInputElement>document.getElementById("back")).style.display = "block";
    }
}


// document.getElementById("con_btn").onclick = function (e) {
//     if (e.target != document.getElementById('credit')) {
//         (<HTMLInputElement>document.getElementById("credit")).style.display = "none";
//         (<HTMLInputElement>document.getElementById("period")).style.display = "none";
//         (<HTMLInputElement>document.getElementById("labelc")).style.display = "none";
//         (<HTMLInputElement>document.getElementById("labelp")).style.display = "none";
//         (<HTMLInputElement>document.getElementById("calc")).style.display = "none";
//         (<HTMLInputElement>document.getElementById("sel")).style.display = "none";
//         (<HTMLInputElement>document.getElementById("res")).style.display = "block";
//         (<HTMLInputElement>document.getElementById("back")).style.display = "block";
//     }

// }


