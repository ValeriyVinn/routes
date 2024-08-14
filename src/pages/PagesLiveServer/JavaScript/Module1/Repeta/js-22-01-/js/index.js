/*
 * - Переменные и типы примитивов
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
 */

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = true;
// const shouldConfirm = false;

/*
 * * - Оператор typeof
 */

// const type = typeof isOpen;

// console.log(type);

/*
 * - Как window.alert() блокирует интерпретацию
 */

// console.log('До');
// alert('Тисни');
// console.log('Після');

/*
 * - Ввод пользовователя
 * - Методы window.confirm() и window.prompt()
 */

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);


/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity));
// console.log(Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

//  2. попросить ввести степень и сохранить в переменную

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

//  3. Возвести введенные данные в степень и вывести
// const result = base ** power;

// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);


// const colors = ['lightcoral', 'palegreen', 'lightpink', 'lightcyan', 'lemonchiffon', 'lavender', 'lightblue', 'wheat', 'white', 'red', 'blue', 'pink', 'green', 'grey', 'gold', 'teal']
// const max = colors.length-1
// const min = 0

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index]
// console.log(color)

// document.body.style.backgroundColor = color

/*
 * Длина строки, свойство length
 */
// const message = 'В этой строке 26 символов.';
// console.log(message.length);

/*
 * Конкатенация строк
 */
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

// const room = 716;
// const type = 'VIP';

// const welcomeMsg =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   type +
//   ' номер ' +
//   room;

// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

// const quantity = 15;
// const orderMsg = `Вы заказываете ${quantity} холодильников.`;

// console.log(orderMsg);

/*
 * Нормализация с методом toLowerCase()
 */

// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();

// console.log(brand);

// let brand = 'SamSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);

/*
 * Поиск в строке с методом includes()
 */
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));


/*
 * Операторы сравнения
 */

// console.log(15 < 3);

/*
 * Приведение (преобразование) типов к числу
 */

// console.log('10' > 5);

/*
 * Операторы равенства (== и ===) и неравества (!= и !==)
 * ✅ «ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)»
 */

// const isEqual = 1 === true;

// console.log(isEqual);

/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

// const x1 = 10;
// const x2 = 30;
// const number = 45;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// const res1 = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);

// const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
//   res2,
// );

/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);

/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'free';

// если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// true || false => true
// false || true => true
// false || false => false

// console.log('Есть доступ к контенту? ', canAccessContent);


/*
 * Приведение к булю на примере Boolean(value)
 */

// console.log(Boolean(0));

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 && 4 && 7 && 'mango');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!5);

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 10000;
// const payment = 2000;

// 'Все хорошо, снимаем деньги... Спасибо за покупку!'


/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'


/*
 * Оператор ветвеления if
 */

// if (5 > 30) {
//   //  тело
//   console.log('qweqwe');
// }

// console.log('дальше');
/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

// const salary = 5000;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// console.log('qweqwe');

/*
 * Тернарный оператор
 */
// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

/*
 * Блочная область видимости переменных
 */

// if (true) {
//   const a = 5;
//   console.log(b);
// }

// if (true) {
//   const b = 10;

//   console.log(a);
// }
