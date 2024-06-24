// map 메서드 타입 정의

const arr = [1,2,3];
// map메서드 클릭해보면 메서드 정의 볼 수 있음
const newwArr = arr.map((it) => it * 2);

// 배열과 콜백함수 필요
// 타입 변수를 한개만 쓸 경우(배열과 콜백함수 반환값이 같은 타입만 가능하기 때문에 잘못된 방식)
function map1<T>(arr: T[], callback:(item:T) => T) {
    let result = [];
    for(let i = 0; i < arr.length; i ++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// arr과 it은 type이 같다
map1(arr, (it) => it * 2);
map1(['hi', 'hello'], (it) => it.toUpperCase());

// 만약 toUpperCase가 아니라 parseInt로 하면 바로 에러가남. 
// 왜냐하면 T[]이 string이니까 콜백함수 반환값도 string이어야하는데 parseInt해버리면 number타으로 전달하니 매치가 안되서 오류가 발생함
// Type 'number' is not assignable to type 'string'
// map1(['hi', 'hello'], (it) => parseInt(it));

// 하지만 map메서드는 스트링을 전달한다고 해서 결과값이 스트링이 되야하는 건 아니기 때문에 이를 해결하기위해 제네릭을 사용 => 타입변수에 두개 이상의 변수를 사용해야한다
// 타입 변수를 2개 이상 쓸 경우(타입변수 U를 추가 => 콜백함수 반환값도 U타입으로 바꿔줘야함)
function map2<T, U>(arr: T[], callback:(item:T) => U) {
    let result = [];
    for(let i = 0; i < arr.length; i ++) {
        result.push(callback(arr[i]));
    }
    return result;
}

map2(['hi', 'hello'], (it) => parseInt(it)); // parseInt(it)로 인해 U에 number타입이 들어가게됨


// forEach 메서드 타입 정의(어떤값을 반환하지 않고 배열의 각 요소에 인수로 전달한 콜백함수를 한번씩만 순회)

arr.forEach((it) => it * 2);

function forEach<T>(arr:T[], callback:(item:T) => void) {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

// arr2과 it은 type이 같다
forEach(arr, (it) => {
    console.log(it.toFixed());
})

forEach(['123', '456'], (it) => {
    it;
});