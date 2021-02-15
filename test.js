import *  as aforwait from "./lib/index.js";


(async () => {
    console.log("i'm gonna wait 5 seconds and then tell you yee")
    await aforwait.aforSec(5) // await aforSec(5);
    console.log("yee")
})()