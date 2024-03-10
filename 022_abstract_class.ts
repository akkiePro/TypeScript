abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}
    
    getFilters() : Array<string> {
        const x = new Array<string>;
        x.push("baby face");
        x.push("Jaipur");

        return x;
    }

    abstract getSepia(): void;  // no definition for function
}

// const tp = new TakePhoto("auto", "none");  // compile-error. due to abstract class, can't create object

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ) {
            super(cameraMode, filter);
        }
        
    getSepia(): void {
        console.log("sepia implemeted");
    }
}
const ig = new Instagram("auto", "none", 13);
ig.getSepia();  //  sepia implemeted
console.log(ig.getFilters());   // [ 'baby face', 'Jaipur' ]








export {}