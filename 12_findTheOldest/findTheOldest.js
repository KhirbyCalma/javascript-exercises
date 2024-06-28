function getAge(person) {
    return ("yearOfDeath" in person) ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldestPerson, person) => {
        if (getAge(person) > getAge(oldestPerson)) {
            return person;
        } 
        return oldestPerson;
    }, people[0]);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
