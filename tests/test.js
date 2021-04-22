const {
    aforSec,
    aforMin,
    aforInfinit,
    aforDays,
    aforHours,
    aforYears,
    aforDecades
} = require("..");


(async () => {

    console.log("i'm gonna wait 5 seconds and then tell you yee")
    await aforSec(5)
    console.log("yee")

})()
