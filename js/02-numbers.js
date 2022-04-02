/*
NUMBERS:
- normalus:
  - sveikieji
  - desimtainiai
- nenormalus:
  -NaN (not-a-number)
  - Infinity; -Infinity

  OPERATORIAI:
  ++ padidinimas vienu vienetu
  -- sumazinimas vienu vienetu
  +=, -=, /=, *= saves paties pakeitimas
*/

const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;

const pirmas = 7;
const antras = 5;

const dalmuo =pirmas / antras;
console.log(dalmuo);

console.log('- - - - - - - - ')
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);

console.log('- - - - - - - - ')
console.log(7 + '5');
console.log(7 - '5');
console.log(7 * '5');
console.log(7 / '5');

console.log('- - - - - - - - ')
console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');

console.log('- - - - - - - - ')
console.log('a' + 'b');
console.log('a' - 'b');
console.log('a' * 'b');
console.log('a' / 'b');

console.log('- - - - - - - - ')
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);

console.log('- - - - - - - - ')
console.log(7 + false);
console.log(7 - false);
console.log(7 * false);
console.log(7 / false);

console.log('- - - - - - - - ')
console.log(true + 5);
console.log(true - 5);
console.log(true * 5);
console.log(true / 5);

console.log('- - - - - - - - ')
console.log(false + 5);
console.log(false - 5);
console.log(false * 5);
console.log(false / 5);

console.log('- - - - - - - - ')
console.log(2 ** 4);
console.log(3.14 ** 3.14);
console.log(7 % 2);

console.log('- - - - - - - - ')
let skolaAfter= 0;
console.log('Skola:', skolaAfter--);
console.log('Skola:', skolaAfter--);
console.log('Skola:', skolaAfter--);
console.log('Skola:', skolaAfter--);
console.log('Skola:', skolaAfter--);

console.log('- - - - - - - - ')
let skolaBefore= 0;
console.log('Skola:', --skolaAfter);
console.log('Skola:', --skolaAfter);
console.log('Skola:', --skolaAfter);
console.log('Skola:', --skolaAfter);
console.log('Skola:', --skolaAfter);

console.log('- - - - - - - - ')
let a = 0;
console.log(a);
a = a + 1
console.log(a);
a++;
console.log(a);
++a;
console.log(a);

console.log('- - - - - - - - ')
let b = 0;
console.log(b);
b = b + 3;
console.log(b);
b++;
b++;
b++;
console.log(b);
b += 3;
console.log(b);
b += 3;
console.log(b);
b += 3;
console.log(b);

console.log('- - - - - - - - ')
let c = 16;
const d = 2;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);

console.log('- - - - - - - - ')
let e = 5;
console.log(e);
e /= e;
console.log(e)