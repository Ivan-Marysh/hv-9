console.log("1 Напиши функцію logItems(array), яка отримує масив і використовує циклfor, який для кожного елемента масиву буде виводити в консоль повідомленняв форматі [номер елемента] - [значення елемента].      Нумерація повинна починатися з 1. Наприклад, для першого елементамасиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.");

const logItems = function (array) {
    // console.log(array);
    let reckrol = []; 
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        reckrol.push(`${i + 1} - ${array[i]}`)
    }
    return reckrol;
}

console.log(logItems(['Mango', 'Poly', 'Ajax']));






console.log("2 Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.");


const calculateEngravingPrice = function (message, pricePerWord) {
    const text = message.split(" ");

    console.log(text);

    const price = text.length * pricePerWord;

    return price; 
}

console.log(calculateEngravingPrice('Hello world', 10));
console.log(calculateEngravingPrice('my name lucky', 6));
console.log(calculateEngravingPrice('you died', 5));







console.log("3 Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.");


const findLongestWord = function (string) {
    // console.log(string);
    const cat = string.split(" ");
    // console.log(cat);
    let longestWord = cat[0];
    for (const mayor of cat) {
        // console.log(mayor);
        if (mayor.length > longestWord.length) {
            longestWord = mayor
        }
    }

  return longestWord
}

console.log(findLongestWord("Cat was the mayor of a city in Alaska for twenty years."));








console.log("4 Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.");

function formatString(string) {

    if (string.length <= 40){
        return string;
    } else {
        return string.slice(0,40) + "..."
    }


}
console.log(formatString("Якщо довжина рядка не перевищує укорочену версію"));
console.log(formatString("Якщо довжина рядка"));













console.log("5 Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.");


const message2 = " Слова в рядку можуть sale бути в довільному регістрі.";

function checkForSpam(message) {
    const smolLeters = message2.toLowerCase();
  return smolLeters.includes("sale") || smolLeters.includes("spam")
}

console.log(checkForSpam(message2));











console.log("6 Напиши скрипт з наступним функціоналом: При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.");


let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("ведіть число");


if (input === null) {
    alert("ви вийшли");
    break;
}

if (isNaN(input)) {
    alert("було ведено не число, попробуйте ще раз");
    continue;
}

input = Number(input);


numbers.push(input);

}


if (numbers.length > 0) {
    for (const mun of numbers) {
        console.log(mun);
        total += mun;
    }
    console.log(`загальна сума чисель дорівнюе ${total}`);
}






