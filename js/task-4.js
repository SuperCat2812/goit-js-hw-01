const credits = 23580;
const pricePerDroid = 3000;
let nDrone = +prompt("Сколько вам нужно дронов");
let totalPrice = "";
console.log(nDrone);
if (nDrone == 0) {
  console.log("Скасовано користувачем!");
} else {
  totalPrice = credits - pricePerDroid * nDrone;
  if (totalPrice < 0) {
    console.log("Недостатньо коштів на рахунку!");
  } else if (totalPrice > 0) {
    console.log(
      `Ви купили ${nDrone} дроїдів,на рахунку залишилося ${totalPrice}кредитів.`
    );
  }
}
console.log(totalPrice);
