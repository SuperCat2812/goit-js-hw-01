let yorfrom = prompt("куда хотите заказать товар");
switch (yorfrom) {
  case "Китай":
    console.log(`Доставка в ${yorfrom} буде коштувати 100 кредитів`);
    break;
  case "Чилі":
    console.log(`Доставка в ${yorfrom} буде коштувати 250 кредитів`);
    break;
  case "Австралія":
    console.log(`Доставка в ${yorfrom} буде коштувати 170 кредитів`);
    break;
  case "Індія":
    console.log(`Доставка в ${yorfrom} буде коштувати 80 кредитів`);
    break;
  case "Ямайка":
    console.log(`Доставка в ${yorfrom} буде коштувати 120 кредитів`);
    break;
  default:
    console.log("У вашій країні доставка недоступна");
}
