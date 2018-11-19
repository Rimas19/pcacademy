import Param from "../../param";

export class FastCredit extends Param {
    param: Param;

    calculateCredit() {
        let parameter = new FastCredit();
        parameter.getFastParameter();
        const maxMontx = 24;

        if (parameter.period >= maxMontx)
            parameter.period = maxMontx;

        let monthlypayment = Math.round((((parameter.credit / 100) * parameter.percent) + parameter.credit) / parameter.period);
        const maxCredit = 5000;
        if (parameter.credit >= maxCredit)
            parameter.credit = maxCredit;

        let result = new FastCredit();
        result.fastResult(parameter.percent, parameter.period, monthlypayment);

    }

}

document.getElementById("fast_btn").onclick = (e) => {
    if (e.target != null) {
        (<HTMLInputElement>document.getElementById("period")).style.display = "none";
        (<HTMLInputElement>document.getElementById("percent")).style.display = "none";
        (<HTMLInputElement>document.getElementById("credit")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelc")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelp")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelper")).style.display = "none";
        (<HTMLInputElement>document.getElementById("calc")).style.display = "none";
        (<HTMLInputElement>document.getElementById("res")).style.display = "block";
        (<HTMLInputElement>document.getElementById("back")).style.display = "block";

    }
}


