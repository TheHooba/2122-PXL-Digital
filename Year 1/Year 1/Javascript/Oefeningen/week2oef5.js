//Maak de functie maakRij die twee argumenten min en max heeft. De functie geeft een
//array terug met de gehele getallen gelegen tussen min en max (beide inclusief).
//Pas de functie aan met een optioneel argument stap, dit argument heeft default waarde 1,
//stap bevat de tussenstap tussen 2 waarden in de teruggegeven array.
//maakRij(1,5,2) geeft [1,3,5] terug
//maakRij(5,1-2) geeft [5,3,1] terug.

function maakRij(min, max, stap){
    if(stap === undefined){
        stap = 1;
    }
    let array = [];
    for(let i=min; i<max+1 ;i = i+stap){
        array= array.concat(i);
    }
    return array;
}

console.log(maakRij(5,30,5));