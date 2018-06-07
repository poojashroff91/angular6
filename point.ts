export class Point {
    
    constructor(private _x?: number, private _y?: number){
    }

    draw(){
        console.log("X is: " + this._x + " Y is: " + this._y);
    }

    // get x(){
    //     return this._x;
    // }

    // set x(value){
    //     if(value < 0){
    //         throw new Error('value cannot be less than 0.');
    //     }
    //     this._x = value;
    // }
}
