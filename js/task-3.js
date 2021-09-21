const ADMIN_PASSWORD = "jqueryismyjam";

let user_password = prompt("password");

let message;

if (user_password == "") {
  message = alert("Скасовано користувачем!");
} else if (user_password == ADMIN_PASSWORD) {
  message = alert("Ласкаво просимо!");
} else if (user_password !== ADMIN_PASSWORD) {
  message = alert("Доступ заборонений, невірний пароль!");
}
