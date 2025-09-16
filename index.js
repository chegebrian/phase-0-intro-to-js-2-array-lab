// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
  cats.push(name);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
  cats.splice(-1, 1);
}
destructivelyRemoveLastCat();

//

function destructivelyRemoveFirstCat() {
  cats.splice(0, 1);
}
destructivelyRemoveFirstCat();
//

function appendCat(name) {
  return [...cats, name];
}
appendCat("Broom");

// const newCats = ;

function prependCat(name) {
  return [name, ...cats];
}
prependCat("Arnold");

// const newCats2 =

function removeLastCat() {
  return cats.slice(0, -1);
}

removeLastCat();

function removeFirstCat() {
  return cats.slice(1);
}
removeFirstCat();
