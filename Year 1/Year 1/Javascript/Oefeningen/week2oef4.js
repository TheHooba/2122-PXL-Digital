// Het n’e symbool uit de string woord kan teruggevonden worden via woord[n], de lengte
//van woord wordt gegeven door woord.length. Schrijf de functie telB om te tellen hoeveel
//keer de letter “B” voorkomt in een string.
//Schrijf ook de functie telChar, deze functie heeft een woord en een symbool als argument en
//geeft het aantal keer dat het symbool in het woord voorkomt terug.
//Pas de functie telB aan zodanig dat deze de functie telChar aanroept.


const countB = word => countChar(word.toUpperCase(), "B");

const countChar = (word, char) => word.indexOf(char) === -1 ? 0 : 1 + countChar(word.substr(word.indexOf(char) + 1), char);

console.log(countB("5 B B b B b's"));