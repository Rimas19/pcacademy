export default  abstract  class Param {
    credit : number;
    period : number;
    percent : number;
    salary :number;
    children :number;

    getFastParameter() {
        let percentValue = (<HTMLInputElement>document.getElementById("percent")).value;
        this.percent = parseInt(percentValue);
        let creditValue = (<HTMLInputElement>document.getElementById("credit")).value;
        this.credit = parseInt(creditValue);
        let periodValue = (<HTMLInputElement>document.getElementById("period")).value;
        this.period = parseInt(periodValue);
    }
   
    getLongParameter() {
        let percentValue = (<HTMLInputElement>document.getElementById("percent")).value;
        this.percent = parseInt(percentValue);
        let periodValue = (<HTMLInputElement>document.getElementById("period")).value;
        this.period = parseInt(periodValue);
        let salaryValue = (<HTMLInputElement>document.getElementById("salar")).value;
        this.salary = parseInt(salaryValue);
        let childrenValue = (<HTMLInputElement>document.getElementById("child")).value;
        this.children = parseInt(childrenValue);
    }

    getConsumParameter(){
        let itemp = (<HTMLInputElement>document.getElementById("id_of_select")).value;
        this.percent = (parseInt(itemp))
        let periodValue = (<HTMLInputElement>document.getElementById("period")).value;
        this.period = parseInt(periodValue);
        let creditValue = (<HTMLInputElement>document.getElementById("credit")).value;
        this.credit = parseInt(creditValue);
    }

     fastResult(perc :number, per :number, pay :number){
        document.getElementById('percentag').innerHTML = (perc.toString() + " %");
        document.getElementById('monthly').innerHTML = (pay.toString() + " euros");
        document.getElementById('resperiod').innerHTML = per.toString();
    }

    longResult(perc :number, mcred :number, mnum :number){
        document.getElementById('percentag').innerHTML = (perc.toString() + " %");
        document.getElementById('mcred').innerHTML = (mcred.toString() + " euros");
        document.getElementById('mnum').innerHTML = mnum.toString();
    }

    consumResult(perc :number, resMonth :number, mnum :number){
        document.getElementById('percentag').innerHTML = (perc.toString() + " %");
        document.getElementById('resmon').innerHTML = ( resMonth.toString() + " euros");
        document.getElementById('mnum').innerHTML = mnum.toString();
    }
}

