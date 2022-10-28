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
    // gebruik van de function plus:
    // let v=new Vec(1,2);
    // let v2=new Vec(3,4);
    // let v3=v.plus(v2);     (4,6)   v ~ this, v2 ~ vec
    plus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError();
        }
        return new Vec(this._x+vec._x, this._y+vec._y);
    }
    /* minus, toString, get length ... */


}

try{
    let v=new Vec(2,3);
    let v2=new Vec(3,4);
    let v3=v.plus(v2);
    let v4=v.plus(new Date()); // <-- error wordt opgeworpen
    console.log(v.toString());

} catch(error){
    console.log("error");
}
console.log("done");