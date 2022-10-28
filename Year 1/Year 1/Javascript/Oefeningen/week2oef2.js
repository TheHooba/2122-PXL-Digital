const isEven = (getal) => {
    if(getal === 0) {
        return true;
    }
    if(getal === 1) {
        return false;
    }
    return isEven(getal-2);
    
}
    console.log("isEven(4=...");
    console.log(isEven(4));
    console.log("isEven(10000)=...");
    console.log(isEven(10000));