const aforwait = require("./lib/index.js");

const {
    aforSec,
    aforMin,
    aforInfinit,
    aforDays,
    aforHours,
    aforYears,
    aforDecades
} = aforwait;

(async () => {
    console.log("i'm gonna wait 5 seconds and then tell you yee")
    await aforSec(5) // await aforSec(5);
    console.log("yee")
})()