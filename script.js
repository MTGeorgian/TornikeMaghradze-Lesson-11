// 1.
let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche', 'honda'];
for (let i = 2; i <=5; i++){
        console.log(cars[i]);
    }

// 2.
let names = ['steve', 'firmino', 'joe', 'gela', 'ia', 'lee'];
for(let a = 0; a < names.length; a++){
  if(names[a].length > 3){
    console.log(names[a]);
  }
}

// 3.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let n of number){
  if(n % 2 == 0){
    console.log(n);
  }
}
for(let n of number){
  if(n % 2 == 1){
    console.log(n);
  }
}

// 4.
let numbers = [15, 67, 100, 5, 7, [80, 500]];
console.log(numbers[5][1]);

// 5.
var person = {
  firstname: 'john',
  lastname: 'doe',
  age: 50,
  eyecolor: 'blue'
}
console.log(person.eyecolor);

// 6.
var zero = [16, 'lfc', 'earth', 2021, 'infinite']
for(var z = 0; z < zero.length; z++)
console.log(zero[z]);

// 7. ვერ გავიგე როგორ უნდა გამეკეთებინა
let namess = ['sandro', 'ab', 'abc', 'abcd', 'abcde', 'jhon', 'nika']
if(namess.length = 5 && namess[5] === 'nika'){
    console.log(namess.length, namess[5]);
}else if(namess.length = 7 || namess[0] === 'sandro'){
    console.log(namess.length, namess[0]);
}else{
    console.log(error);
}

// 8.
var x = 6;
var y ='6';
console.log(x === y);
//  სამი ტოლობის შემთხვევაში ვადარებთ value-ს და თუ ერთნაირი value-ა მაშინ ტოლობა true-ა0, თუ სხვადასხვა value-ა მაშინ false-ია. რადგან ამ შემთხვევაში მარცხენა ცვლადი არის რიცხვი და მარჯვენა სტრინგი, ესეიგი სხვადასხვა value-ა და ტოლობა არის false-ი.