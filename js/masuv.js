// Завдання 1
let numbers = [1, 2, 3];
numbers[1] = 10;
console.log("Масив після зміни:", numbers);

// Завдання 2
let strings = ["перший", "другий", "третій"];
// strings.push("четвертий");
strings[3] = "Четвертий"
console.log(strings);
// console.log("Масив рядків після додавання:", strings);

// Завдання 3
let numbersToSum = [5, 10, 15];
let sum = numbersToSum.reduce((acc, num) => acc + num, 0);
console.log("Сума чисел в масиві:", sum);

// Завдання 4
let fiveNumbers = [10, 20, 30, 40, 50];
console.log("Елементи масиву:");
console.log(fiveNumbers.length);

for (let i = 0; i < fiveNumbers.length; i = i + 1) {
  console.log(fiveNumbers[i]);
}

// Завдання 5
let fiveStrings = ["короткий", "довгийрядок", "п'ять", "достатньо", "рядок"];
console.log("Рядки більше 5 символів:");
fiveStrings.forEach((str) => {
  if (str.length > 5) {
    console.log(str);
  }
});

// Завдання 6
let tenNumbers = [1, 22, 13, 44, 5, 6, 7, 88, 9, 10];
let maxNumber = Math.max(...tenNumbers);
console.log("Максимальне значення в масиві:", maxNumber);

// Завдання 7
// let evenNumbers = tenNumbers.filter((num) => num % 2 === 0);
// console.log("Парні числа з масиву:", evenNumbers);
for (let i = 0; i < tenNumbers.length; i = i + 1) {
    if (tenNumbers[i] % 2 === 0) {
         console.log(tenNumbers[i]);
    }
}