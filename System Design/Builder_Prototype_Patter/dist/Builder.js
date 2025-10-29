"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Meal {
    mainDish;
    sides;
    dessert;
    constructor(mainDish, sides, dessert) {
        this.mainDish = mainDish;
        this.sides = sides;
        this.dessert = dessert;
    }
    // display
    display() {
        console.log(`Your meal is ${this.mainDish} ${this.sides ? `sides is ${this.sides}` : ""} ${this.dessert ? `dessert is ${this.dessert}` : ""}`);
    }
}
class MealBuilder {
    // we are handling complex object creation
    // How? step by step building object
    // return meal object
    // Important Pointers
    // properties
    // setter function
    // method chaining
    mainDish = "Basic Meal";
    sides;
    dessert;
    // setter function = creating object step by step
    setMainDish(mainDish) {
        this.mainDish = mainDish;
        return this;
    }
    setSides(sides) {
        this.sides = sides;
        return this;
    }
    setDessert(dessert) {
        this.dessert = dessert;
        return this;
    }
    // build function
    // Meal = MainDish + sides + dessert
    // return Meal
    build() {
        return new Meal(this.mainDish, this.sides, this.dessert);
    }
}
// client call
let ml = new MealBuilder();
let sem3Meal = ml.setMainDish("Indi Tandoori Pizza").setSides("Taco").setDessert("Lava").build();
sem3Meal.display();
let sem1MealBuilder = new MealBuilder();
let sem1Meal = sem1MealBuilder.setMainDish("Burger").setDessert("Pie").build();
sem1Meal.display();
let sem2MealBuilder = new MealBuilder();
let sem2Meal = sem2MealBuilder.setMainDish("Pasta").build();
sem2Meal.display();
