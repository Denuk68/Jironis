// Mask
$("#inputPhone").inputmask({ mask: "+380 (99) 99-99-999" });

//Form
function validateName() {
  let input = document.querySelector(".form-group #inputName");
  let name = document.forms["app-form"]["name"].value;
  let pattern = /^[a-zA-Zа-яА-Я]+(([',. -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  if (name == "") {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Поле обов'язкове";
    return false;
  } else if (!name.match(pattern)) {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Некоректно введені дані";
    return false;
  } else if (name.length < 3) {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Мінімум 3 символа";
    return false;
  } else if (name.length > 25) {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Максимум 25 символів";
    return false;
  } else {
    input.style.border = "2px solid green";
    return true;
  }
}

function validatePhone() {
  let input = document.querySelector(".form-group #inputPhone");
  let phone = document.forms["app-form"]["phone"].value;
  let pattern = /^[+]*3?8?0?[\s][(]{1}[0-9]{2}[)]{1}[\s][0-9]{2}[-][0-9]{1,3}[-][0-9]{3}/;
  if (phone == "") {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Поле обов'язкове";
    return false;
  } else if (!phone.match(pattern)) {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Некоректно введені дані";
    return false;
  } else {
    input.style.border = "2px solid green";
    return true;
  }
}

function validateEmail() {
  let input = document.querySelector(".form-group #inputEmail");
  let email = document.forms["app-form"]["email"].value;
  let pattern = /^^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (email == "") {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Поле обов'язкове";
    return false;
  } else if (!email.match(pattern)) {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Некоректно введені дані";
    input.onfocus = function () {
      input.placeholder = "";
      input.value = email;
    };
    return false;
  } else {
    input.style.border = "2px solid green";
    input.onfocus = function () {
      input.placeholder = "";
      input.value = email;
    };
    return true;
  }
}

function checkall() {
  validateName();
  validatePhone();
  validateEmail();
  if (validateName() && validatePhone() && validateEmail() == true) {
    return true;
  } else {
    return false;
  }
}
