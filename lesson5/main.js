// homework
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangularAria=(a,b)=>a+b;
console.log(rectangularAria(25,45))
// - створити функцію яка обчислює та повертає площу кола
let circleAria=(r)=>2*3.14*(r*r);
console.log(circleAria(10))
// - створити функцію яка обчислює та повертає площу циліндру
let ariaCilinder=(h,r)=> 2*3.14*r*(h+r);
//
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=(...togo)=>{console.log(...togo)}
arr(2,9,3,7,8)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let pText=(text) =>{document.write(`<p> ${text} </p>`)}
pText('tfhgff')
pText('serhgbjk')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatUl=(text) => {
        document.write(`<ul>`);
            document.write(`<li>${text}</li>`)
            document.write(`<li>${text}</li>`)
            document.write(`<li>${text}</li>`)
        document.write(`</ul>`);
    }
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulCreate=(text, size) =>{
        document.write(`<ul>`)
            for (let i = 0; i < size; i++) {
                document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
        }

    }
    ulCreate('hjkjjkjhj',10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayPrint=(...arr)=> {
        document.write(`<ul>`)
            for (const arrElement of arr) {
               document.write(`<li>${arrElement}</li>`)
            }
        document.write(`</ul>`)
    }
    arrayPrint([true])
    arrayPrint('kjsadfjklsad')
    arrayPrint(135)
    arrayPrint('jkas')
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayOfObjects=(...arr)=> {
        for (const item of arr) {
            document.write(`<div>${item.id}-${item.name}-${item.age}`)
        }
    }

//
// classwork
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let printMinNumber=(a,b,c)=> {
        if (a<b && a<c){
            if(b<c){
                console.log(a)
            }else{
                console.log(a)
            }
        }else if(b<a && b<c){
            if(a<c){
                console.log(b)
            }else{
                console.log(b)

            }
        }else if (c<a && c<b){
            if (a<b){
                console.log(c)
            }else{
                console.log(c)
            }
        }
    }
    printMinNumber(12,13,14)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let printMaxNumber=(a,b,c) =>{
    if (a>b && a>c){
        if(b>c){
            console.log(a)
        }else{
            console.log(a)
        }
    }else if(b>a && b>c){
        if(a>c){
            console.log(b)
        }else{
            console.log(b)

        }
    }else if (c>a && c>b){
        if (a>b){
            console.log(c)
        }else{
            console.log(c)
        }
    }
}
printMaxNumber(12,13,14)
// - створити функцію яка повертає найбільше число з масиву
let maxFromArray=(arr)=> {
       let max = numbers[0]
        for (const number of numbers){
            if (number>max){
                max = number;
            }
        }
        return max;
    }
// - створити функцію яка повертає найменьше число з масиву
let minFromArray=(arr) =>{
        let min = numbers[0]
        for (const number of numbers){
            if (number>min){
                min = number;
            }
        }
        return min;
    }
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArr=(nums)=> {
        let result = 0;
        for (const num of nums){
            result=result+num;
        }
        return result;
    }
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let avgArr=(nums)=> {
        return sumArr(nums)/nums.length;
    }
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let maxinArray=(nums)=> {
        let max=nums[0];
        let min=nums[0];
        for (const num of nums){
            if (num > max){
                max=num;
            }
            if (num<min){
                min=num;
            }
        }
        console.log(max);
        return min;
    }
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let ramdomazer=(arr)=> {
        for (let i=0;i<100;i++){
            arr[i]=Math.round(Math.random()*100);
        }
        return arr;
    }
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let ramdomazer2=(arr,limit)=> {
        for (let i=0;i<arr.length;i++){
            arr[i]=Math.round(Math.random()*limit);
        }
        return arr;
    }
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse=(arr)=> {
        let newArr=[];
        for(let i=newArr.length-1, ri=0; i>=0; i--, ri++){
            newArr[ri]=newArr[i]
        }
        return newArr;
    }
//
//
// additional
// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
