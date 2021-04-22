"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aforInfinit = exports.aforDecades = exports.aforYears = exports.aforDays = exports.aforHours = exports.aforMin = exports.aforSec = void 0;
const ms = 1;
/**
 *
 * @param time The Waiting time in ms.
 */
function afor(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * ms);
    });
}
exports.default = afor;
const sec = 1000;
/**
 *
 * @param time The Waiting time in Minutes.
 */
function aforSec(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * sec);
    });
}
exports.aforSec = aforSec;
const min = sec * 60;
/**
 *
 * @param time The Waiting time in Minutes.
 */
function aforMin(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * min);
    });
}
exports.aforMin = aforMin;
const hour = min * 60;
/**
 *
 * @param time The Waiting time in Hours.
 */
function aforHours(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * hour);
    });
}
exports.aforHours = aforHours;
const day = hour * 24;
/**
 *
 * @param time The Waiting time in Days.
 */
function aforDays(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * day);
    });
}
exports.aforDays = aforDays;
const year = day * 356;
/**
 *
 * @param time The Waiting time in Years.
 */
function aforYears(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * year);
    });
}
exports.aforYears = aforYears;
const decade = year * 10;
/**
 *
 * @param time The Waiting time in Decades.
 */
function aforDecades(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * decade);
    });
}
exports.aforDecades = aforDecades;
const infinit = decade * Infinity;
/**
 *
 * @param time The Waiting time in Infinite.
 */
function aforInfinit(time) {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * infinit);
    });
}
exports.aforInfinit = aforInfinit;
