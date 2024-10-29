// 일반적인 직원 정보
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee(empName, age, empJob) {
        var _this = this;
        this.printEmp = function () {
            console.log("".concat(_this.empName, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this.empJob, "\uC785\uB2C8\uB2E4."));
        };
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }
    return Employee;
}());
var employee1 = new Employee('kim', 30, '개발자');
var employee2 = new Employee('lee');
employee1.printEmp();
employee1.empName = 'choi';
employee1.printEmp();
employee2.printEmp();
/* 캡슐화하기 위해 접근지정자를 사용
public, private, protected 등등 */
var Company = /** @class */ (function () {
    function Company(name, age, job) {
        var _this = this;
        this.printEmp = function () {
            console.log("".concat(_this.name, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this.job, "\uC785\uB2C8\uB2E4."));
        };
        this.name = name;
        this.age = age;
        this.job = job;
    }
    return Company;
}());
var CompanyMan = new Company('park', 45, 'businessman');
CompanyMan.printEmp();
CompanyMan.name = 'kang';
