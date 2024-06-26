// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(){
    const destructivelyAppendCat = "Ralph";

cats.push(destructivelyAppendCat);
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(){
    const destructivelyPrependCat = "Bob";

    cats.unshift(destructivelyPrependCat);
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(){
    cats.pop();
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat(){
    cats.shift();
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function appendCat(){
    const appendCat = [...cats,"Broom"];
    return appendCat
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function prependCat(){
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function removeLastCat(){
  const removeLastCat = cats.slice(0, cats.length - 1);
  return removeLastCat;
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(1)
    return removeFirstCat;
}