let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = "Ralph") {
    cats.push(name);
}

function destructivelyPrependCat(name = "Bob") {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}
    
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let appendedCat = [...cats, name];
    return (appendedCat);
}

function prependCat(name) {
    let prependedCat = [name, ...cats];
    return (prependedCat);
}

function removeLastCat() {
    let removedLastCat = cats.slice(0,-1) 
    return(removedLastCat);
    
}
function removeFirstCat() {
    let removedFirstCat = cats.slice(1) 
    return (removedFirstCat);
}