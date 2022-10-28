'use strict';

class InputError extends Error {}

class Vec{
    constructor(x, y){
        if(typeof x != 'number' || typeof y != 'number'){
            throw new InputError();
        }
        this._x=x;
        this._y=y;
    }

    plus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError();
        }
        return new Vec(this._x+vec._x, this._y+vec._y);
    }

    minus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError();
        }
        return new Vec(this._x-vec._x, this._y-vec._y);
    }

    get length(){
        return Math.sqrt(this._x*this._x+this._y*this._y);
    }
    toString(){
        return `(${this._x},${this._y})`;
    }
}


class PolyLine{
    constructor(){
        this._vecs=[];
    }
    addVec(vec){
        if( !(vec instanceof Vec)) {
            throw new InputError();
        }
        this._vecs.push(vec);
    }
    /* toString */
}
try{
    let polyLine=new PolyLine();
    polyLine.addVec(new Vec(1,2));
    polyLine.addVec(new Vec(2,3));
    polyLine.addVec(new Vec(5,7));
    console.log(polyLine.toString());
    polyLine.addVec("oops");
} catch(error){
    console.log("error");
}
console.log("done");