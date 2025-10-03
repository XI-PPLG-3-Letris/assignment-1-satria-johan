/*
    program kalkulator sederhana
    req : 
        - menggunakan variabel ES6
        - menggunakan Arrow fuction
        - menggunakan operator => +, -, %, /, **, %
*/

/*
    let a = ...
    let b = ...

    tambah(a,b)
*/

// Variabel


// Variabel
let a = 9;
let b = 7;

const tambah = () => {
    console.log("Penjumlahan:", a + b);
};
tambah();

const kurang = () => {
    console.log("pengurangan:", a - b);
};
kurang();

const kali = () => {
    console.log("perkalian:", a * b);
};
kali();

const bagi = () => {
    console.log("pembagian:", a / b);
};
bagi();

const pangkat = () => {
    console.log("perpangkatan:", a ** b);
};
pangkat();

const modulus = () => {
    console.log("modulus:", a % b);
};
modulus();







