/*
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6];
let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;

    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);

// WHILE
console.log('-----------');
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;
}

// FOR-OF
console.log('-----------');
let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOf}]`);
}

// FOREACH
console.log('-----------');
let sumaForEach = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach}]`);
});
