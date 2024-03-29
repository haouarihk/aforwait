

const ms = 1
/**
 * 
 * @param time The Waiting time in ms.
 */
export default function afor(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * ms);
    })
}


const sec = 1000
/**
 * 
 * @param time The Waiting time in Minutes.
 */
export function aforSec(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * sec);
    })
}

const min = sec * 60
/**
 * 
 * @param time The Waiting time in Minutes.
 */
export function aforMin(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * min);
    })
}



const hour = min * 60
/**
 * 
 * @param time The Waiting time in Hours.
 */
export function aforHours(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * hour);
    })
}

const day = hour * 24
/**
 * 
 * @param time The Waiting time in Days.
 */
export function aforDays(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * day);
    })
}


const year = day * 356
/**
 * 
 * @param time The Waiting time in Years.
 */
export function aforYears(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * year);
    })
}


const decade = year * 10
/**
 * 
 * @param time The Waiting time in Decades.
 */
export function aforDecades(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * decade);
    })
}


const infinit = decade * Infinity;
/**
 * 
 * @param time The Waiting time in Infinite.
 */
export function aforInfinit(time: number): Promise<void> {
    return new Promise((solve) => {
        globalThis.setTimeout(solve, time * infinit);
    })
}