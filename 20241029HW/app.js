var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student = {
    name: 'ahn',
    course: 'typescript',
    score: 100,
    grade: function () {
        console.log('A');
    }
};
student.name = 'kim';
student.score = 80;
// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
//함수의 데이터 타입 명시 (매개변수, 리턴)
function Plus(a, b) {
    return a + b;
}
// return을 받고 싶지 않다면 void 처리하면 됨.
function Plus1(a, b) {
    console.log(a + b);
}
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "park";
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
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
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
// 괄호를 벗겨주는 역할, 요소만을 빼낸다.
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
