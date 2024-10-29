let student = {
    name : 'ahn',
    course : 'typescript',
    score : 100,
    grade : function(){
        console.log('A');
    }
}

student.name = 'kim';
student.score = 80;

// 변수의 데이터 타입 명시

let stdId : number = 1111;
let stdName : string = 'lee';
let age : number = 20;
let gender : string = 'male';
let course : string = 'Typescript';
let completed : boolean = false;


//함수의 데이터 타입 명시 (매개변수, 리턴)

function Plus( a : number , b : number ) : number{
    return a + b;
}

// return을 받고 싶지 않다면 void 처리하면 됨.
function Plus1( a : number , b : number ) : void{
    console.log(a+b);
}

// 열거형 : 사용자 정의 타입
enum GenderType{
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
}

//학생 정보 불러오기

interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : 'male' | 'female' ; // male 과 female 둘 중 하나만 
    course? : string;
    completed? : boolean;
    // setName(name : string) : void;
    setName : (name : string) => void;
    // getName : () => string;
}


class MyStudent implements Student{
    stdId = 91011;
    stdName = "park";
    age = 30;
    gender : 'male' | 'female'= 'male';
    course = 'node.js';
    completed = true;

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName)
    }
}

// const myInstance = new MyStudent();
// myInstance.setName("앨리스")

// function getInfo (id : number) : Student{
//     return {
//         stdId : id,
//         stdName : "lee",
//         age : 20,
//         gender : 'female',
//         course : 'javascirpt',
//         completed : true
//     }
// }
// console.log(getInfo(5678));
/*
만약, return값의 student 하나라도 주석처리하면
오류가 뜨는데, 이럴 때는 인터페이스 선언 시에
프로퍼티에 ?를 달아주면 처리 가능하다
이는 함수에도 적용이 가능하다. 
*/

// let std = {
//     stdId : 91011,
//     stdName : "park",
//     age : 30,
//     gender : 'male',
//     course : 'node.js',
//     completed : true
// };

// function setInfo( student : Student ): void{
//     console.log(student)
// }

// setInfo(std);

// type strOrNum = number|string;

// let numStr : strOrNum = '100';
// let item : number;

// function convertToString(val : strOrNum) : string{
//     if (typeof val === 'string'){
//         item = 0;
//     } else {
//         item = val;
//     }

//     return String(val);
// }

// function convertToNumber(val : strOrNum) : number{
//     return Number(val);
// }

// console.log(typeof(convertToString(numStr)));
// console.log(typeof(convertToNumber(numStr)));

// let numbers : number[] = [1,2,3,4,5];

// let fruits : string[] = ['apple', 'banana' , 'orange'];

// let mixedArray : (number | string)[] = [1,'two', 3 , 'four']; 
// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
// for (let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }
// for (let i=0; i<mixedArray.length; i++){
//     console.log(mixedArray[i]);
// }

// let infer = [1,2,3];

// for (let i = 0; i < infer.length; i++){
//     console.log(infer[i]);
// }

// let readOnlyArray : ReadonlyArray<number> = [1,2,3];

// let greeting : [number,string,boolean] = [1,'hello', true];

// for (let i=0; i<greeting.length; i++){
//     console.log(greeting[i]);
// }

let firstArray = [1,2,3];
let secondArray = [4,5,6];

// 괄호를 벗겨주는 역할, 요소만을 빼낸다.
let combineArray = [...firstArray, ...secondArray];

for (let i=0; i<combineArray.length; i++){
    console.log(combineArray[i]);
}