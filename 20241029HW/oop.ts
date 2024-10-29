// 일반적인 직원 정보
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드

class Employee{
    empName : string;
    age : number;
    empJob : string;

    constructor(empName : string, age? : number, empJob? : string){
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }

    printEmp = () : void => {
        console.log(`${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob}입니다.`)
    }
}

let employee1 = new Employee('kim', 30, '개발자');
let employee2 = new Employee('lee', );
employee1.printEmp();
employee1.empName = 'choi';
employee1.printEmp();
employee2.printEmp();

/* 캡슐화하기 위해 접근지정자를 사용
public, private, protected 등등 */

class Company{
    private name : string;
    private age : number;
    private job : string;
 
    constructor(name : string, age : number, job? : string){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    printEmp = () : void => {
        console.log(`${this.name}의 나이는 ${this.age}이고, 직업은 ${this.job}입니다.`)
    }
}

let CompanyMan = new Company('park', 45, 'businessman');
CompanyMan.printEmp();
CompanyMan.name = 'kang';