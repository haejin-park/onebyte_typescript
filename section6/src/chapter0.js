// 클래스(붕어빵)
// 객체를 만들어내는 틀(붕어빵기계)
let studentA = {
    name: "박해진",
    grade:"A+",
    age:27,
    study() {
        console.log("열심히 공부");
    },
     introduce() {
        console.log("안녕하세요");
     }
}
// 비슷한 객체 => 비효율
// let studentB = {
//     name: "홍길동",
//     grade:"B+",
//     age:27,
//     study() {
//         console.log("열심히 공부");
//     },
//      introduce() {
//         console.log("안녕하세요");
//      }
// }


class Student {
    //필드
    name;
    grade;
    age;

    //생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부함");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name}입니다.`); // this를 활용하여 현재 객체 프로퍼티를 가져와서 쓸 수도 있다 
    }
}

// 클래스를 통해 만든 객체를 instance라고 부른다
// 클래스를 통해 객체를 생성할 땐 new를 쓰고 ()를 써서 인수전달하면 생성자가 호출되어 각 프로퍼티에 맞는 인수가 전달됨 
let studentB = new Student('박해진', 'A+', 27);
console.log(studentB);

// 메서드 호춣
studentB.study();
studentB.introduce();

/* 
헷갈리지말것
객체메서드는 각각의 프로퍼티이기 떄문에 쉼표,를 찍어줘야하느데 
클래스에서 필드는 ;세미콜론을 쓰면되고 메서드도{}중괄호를 쓰면됨
*/

// 이렇게하면 중복되는게 많이 발생 -> 클래스 상속을 사용해야한다
// class StudentDeveloper {
//     name;
//     grade;
//     age;
//     favoriteSkill;

//     //생성자
//     constructor(name, grade, age, favoriteSkill) {
//         this.name = name;
//         this.grade = grade;
//         this.age = age;
//         this.favoriteSkill = favoriteSkill;
//     }

//     //  메서드
//     study() {
//         console.log("열심히 공부함");
//     }

//     introduce() {
//         console.log(`안녕하세요 ${this.name}입니다.`); 
//     }

//     programming(){
//         console.log(`${this.favoriteSkill}로 프로그래밍 함`);
//     }
// }

// 클래스 상속
class StudentDeveloper extends Student {
    favoriteSkill;

    //생성자
    //name, grade, age는 super함수를 호출하면 부모클래스의 생성자가 호출되서 모든 프로퍼티의 값을 설정할 수 있게된다
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age)
        this.favoriteSkill = favoriteSkill;
    }


    programming(){
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper('이정환', "B+", 27, "Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();

