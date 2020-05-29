let findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        person.age = (person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
        return oldest.age > person.age ? oldest : person;
    }, people[0]);
}

module.exports = findTheOldest
