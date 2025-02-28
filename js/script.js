// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.
// Елементів може бути довільна кількість.
// Нехай елементи массива в рядку будут розділені комою.

// const arrayOne = ['apple', 'pear', 'peas'];

// let result = "";

// for (let i = 0; i < arrayOne.length; i++) {
//     result += arrayOne[i];

//     if (i < arrayOne.length - 1) {
//         result += ", ";
//     }
// }

// console.log(result);

// const array = ["orange" , "melon" , "tangerine"]

// const secondArray = array.join(",")
// console.log(secondArray);

// 2. Працюємо з колекцією карток в trello. Метод splice()
// (можна використати інші методи)

const cards = ["card1", "card2", "card3", "card4", "card5"];

const cardToRemove = cards.splice(2, 1);

const cardToInsert = cards.push("card6");

const cardToUpdate = cards.splice(2, 1, "card4");

console.log(cards);
