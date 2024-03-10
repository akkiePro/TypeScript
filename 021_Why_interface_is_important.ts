interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void;
}

class YouTube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string
        ) {}
    }

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createStory(): void {
        console.log("story implemented");
    }
}