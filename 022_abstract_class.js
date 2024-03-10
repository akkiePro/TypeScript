"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getFilters() {
        const x = new Array;
        x.push("baby face");
        x.push("Jaipur");
        return x;
    }
}
// const tp = new TakePhoto("auto", "none");  // compile-error. due to abstract class, can't create object
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia implemeted");
    }
}
const ig = new Instagram("auto", "none", 13);
ig.getSepia();
console.log(ig.getFilters());
