let os = require('os');
os.totalmem();
os.freemem();
let ramPercent = (100 -(os.freemem/os.totalmem)*100);
let osu = require('os-utils');
function intervalFunc() {
    osu.cpuUsage(function(v){
        if((v*100)<15){
            console.log("\x1b[32m", 'CPU Usage (%): ' + (v*100) );
        }else{
            console.log("\x1b[31m", 'CPU Usage (%): ' + (v*100) );
        }
    });
        console.log("\x1b[32m", 'RAM Usage (%): ' + (100 - (osu.freememPercentage()*100)) );
        console.log('---------------------------------- ');
}
              
setInterval(intervalFunc, 500);