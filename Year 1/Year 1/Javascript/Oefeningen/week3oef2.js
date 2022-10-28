// https://ghostbin.com/0YedQ
let person = {
    constructor(firstname, lastname, dateOfBirth){
        this.firstname=firstname;            // <-- setter wordt aangeroepen
        this.lastname=lastname;                // <-- setter wordt aangeroepen
        this.dateOfBirth=dateOfBirth;        // <-- setter wordt aangeroepen
    },
    set firstname(firstname){
            this._firstname=firstname;
    },
    set lastname(lastname){
            this._lastname=lastname;
    },
    set dateOfBirth(dateOfBirth){
            this.dateOfBirth=dateOfBirth;
    },
    get firstname(){
        return this._firstname;
    },
    get lastname(){
        return this.lastname;
    },
    get dateOfBirth(){
        return this.dateOfBirth;
    },
    calculateAge(){
            let now = new Date();
            let birthdayThisYear=new Date(now.getFullYear(),
                    this.dateOfBirth.getMonth(),
                    this.dateOfBirth.getDate()
                );
            let differenceInYears =
                now.getFullYear() - this.dateOfBirth.getFullYear();
            if (now < birthdayThisYear){
                differenceInYears--;
            }
            return differenceInYears;
    },
    print: function(){
        console.log(`${this.firstname} ${this.lastname}, age =  ${this.calculateAge()}` );
    }
}
console.log(person.calculateAge());
person.print();
