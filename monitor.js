let osu = require('os-utils');
const USAGE_PERCENT = 100;
const TOTAL_PERCENT = 100;
const LIMIT_USAGE_PERCENT = 15;
function intervalFunc() {
    osu.cpuUsage((v)=> {
        if ((v * USAGE_PERCENT) < LIMIT_USAGE_PERCENT) {
            console.log("\x1b[32m", 'CPU Usage (%): ' + (v * USAGE_PERCENT).toFixed(2));
        } else {
            console.log("\x1b[31m", 'CPU Usage (%): ' + (v * USAGE_PERCENT).toFixed(2));
        }
    });
    console.log("\x1b[32m", 'RAM Usage (%): ' + (TOTAL_PERCENT - (osu.freememPercentage() * USAGE_PERCENT)).toFixed(2));
    console.log("\x1b[37m",'---------------------------------- ');
}

setInterval(intervalFunc, 500);