/* // homework */
// // - Знайти та вивести довижину настyпних стрінгових значень
// // 'hello world', '', ''
//
// console.log('hello world', length);
// console.log('lorem ipsum', length);
// console.log('javascript is cool', length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // hello world, 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// let helloworld='hello world';
// console.log(helloworld.toUpperCase())
//
// console.log('lorem ipsum'.toUpperCase());
// let loremipsum='lorem ipsum';
// console.log(loremipsum.toUpperCase())
//
// console.log('javascript is cool'.toUpperCase());
// let javascriptiscool='javascript is cool';
// console.log(javascriptiscool.toUpperCase())
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// let HELLOWORLD='HELLO WORLD';
// console.log(HELLOWORLD.toLowerCase())
//
// console.log('LOREM IPSUM'.toLowerCase());
// let LOREMIPSUM='LOREM IPSUM';
// console.log(LOREMIPSUM.toLowerCase())
//
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
// let JAVASCRIPTISCOOL='JAVASCRIPT IS COOL';
// console.log(JAVASCRIPTISCOOL.toLowerCase())
//
// // - Є "брудна" стрінга let str = ' dirty string   ' .
// // Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//
// //
// //
// // - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// //     let str = 'Каждый охотник желает знать';
// // let arr = stringToarray(str);
// // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str2 = 'Каждый охотник желает знать';
// function stringToArray(str2) {
//     let split = str2.split(' ');
//     return split;
// }
// console.log(stringToArray(str2));
//
// let arr = stringToArray(str2);
// document.writeln(arr);
// //
// //
// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// let str3 = 'Каждый охотник желает знать';
// function delete_characters(str3, length) {
//     return str3.substring(0,length);
// }
// console.log(str3)
// // document.writeln(delete_characters(str, 7)); // Каждый
// let str4 = 'Каждый охотник желает знать';
// function delete_characters2(str4, length) {
//     return str4.substring(str4, 7);
//
// }
// document.writeln(delete_characters(str4, 7));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     return str.replaceAll(' ','-').toUpperCase();
// }
// console.log(insert_dash(str))
// document.writeln(insert_dash(str))

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у
// верхній.
//     function irsrUp(str) {
//         return str [0].toUpperCase()+str.slice(1)
//     }
// //
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
