let star = "*"

for ( let i = 0 ; i < 10; i++ ) {
  console.log(star);
  star += "*"
}

// 함수표현식
let multiple = function(x){
  return x * x
}

console.log(multiple(2));

// 함수선언식
function pluss(x){
  return x + x + x;
}

console.log(pluss(2));


// function scope
let num1 = 20
let num2 = 3
let name = "Chamahk";

// 전역 변수는 함수 안으로 들어갈 수 있음
function multiply() {
return num1 * num2;
}

multiply(); // 20 * 3 = 60

// 함수 안에 있는 변수는 로컬 변수 임
function getScore () {
let num1 = 2
let num3 = 3

// name은 전역 변수라서 해당 변수로 들어올 수 있음
function add() {
return name + " scored " + (num1 + num2);
}

// add() 실행하면, 값만 리턴하고 함수를 종료함.
return add();
}

console.log(getScore()); //"Chamahk scored 5"