// 비효율적인 코드
// class NubmerList {
//     constructor(private list: number[]) {}
//     push(data:number) {
//         this.list.push(data);
//     }
//     pop(){
//         return this.list.pop();
//     }
//     print(){
//         console.log(this.list);
//     }
// }

// class StringList {
//     constructor(private list: string[]) {}
//     push(data:string) {
//         this.list.push(data);
//     }
//     pop(){
//         return this.list.pop();
//     }
//     print(){
//         console.log(this.list);
//     }
// }

// const numberList = new NubmerList([1,2,3]); 
// const stringList = new StringList(["1", "2", "3"]); 


// 이를 제네릭 클래스로 해결
class List<T> {
    constructor(private list: T[]) {}
    push(data:T) {
        this.list.push(data);
    }
    pop(){
        return this.list.pop();
    }
    print(){
        console.log(this.list);
    }
}


const numberList = new List([1,2,3]); // number타입 배열이 제네릭 클래스에 T[]에 전달됨
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2", "3"]); // string타입 배열이 제네릭 클래스에 T[]에 전달됨
stringList.pop();
stringList.push("4");
stringList.print();