// use a interface, purely for description, cannot have implementation
// interface Point {
// 	x :number, 
// 	y: number

// 	// draw: () => void
// }


// cohesion
class Point {
	// in c# we can have multiple constructor but in ts no
//  but we can make it optional by add "?"
	constructor(private _x?: number, private _y?:number) {
		//  this enough, it will generate the field and assign values
	}


	draw () {
		console.log('x' + this.x);
	}
//  this is not getX(), is a field not a method anymore. this is a getter
	get _X() {
		return this.x
	}

	set _X(value) {
		if (value < 0)
			throw new Error('');
			
	}


	
	getDistance (another: Point) {
		// 
	}
}




