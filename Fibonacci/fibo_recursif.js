function fibonacci(first, second, loop){
    if(loop == 1){
        return first+second;
    }else{
        loop--;
        console.log(first+second);
        return fibonacci(second, first+second, loop);
    }
}

let first_number = 1,
second_number = 0;

let repeat = prompt('masukan pengulangan');
console.log(first_number);
console.log(second_number);
repeat-2;
fibonacci(first_number, second_number, repeat);