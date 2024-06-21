// unknown
function unknownExam() {
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar : unknown
    // unkown타입은 하위 타입으로 down캐스팅을 할 수 없다
    // let num: number = unknownVar;
    // let str:string  = unknownVar;
    // let bool: boolean = unknownVar;
}

// never
// 공집합
function neverExam() {
    function neverFunc(): never {
         while(true) {}
    }

    let num: number = neverFunc();
    let str:string = neverFunc();
    let vool : boolean = neverFunc();

}
// never타입에 상위 타입의 값을 저장할 수 없다.(다운캐스팅할 수 없다) 
    // let never1 : never = 1;
    // let never2 : never = "dadf";
    // let never3 : never = true;


// void
function voidExam() {
     function voidFunc() : void {
        console.log("hi");
        
     }
    //  실제 반환은 undefiend로 하기 때문에 (void는 undefined의 슈퍼타입)
     let voidVar : void = undefined;
}

// any
// any타입에 한해서는 다운캐스팅도 가능하고 자기가 다운캐스팅 하는것도 됨
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 다운캐스팅하여 any타입에 넣는경우
    undefinedVar = anyVar // 자기가 다운캐스팅 하는 경우
    // neverVar = anyVar; // never는 정말 순수한 공집합이기 떄문에 never타입엔 그 어떤 타입도 다운 캐스팅할 수 없다

}