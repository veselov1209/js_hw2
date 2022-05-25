// 1. Вывести знак * столько раз сколько задаст пользователь---------------------------------------

// function printStar(numOfStar){
//     let star = '*',sum = '';
//     if (numOfStar <= 0){
//         sum = 'Ошибка.';
//     }else{
//         for(let i = 1; i< numOfStar + 1;i++){
//             sum+=star;
//         }
//     }
// return sum;
// }


// 2. Вывод чисел от limit1 до limit2, которые кратны num----------------------------------------------

// function printNum(limit1, limit2, num){
//     for(limit1; limit1<limit2+1;limit1++){
//         if(limit1%num ==0){
//             console.log(limit1);
//         }
//     }
// }

// 3. Сумма четных элементов массива--------------------------------------------------------------------

// function evenElementCounter(a){
//     counter = 0;
//     for(let i = 0; i<a.length; i++){
//         if(a[i]%2 == 0){
//             counter+=a[i];
//         }
//     }
// return counter;
// }


// a = [12, 334, 546, 65, 4, -6, 0, 20, 12, 59, 1000,];
// console.log(evenElementCounter(a));

// 4. Обнулите все элементы массива меньше 10-----------------------------------------------------------

// function resetElemArr(a){
//     let i = 0;
//     while (i < a.length){
//         if(a[i]<10){
//             a[i] = 0;
//         }
//         i++;
//     }
// return a;
// }

// a = [12, 334, 546, 65, 4, -6, 0, 20, 12, 59, 1000, 1,4, 45, -24242, 3, 21,];
// resetElemArr(a);
// console.log(a);

// 5. Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004.--------------

// function zeroFun(num, numLenght){
//     let zero = 0;
//     let array = [];
//     let total = '';
//     if(numLenght<String(Math.abs(num)).length){
//         total = 'Количество цифр в числе превышает длину строки)';
//     } else if(Number(num)<0){
//         num = String(Number(num) * -1);
//         for(let i = 0; i<numLenght-num.length; i++){
//             array[i]=zero;
//         }
//         array[numLenght-num.length] = num;
//         for(i=0;i<array.length;i++){
//             total +=array[i];
//         }
//         total ='-' + total;
//     } else{
//         num = String(num);
//         for(let i = 0; i<numLenght-num.length; i++){
//             array[i]=zero;
//         }
//         array[numLenght-num.length] = num;
//         for(i=0;i<array.length;i++){
//             total +=array[i];
//         }
//     }
// return total;
// }

// 6. Cоедините два массива в один большой---------------------------------------------------------------------------

// function arraySum(array1, array2){
//     for(let i = 0; i < array2.length; i++){
//         array1[array1.length] = array2[i]
//     }
// return array1
// }

// let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 0,];
// let a2 = [9, 8, 7, 6, 5, 4, 3, 2, 1,];

// console.log(arraySum(a1, a2));