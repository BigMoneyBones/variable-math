console.log("Calculating the distance between 2 points");

let x = 2;
let y = 4;
let x1 = 3;
let y1 = 5;

console.log("\n");

console.log("distance = Math.sqrt((Math.pow(point.x - this.x,2)) + (Math.pow(point.y - this.y,2)))");

console.log("\n");

console.log("This equation above will determine the distance between point 1 (2,4) and point 2 (3,5).");

console.log("\n");

function Point(x,y) 
{
    this.x = x;
    this.y = y;

    this.distanceTo = function (point)
    {
        var distance = Math.sqrt((Math.pow(point.x - this.x,2)) + (Math.pow(point.y - this.y,2)))
        return distance;
    };
}

var newPoint = new Point (2,4);
var nextPoint = new Point (3,5);

console.log(newPoint.distanceTo(nextPoint))
