
import Param from '../../param';


export class LongCredit extends Param {
    param : Param;

  calculateCredit() {
    let parameter = new LongCredit();
    parameter.getLongParameter();
        const earnings = 600;
        let childMoney = 30 * parameter.children;
        const maxMonth = 360;

        if (parameter.period >= maxMonth) 
        parameter.period = maxMonth;
      
        let cost = earnings + childMoney;
        let monthPayment = parameter.salary - cost;
        let credit = monthPayment * parameter.period;
        let interest = (credit / 100 * parameter.percent) / 12;
        let maxCredit = Math.round(credit - (interest * parameter.period));

         let result = new LongCredit();
         result.longResult(parameter.percent,maxCredit,parameter.period);
     }
}

document.getElementById("btn").onclick =  (e:any) => {
   
    if (e.target != document.getElementById('percent'))
   {
        (<HTMLInputElement>document.getElementById("percent")).style.display = "none";
        (<HTMLInputElement>document.getElementById("salar")).style.display = "none";
        (<HTMLInputElement>document.getElementById("period")).style.display = "none";
        (<HTMLInputElement>document.getElementById("child")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelp")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelch")).style.display = "none";
       (<HTMLInputElement>document.getElementById("labels")).style.display = "none";
        (<HTMLInputElement>document.getElementById("labelper")).style.display = "none";      
        (<HTMLInputElement>document.getElementById("res")).style.display = "block";
        (<HTMLInputElement>document.getElementById("back")).style.display = "block";
        (<HTMLInputElement>document.getElementById("btn")).style.display = "none";
        (<HTMLInputElement>document.getElementById("xx")).style.display = "none";
        (<HTMLInputElement>document.getElementById("mcred")).style.display = "block";
        (<HTMLInputElement>document.getElementById("mnum")).style.display = "block";


    } 
}





