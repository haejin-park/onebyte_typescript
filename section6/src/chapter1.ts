// 타입스크립트의 클래스
const employee = {
    name: "이정환",
    age: 27,
    position: "developer",
    work() {
        console.log("일함"); 
    },
};


// 초기값 안넣어주고 생성자에 할당안해주면 에러남
/* 
오류 없애는 방법
1. 선택적 프로퍼티 ?로 만들어주기(좋은 방법은 아님)
2. 기본값 넣어주기
3. 넣을 값없을 뗀 생성자 만들어주기
*/
class Employee { //클래스 이면서 타입으로도 활용이 됨
    name: string;
    age: number;
    position: string;

    constructor(name:string,age:number,position:string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    work() {
        console.log("일함");
    }
}

const employeeB = new Employee("박해진", 30, "개발자");
console.log(employeeB);

//클래스의 프로퍼티와 메서드까지 가지고 있어야하는 객체 타입으로 정의가됨
const employeeC : Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
}

// 클래스 상속
class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber:number){
        super(name, age, position); //super생략하면 상속한 의미가 없어지므로 에러발생함
        this.officeNumber = officeNumber;
    };

}

    
// 타입스크립트에서는 함수 뿐만아니라 클래스에서도 타입을 정해주지않으면 암시적 any타입을 포함한다는 에러가 발생함
// Parameter 'a' implicitly has an 'any' type.
// "noImplicitAny": false를 해주면 암시적 any허용 안할건지 물어보는 질문에 false하면 에러 사라짐 
// 이 옵션을 안써야 any타입에 할당되는 위험한 코드가 방지가 되므로 안쓰는게 좋음
// function func(a){}

