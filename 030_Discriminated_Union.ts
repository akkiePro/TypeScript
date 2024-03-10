interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;   // introduces Rectangle feature late

function getTrueShape(shape : Shape) {
    if (shape.kind === "circle")
        return Math.PI * shape.radius ** 2;     // Pi*r^2

    return shape.side * shape.side;     // side^2
    // this function will fail bcz we havn't implemented Rectangle feature.
}

// another way using switch
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side * shape.side;

        case "rectangle":
            return shape.length * shape.width;

        default:
            const _defaultforshape: never = shape;      // this technique is known as exhaustiveCheck
            return _defaultforshape;
    }
}