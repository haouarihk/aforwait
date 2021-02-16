const {
    afor,
    aforSec,
    aforMin,
    aforInfinit,
    aforDays,
    aforHours,
    aforYears,
    aforDecades
} = require("./lib/index");


(async () => {

    console.log("i'm gonna wait 5 seconds and then tell you yee")
    await afor(5000) // await aforSec(5);
    console.log("yee")

})()
