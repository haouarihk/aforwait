import aforwait, {
    aforSec,
    aforMin,
    aforInfinit,
    aforDays,
    aforHours,
    aforYears,
    aforDecades
} from "./index.js"


(async () => {
    console.log("i'm gonna wait 5 seconds and then tell you yee")
    await aforwait(5000) // await aforSec(5);
    console.log("yee")
})()