// classwork
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let n4 = 'fsd......wreg____rthrth------'
// function normolizeName(name) {
//     name.
//         replaceAll('..',' ');
//         replaceAll('---',' ');
//         replaceAll('__',' ');
// }

//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// function randomArray(size) {
//     let arr = [];
//     for(let i=0; i<size; i++){
//         arr.push (Math.round(Math.random()*100))
//     }
//     return arr;
// }
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// let arrayR=randomArray(20)
// arrayR.sort((a,b)=>a-b)
// arrayR.sort((a,b)=>b-a)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let arrayR=randomArray(20)
// arrayR.filter(value=>value%2===0)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arrayR=randomArray(20)
// arrayR.map(value=>value+'')

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// function sortNums(numbers, direction) {
//     let sortArray=[]
//     if(direction==='asc'){
//         sortArray=numbers.sort((a,b)=>a-b)
//     }else if(direction==='desc'){
//         sortArray=numbers.sort((a,b)=>b-a)
//     }
//     return sortArray
// }


//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration));
// console.log(coursesAndDurationArray.filter(course=>course.monthDuration>5));

//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str,n) {
//     let resArray=[];
//     while (str.length){
//         resArray.push(str.substring(0,n))
//         str=str.substring(0,n)
//     }
//
// }
// cutString('наслаждение',3)