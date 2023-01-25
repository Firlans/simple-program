/**
 * fibonacci iterasi
 */

// deklaration
let first_number = 1, 
second_number = 0, 
sum = 0,
repeat = true, 
loop = prompt('masukan banyaknya pengulangan');

// show first number and second number
console.log(first_number)
console.log(second_number)
for(i=0; i<loop-2; i++){
    sum = first_number+second_number;
    first_number = second_number;
    second_number = sum;
    console.log(sum);
}