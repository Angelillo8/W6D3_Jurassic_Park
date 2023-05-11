const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinosaurs = []
};

Park.prototype.numberOfDinosaurs = function () {
    return this.collectionOfDinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const dinosaurIndex = this.collectionOfDinosaurs.indexOf(dinosaur);
    if (dinosaurIndex !== -1) {
        this.collectionOfDinosaurs.splice(dinosaurIndex, 1)
    };
};

Park.prototype.findMostPopularDinosaur = function () {
    let mostPopularDinosaur = undefined;
    let dinosaurPopularity = 0;
    for (const dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.guestsAttractedPerDay > dinosaurPopularity) {
            dinosaurPopularity = dinosaur.guestsAttractedPerDay;
            mostPopularDinosaur = dinosaur;
        };
    };
    return mostPopularDinosaur;
};

Park.prototype.findAllDinosaurBySpecie = function (specieToFind) {
    let dinosaursBySpecie = [];
    for (const dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.species === specieToFind) {
            dinosaursBySpecie.push(dinosaur);
        };
    };
    return dinosaursBySpecie;
};

Park.prototype.getTotalVisitorsPerDay = function () {
    let sumVisitors = 0;
    for (const dinosaur of this.collectionOfDinosaurs) {
        sumVisitors += dinosaur.guestsAttractedPerDay
    };
    sumVisitors = sumVisitors - (sumVisitors * 0.2);
    return sumVisitors;
};

Park.prototype.getTotalVisitorsPerYear = function () {
    const totalVisitorsPerYear = this.getTotalVisitorsPerDay() * 260;
    return totalVisitorsPerYear;
};;

Park.prototype.getTotalRevenue = function () {
    const totalRevenuePerYear = this.getTotalVisitorsPerYear() * this.ticketPrice;
    return totalRevenuePerYear;
};

Park.prototype.removeDinosaurBySpecies = function (speciesToDelete) {
    let newDinosaurArray = [];
    newDinosaurArray = this.collectionOfDinosaurs.filter( function (dinosaur){
        return dinosaur.species !== speciesToDelete
    }); // Another way of doing it doon below.
    // for (const dinosaur of this.collectionOfDinosaurs) {
    //     if (dinosaur.species !== speciesToDelete) {
    //         newDinosaurArray.push(dinosaur)
    //     }
    // }
    this.collectionOfDinosaurs = newDinosaurArray;
};

Park.prototype.countDinosaursByDiet = function () {
    let dietObject = {};
    for (dinosaur of park.collectionOfDinosaurs){
        if (dinosaur.diet in dietObject === false) {
            dietObject[dinosaur.diet] = 0;
        }
        dietObject[dinosaur.diet] += 1;
    }
    return dietObject;
};

module.exports = Park;

// BORRALO DESPUES
const Dinosaur = require('../models/dinosaur.js');
const park = new Park('Parque Jurasico de comarca de la Cepeda', 35)

const dinosaur1 = new Dinosaur("Brachiosaurus", "Herbivorous", 50)
const dinosaur2 = new Dinosaur("Velociraptor", "Carnivorous", 150)
const dinosaur3 = new Dinosaur("Spinosaurus", "Carnivorous", 60)
const dinosaur4 = new Dinosaur("Triceratops", "Herbivorous", 100)
const dinosaur5 = new Dinosaur("Coloradisaurus", "Omnivorous", 120)
const dinosaur6 = new Dinosaur("Velociraptor", "Carnivorous", 130)
const dinosaur7 = new Dinosaur("Velociraptor", "Carnivorous", 90)

park.addDinosaur(dinosaur1);
park.addDinosaur(dinosaur2);
park.addDinosaur(dinosaur3);
park.addDinosaur(dinosaur4);
park.addDinosaur(dinosaur5);
park.addDinosaur(dinosaur6);
park.addDinosaur(dinosaur7);



// console.log(park.collectionOfDinosaurs)

// park.collectionOfDinosaurs = park.collectionOfDinosaurs.filter( function (dinosaur){
//     return dinosaur.species !== 'Carnivorous'
// })


// console.log(park.collectionOfDinosaurs)

// park.removeDinosaurBySpecies("Velociraptor")

// console.log(park.collectionOfDinosaurs)
