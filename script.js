/*
Задача 1
Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
Создаем массив чисел от 0 до 10
*/
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
/* 
Мы начинаем цикл:
*/
for (let i = 0; i < num.length; i++) {
  if (i % 2 === 0) {
    console.log(num[i]);
  }
}
/*______________________________________________________________________________________
 Задача 2

Напишите цикл for, который выводит в консоль  все числа от 55 до 20
Мы создаем пустой массив с именем numbers, который будет хранить числа от 55 до 20.
*/
const numbers = [];
/* 
Начинаем цикл:

*/
for (let i = 55; i >= 20; i--) {
/*
numbers.push(i);: Внутри цикла мы добавляем текущее значение i 
в массив numbers с помощью метода push(). 
Таким образом, каждое значение i добавляется в массив. 
*/
  numbers.push(i);
}

console.log(numbers);
/*_______________________________________________________________________________________
 Задача 3
Дан массив numbers. Вывести в консоль все числа из массива
Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
*/
  const numbers = [3, 5, 11, 2, 8, 1, 6]/*Создаем массив и заполняем его числами:*/
  for (let i = 0; i < numbers.length; i++) 
{
    console.log(numbers[i]);
}
const numbers = [3, 5, 11, 2, 8, 1, 6];/*Создаем массив numbers и заполняем его числами:*/
const numbers_squared = [];/*Создаем пустой массив в который будем добавлять квадраты чисел из массива numbers*/
for (let i = 0; i < numbers.length; i++) /*Используем цикл for для перебора элементов массива numbers*/
{
  numbers_squared.push(numbers[i] ** 2);/*Внутри цикла используем метод push для добавления квадрата текущего элемента*/
}
console.log(numbers_squared); /*выводим в консоль*/
/*_______________________________________________________________________________________
 Задача 4
Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared 
(обратиться к элементу массива по индексу)
*/
const numbers_squared = [9, 25, 121, 4, 64, 1, 36];
const last_elem = numbers_squared[6] - 1;
console.log(last_elem);
/*_______________________________________________________________________________________
Задача 5
Дан объект user. Используя данные из объекта, сформировать строку в формате: 
‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
*/
/*Создаем объект user, содержащий информацию о пользователе:*/
const user = {
first_name: 'Ivan', 
last_name: 'Ivanov', 
age: 20, 
salary: 500
}
/*Вставляем значения свойств объекта user в строку, используя выражения ${...}*/
const userString = `User's name is ${user.first_name} ${user.last_name}. 
He is ${user.age} years old. My salary is ${user.salary} per day`;
console.log(userString);/*выводим в консоль*/

