//Pas de functie minimum aan zodanig dat er ook meerdere waarden
//meegegeven kunnen worden bij het aanroepen van de functie, maak geen
//gebruik van Math.min

const minimum = function (...numbers)
{
let min = numbers[0];
for(let i=1; i < numbers.length;i++)
{
    if(numbers[i] < min)
    {
        min=numbers[i];
    }
}
return min;
}
console.log(min());