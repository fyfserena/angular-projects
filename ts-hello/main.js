// some variable
// let a: number;
// let b: boolean;
// let c: string;
// let e: number[] = [1,2,3];
// lef f: any[] = [1: true, 2: false]
// eunm Color {Red=0, Green=1, Blue=2};
// let backgroundColor = Color.Red;
// let message = 'abc';
// let endsWithC = message.endsWith('c');
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// in js
// let log = function(message){
// 	console.log(message);
// }
// // in js
// let dolog = (message) => console.log(message);
// use a interface, purely for description, cannot have implementation
// interface Point {
// 	x :number, 
// 	y: number
// 	// draw: () => void
// }
// cohesion
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x' + this.x);
    };
    Point.prototype.getDistance = function (another) {
        // 
    };
    return Point;
}());
var p = new Point();
p.x = 1;
p.y = 2;
p.draw();
