import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

export function diceRoll() {
  return Math.floor((Math.random() * 20) + 1);
}

/*
different properties vs same properties?
export class Fire {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
  }

  roll() {
    let number = diceRoll();
    if(number % 2 !== 0) {
      strength = diceRoll() + 2;
    } else if (number >=1 && <=10){
    strength = diceRoll() - 2;
    } else {
    return strength = diceRoll();
  }
}

export class Water {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
  }
  
  roll() {
    let number = diceRoll();
    if(number % 2 === 0) {
      strength = diceRoll() + 2;
    } else if (number >=11 && <=20){
    strength = diceRoll() - 2;
    } else {
    return strength = diceRoll();
  }
}

export class Air {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
  }

   roll() {
    let number = diceRoll();
    if(number >= 5 && <= 10 {
      strength = diceRoll() + 4;
    } else {
    return strength = diceRoll();
  }
}

export class Earth {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
  }

  roll() {
    let number = diceRoll();
    if(number >=15 && <= 20) {
      health = diceRoll() + 4;
    } else {
    return health = diceRoll();
  }
}

Fire.prototype.levelUp() = function()
 {

 }
  */

function Character() {
  this.score = 0;
  this.health = 0;
  this.strength = 0;
  this.defense = 0;
  this.level = 0;
  this.inventory = [];
}

/* Battle compares character strength to monster health to determine character attack and monster strength to character health to determine monster attack; then damage reduces character health.

Option for rolling to build back health only available after a battle and only to a certain number (i.e. 10), after which it will not build on further clicks. 

Levelup will consist of adding attributes, like defense, and builds up 1+, 2+, 3+ on individual attributes per level. So levelup 1 adds defense, levelup 2 adds +1 to strength, levelup 3 adds +1 to strength and health, etc, then levelup 5 adds +2 to strength and just loop through it.
*/