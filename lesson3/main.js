// homework
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [1,2,3,4,5];
// let string = ['a','b','c','d','e'];
// let arr = [1,2,3,4,5,'a','b','c','d','e',true,false];
// console.log(number)
// console.log(string)
// console.log(arr)

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// let arr = [];
// arr[0] = "Casey Jones";
// arr[1] = "Phil Lesh";
// arr[2] = "August West";
// console.log(arr);


//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> item   </div>`);
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> item ${i+1}  </div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    // let i=0;
    //   while (i<20) {
    //     document.write('<h1> item  </h1>');
    //     i++;
    //   }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<20) {
//     document.write(`<h1> item ${i+1}  </h1>`);
//     i++;
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//     let number = [1,2,3,4,5,6,7,8,9,10];
//     for (let i = 0; i < number.length; i++) {
//         const numberElement = number[i];
//         console.log(numberElement);
//     }
//     let string = ['a','b','c','d','e','132','22','4658','955','754' ];
//     for (let i = 0; i < string.length; i++) {
//         const stringElement = string[i];
//         console.log(stringElement);
//     }
//
//     let arr = [1,2,3,4,5,'a','b','c','d','e',true,false];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи

// let arr = [1,2,3,4,5,'a','b','c','d','e',true,false];
// for (let i = 0; i < arr.length; i ++){
//     let arrItem = arr[i];
//     if(typeof (arrItem) === 'boolean'){
//         console.log(arrItem);
//     }else if(typeof (arrItem) === 'string'){
//         console.log(arrItem);
//     }else if(typeof (arrItem) === 'number'){
//         console.log(arrItem);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//    Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0]='kldfm';
// arr[1]=6518;
// arr[2]='sdfhgfh';
// arr[3]=true;
// arr[4]='dsfgdfgd';
// arr[5]=125681;
// arr[6]='zdfgfdg';
// arr[7]=false;
// arr[8]=984658;
// arr[9]=561;
// arr[10]='trehtre';
//
// for (let i=0; i<arr.length; i++){
//     console.log(`${arr} ${i}`)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//     for (i=0; i<10; i++){
//         document.write( `<div>step ${i+1}</div>`)
//         console.log(`step ${i+1}`)
//     }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//     for (i=0; i<100; i++){
//         document.write( `<div>step ${i+1}</div>`)
//         console.log(`step ${i+1}`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//     debugger;
//     for (i=0; i<100; i+=2) {
//         document.write(`<div>step ${i + 1}</div>`)
//         console.log(`step ${i + 1}`)
//     }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//         for (i=0; i<=100; i++){
//             if(i % 2 === 0){
//                 document.write( `<div>step ${i}</div>`)
//                 console.log(`step ${i}`)
//         }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// //
//     for (i=0; i<100; i++){
//         if(i % 3 ===0 && i !==0){
//             document.write( `<div>step ${i}</div>`)
//             console.log(`step ${i}`)
//         }
//     }
//
//
//
// classwork
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    let arr=[2,17,13,6,22,31,45,66,100,-18];
//         1. перебрати його циклом while
//     i=0;
//     while(i<arr.length){
//         console.log(arr[i]);
//         i++;
//     }
//         2. перебрати його циклом for
//     for (let j = 0; j < arr.length; j++) {
//         const arrElement = arr[j];
//         console.log(arr[j]);

// }
//         3. перебрати циклом while та вивести  числа тільки з непарним індексом
//         i=0;
//         while(i<arr.length){
//             if(i%3===0){
//                 console.log(arr[i]);
//             }
//             i++;
//         }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         if (i%3===0){
//             console.log(arr[i])
//         }
//
//     }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//         i=0;
//         while(i<arr.length){
//             let index = arr[i];
//             if(i%3===0){
//                 console.log(index);
//             }
//             i++;
//         }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (i%2===0){
//         console.log(i)
//     }
//
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(i%3===0){
//         i='okten'
//     }
//     console.log(i)
// }
// 8. вивести масив в зворотньому порядку.
//     for (let i = arr.length-1; i>=0; i--) {
//         const arrElement = arr[i];
//         console.log(arrElement);
//
//     }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//         debugger;
//         i>=0;
//         while(i=arr.length-1){
//             console.log(arr[i]);
//             i--;
//         }

    // for (let  j = arr.length-1; j >= 0; j--) {
    //     const arrElement = arr[j];
    //     console.log(arr[j]);
    // }
    //     for (let  j = arr.length-1; j >= 0; j--) {
    //     const arrElement = arr[j];
    //     if (j%3===0){
    //         console.log(arr[j])
    //     }
    //
    // }
//     for (let i = arr.length-1; i>=0; i--) {
//     const arrElement = arr[i];
//     if (i%2===0){
//         console.log(i)
//     }
//
// }

// additional
// 1. Створити пустий масив та :
//         a. заповнити його 50 парними числами за допомоги циклу.
//         b. заповнити його 50 непарними числами за допомоги циклу.
//         c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//         let usersWithId = [
//           {id: 1, name: 'vasya', age: 31, status: false},
//           {id: 2, name: 'petya', age: 30, status: true},
//           {id: 3, name: 'kolya', age: 29, status: true},
//           {id: 4, name: 'olya', age: 28, status: false}
//         ];
//
// let citiesWithId = [
//   {user_id: 3, country: 'USA', city: 'Portland'},
//   {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//   {user_id: 2, country: 'Poland', city: 'Krakow'},
//   {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//         Записати цей об'єкт в новий масив
// Example:
//         let usersWithCities = [
//                   {
//                     id: 1, // <===
//                     name: 'vasya',
//                     age: 31,
//                     status: false,
//                     address: {
//                       user_id: 1, // <===
//                       country: 'Ukraine',
//                       city: 'Ternopil'
//                     }
//                   },
//                   // TO BE CONTINUED .....
//                 ]
//
//
//
//
//                 - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
