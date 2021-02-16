const aforwait = require("./index.js");
const { aforSec, aforMin, aforInfinit, aforDays, aforHours, aforYears, aforDecades } = aforwait;
(async () => {
    console.log("i'm gonna wait 5 seconds and then tell you yee");
    await aforwait(5000); // await aforSec(5);
    console.log("yee");
})();
