/* 
점근제어자(타입스크립트에서만 제공되는 기능)
access modifier
pblic private protected
*/

class Employee { //클래스 이면서 타입으로도 활용이 됨

    // private name: string;
    // protected age: number;
    // public position: string;

    // 필드에 접근제어자가 있을 때 생성자에 접근제어자 사용 시 식별자가 중복되었다는 오류 발생(타입스크립트가 자동으로 만든다)
    //-> 생성자에 접근제어자 사용할 경우 자동으로 필드도 접근제어자가 생기고 필드 초기화도 된다. 
    //-> 필드와 초기화를 삭제해줘야한다
    constructor(
        private name:string,
        protected age:number,
        public position:string
    ) {}

    //private하면 클래스 메서드 내부에서는 사용가능
    work() {
        console.log(`${this.name} 일함`);
    }
}

const employee = new Employee("이정환", 27, "developer");

//public 어디서든지 접근 가능
//private 클래스내부에서만 접근 가능 -> 클래스 외부에서 읽기, 수정하기 모두 불가.
//protected는 클래스내부와 파생클래스에서만 가능  
// employee.name = "홍길동";
// employee.age = 30;
employee.position ="디자이너";
console.log(employee);


// 클래스 상속
class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber:number){
        super(name, age, position); //super생략하면 상속한 의미가 없어지므로 에러발생함
        this.officeNumber = officeNumber;
    };

    
    
    func() {
        // this.name; //private는 파생클래스에서 접근할 수 없음 
        this.age; //protected는 클래스 외부는 허용 불가하지만 파생클래스 까지는 허용
    }

}
