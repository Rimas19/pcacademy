let os = require('os');
os.totalmem();
os.freemem();
let USAGE_PERCENT = 100;
let TOTAL_PERCENT = 100;
let LIMIT_USAGE_PERCENT = 15;
let ramPercent = (TOTAL_PERCENT - (os.freemem / os.totalmem) * USAGE_PERCENT);
let osu = require('os-utils');
function intervalFunc() {
    osu.cpuUsage(function (v) {
        if ((v * USAGE_PERCENT) < LIMIT_USAGE_PERCENT) {
            console.log("\x1b[32m", 'CPU Usage (%): ' + (v * USAGE_PERCENT));
        } else {
            console.log("\x1b[31m", 'CPU Usage (%): ' + (v * USAGE_PERCENT));
        }
    });
    console.log("\x1b[32m", 'RAM Usage (%): ' + (TOTAL_PERCENT - (osu.freememPercentage() * USAGE_PERCENT)));
    console.log('---------------------------------- ');
}

setInterval(intervalFunc, 500);