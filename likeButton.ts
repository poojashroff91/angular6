export class LikeButton {
    
    constructor(private _likes?: number, private _isSelected?: boolean){
    }

    onClick(){
        this._likes += (this._isSelected) ? -1: 1;
        this._isSelected = !this._isSelected;
    }

    get likes(){
        return this._likes;
    }

    get isSelected(){
        return this._isSelected;
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
