let total = 0;
let input;
do {
  input = +prompt("ввести число");
  total = total + input;
} while (input > 0);
console.log(total);
console.log(input);
