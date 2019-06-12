'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return (4 <= login.length && login.length <= 16);
};

const isLoginUnique = function(allLogins, login) {
   return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  const resultValidation = isLoginValid(login);
  if(resultValidation === false) {
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  const resultUnique = isLoginUnique(allLogins, login);
  if (resultUnique === false) {
     return console.log('Такой логин уже используется!');
  }
  if (resultUnique === true) {
      logins.push(login);
      return console.log('Логин успешно добавлен!');
  }
};
//
//
// // Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles');// 'Такой логин уже используется!'
addLogin(logins, 'Zod');// 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast');// 'Ошибка! Логин должен быть от 4 до 16 символов'