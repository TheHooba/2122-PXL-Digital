let person = {
    firstname:"tim",
    lastname:"geyskens",
    dateOfBirth: new Date('March 1, 2001'),
    calculateAge: function(){
            let now = new Date();
            let birthdayThisYear =
                new Date(now.getFullYear(),
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