// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let pText = document.getElementById('content')
console.log(pText)
// -- отримує текст з блоку з id "rules"
let takeText = document.getElementById('rules')
console.log(takeText)
// -- замініть текст параграфа з id 'content' на будь-який інший
let cpText = document.getElementById('content')
cpText.innerText='Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. '
console.log(cpText)

// -- замініть текст параграфа з id 'rules' на будь-який інший
let takeChengeText = document.getElementById('rules')
takeChengeText.innerText='it is a secret'
console.log(takeChengeText)
// -- змініть кожному елементу колір фону на червоний
document.body.style.backgroundColor = 'red'

// -- змініть кожному елементу колір тексту на синій
document.body.style.backgroundColor = 'blue'
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let getListClasses = document.getElementById(rules)
console.log(getListClasses)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний