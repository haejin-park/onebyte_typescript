// 인터페이스와 클래스
// 인터페이스는 설계도 역할
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
} 

// 캐릭터 클래스가 캐릭터 인터페이스 설게도를 구현
// 프로퍼티를 안넣으면 error발생
class Character implements CharacterInterface {

    // 인터페이스에는 무조건 public만 가능. 다른 접근제어자를 쓰면 에러 발생
    // private필드 핋요할 땐 인터페이스에 정의하지말고 따로 정의 private extra: string
    constructor(
        public name: string,
        public  moveSpeed:number,
        private extra: string
    ){}

    move():void {
        console.log(`${this.moveSpeed} 속도로 이동`);
        
    }
}