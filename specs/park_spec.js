const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;
  let dinosaur7;

  beforeEach(function () {
    park = new Park('Parque Jurasico de comarca de la Cepeda', 35)
    dinosaur1 = new Dinosaur("Brachiosaurus", "Herbivorous", 50);
    dinosaur2 = new Dinosaur("Velociraptor", "Carnivorous", 150);
    dinosaur3 = new Dinosaur("Spinosaurus", "Carnivorous", 60);
    dinosaur4 = new Dinosaur("Triceratops", "Herbivorous", 100);
    dinosaur5 = new Dinosaur("Coloradisaurus", "Omnivorous", 120);
    dinosaur6 = new Dinosaur("Velociraptor", "Carnivorous", 130);
    dinosaur7 = new Dinosaur("Velociraptor", "Carnivorous", 90);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Parque Jurasico de comarca de la Cepeda');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 1);
    park.addDinosaur(dinosaur2);
    const actual1 = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual1, 2);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findMostPopularDinosaur();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    const actual = park.findAllDinosaurBySpecie("Velociraptor");
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur6, dinosaur7]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    const actual = park.getTotalVisitorsPerDay();
    assert.strictEqual(actual, 560)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    const actual = park.getTotalVisitorsPerYear();
    assert.strictEqual(actual, 145600);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    const actual = park.getTotalRevenue();
    assert.strictEqual(actual, 5096000);
  });

  it('should be able to remove all dinosaurs by species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    park.removeDinosaurBySpecies("Velociraptor");
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 4);
  });

  it('should be able to count all dinosaurs by diet', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    const actual = park.countDinosaursByDiet()
    assert.deepStrictEqual(actual, { Herbivorous: 2, Carnivorous: 4, Omnivorous: 1 });
  });

});
