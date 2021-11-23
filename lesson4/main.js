// // homework4
// //
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//     function aria(a,b) {
//         return a*b;
//     }
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//     function roundAria(r) {
//         return 3.14*(r*r);
//     }
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//     function ariaCilinder(h,r) {
//         return 2*3.14*r*(h+r)
//     }
// // - створити функцію яка приймає масив та виводить кожен його елемент
//     function printArray(arr) {
//         for (const item of arr){
//             console.log(item)
//         }
//     }
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     function pText(text) {
//         document.write(`<p> ${text} </p>`);
//     }
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//     function creatUl(text) {
//         document.write(`<ul>`);
//             document.write(`<li>${text}</li>`)
//             document.write(`<li>${text}</li>`)
//             document.write(`<li>${text}</li>`)
//         document.write(`</ul>`);
//     }
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// //      Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     function ulCreate(text, size) {
//         document.write(`<ul>`)
//             for (let i = 0; i < size; i++) {
//                 document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//         }
//
//     }
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//     function arrayPrint(arr) {
//         document.write(`<ul>`)
//             for (const arrElement of arr) {
//                document.write(`<li>${arrElement}</li>`)
//             }
//         document.write(`</ul>`)
//     }
//     arrayPrint([true])
// //
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
//     function arrayOfObjects(arr) {
//         for (const item of arr) {
//             document.write(`<div>${item.id}-${item.name}-${item.age}`)
//         }
//     }
// //
// //     classwork4
// //
// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//     function printMinNumber(a,b,c) {
//         if (a<b && a<c){
//             if(b<c){
//                 console.log(a)
//             }else{
//                 console.log(a)
//             }
//         }else if(b<a && b<c){
//             if(a<c){
//                 console.log(b)
//             }else{
//                 console.log(b)
//
//             }
//         }else if (c<a && c<b){
//             if (a<b){
//                 console.log(c)
//             }else{
//                 console.log(c)
//             }
//         }
//     }
//
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function printMaxNumber(a,b,c) {
//     if (a>b && a>c){
//         if(b>c){
//             console.log(a)
//         }else{
//             console.log(a)
//         }
//     }else if(b>a && b>c){
//         if(a>c){
//             console.log(b)
//         }else{
//             console.log(b)
//
//         }
//     }else if (c>a && c>b){
//         if (a>b){
//             console.log(c)
//         }else{
//             console.log(c)
//         }
//     }
// }
//
//
// // - створити функцію яка повертає найбільше число з масиву
//
//     function maxFromArray(arr) {
//        let max = numbers[0]
//         for (const number of numbers){
//             if (number>max){
//                 max = number;
//             }
//         }
//         return max;
//     }
//
// // - створити функцію яка повертає найменьше число з масиву
//
//     function minFromArray(arr) {
//         let min = numbers[0]
//         for (const number of numbers){
//             if (number>min){
//                 min = number;
//             }
//         }
//         return min;
//     }
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад [1,2,10]->13
//     function sumArr(nums) {
//         let result = 0;
//         for (const num of nums){
//             result=result+num;
//         }
//         return result;
//     }
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     function avgArr(nums) {
//         return sumArr(nums)/nums.length;
//     }
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// // (Math використовувати заборонено);
//     function maxinArray(nums) {
//         let max=nums[0];
//         let min=nums[0];
//         for (const num of nums){
//             if (num > max){
//                 max=num;
//             }
//             if (num<min){
//                 min=num;
//             }
//         }
//         console.log(max);
//         return min;
//     }
// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// // та виводить його.
//     function ramdomazer(arr) {
//         for (let i=0;i<100;i++){
//             arr[i]=Math.round(Math.random()*100);
//         }
//         return arr;
//     }
// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// // limit - аргумент, який характеризує кінцеве значення діапазону.
//     function ramdomazer2(arr,limit) {
//         for (let i=0;i<arr.length;i++){
//             arr[i]=Math.round(Math.random()*limit);
//         }
//         return arr;
//     }
// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//     function reverse(arr) {
//         let newArr=[];
//         for(let i=newArr.length-1, ri=0; i>=0; i--, ri++){
//             newArr[ri]=newArr[i]
//         }
//         return newArr;
//     }
// //
// //
// //     additional4
// //
// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// // якщо два аргументи - складає або конкатенує їх між собою.
//    debugger
//     function oneorMore(a,b) {
//         if (a){
//             console.log(a)
//         }else if (a&&b){
//             console.log(a+b)
//         }
//
//     }
//
// oneorMore(25,63)
// //
// // - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     EXAMPLE:
// // [1,2,3,4]
// //     [2,3,4,5]
// // результат
// //     [3,5,7,9]
//
//
// //
// // - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//
// //
// //     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
//
// //
