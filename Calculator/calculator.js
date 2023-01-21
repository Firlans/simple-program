let jumlah = 0, ulangi = true, number1 = 0, number2 = 0, operator = '';
while(ulangi){
    number1 = Number(prompt('masukan angka pertama'));
    operator = prompt('masukan operator (+, -, /, x)');
    number2 = Number(prompt('masukan angka kedua'));
    if(operator == '+'){
        jumlah = number1 + number2;
    }else if(operator == '-'){
        jumlah = number1 - number2;
    }else if(operator == ''){
        jumlah = number1 * number2;
    }else if(operator == '/'){
        jumlah = number1 / number2;
    }else{
        alert('operator salah');
    }
    alert(`${number1} ${operator} ${number2} = ${jumlah}`);
    ulangi = prompt('mau ulang? (yes/no)');
    if(ulangi == 'yes') ulangi = true;
    else ulangi = false;
}