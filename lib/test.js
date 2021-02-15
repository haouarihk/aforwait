import aforwait from "./index.js";
(async () => {
    console.log("i'm gonna wait 5 seconds and then tell you yee");
    await aforwait(5000);
    console.log("yee");
})();
