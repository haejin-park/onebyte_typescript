// 분산적인 조건부 타입=> 조건부 타입을 유니온과 함께 사용할 떄 분산적으로 업그레이드 되는 것

// 조건부타입 
type StringNumberSwitch<T> = T extends number? string : number;
let a : StringNumberSwitch<number>;
let b : StringNumberSwitch<string>;

//이렇게 모든 유니온 타입이 분리되서 한번은 number타입만 있는걸로 전달되고 한번은 string타입으로 전달된다. 그리고 그결과가 유니온 되는것과 같다
let c : StringNumberSwitch<number | string> // 조건부타입처럼 동작하지 않게됨
/* 
StringNumberSwitch<number> => string
StringNumberSwitch<string> => number
결과 string | number
*/

let d : StringNumberSwitch<boolean | number| string>;
/* 
StringNumberSwitch<boolean> => number
StringNumberSwitch<number> => string
StringNumberSwitch<string> => number
결과 umber | string
*/

// 실용적인 예제

// 예시1
type Exclude<T, U> = T extends U ? never : T; 

/*
T가 U의 서브타입이면 never, 아니면 T

ex)T => number, U => string => T는 number
ex)T => number, U => number => T는 never
*/

type A = Exclude<number | string | boolean, string>;

/* 
1단계
Exclude<number, string> |
Exclude<string, string> |
Exclude<boolean, string>


2단계 
number |
never |
boolean

최종결과 
number | never | boolean => never는 사라진다
왜냐하면 union은 합집합을 만드는 건데 never는 공집합이기 때문이다.
그래서 결국 number | boolean 유니온타입이 된다
결론적으로 이런 방식을 사용하면 특정 타입(string)을 사라지게 하는 경우도 가능하다
*/

// 예시2) Exclude와 반대되는 경우(T랑 never위치를 바꿔준다)
type Extract<T, U> = T extends U ? T : never; 
type B = Extract<number | string | boolean, string>
/* 
1단계 
Exclude<number, string> |
Exclude<string, string> |
Exclude<boolean, string>

2단계
never
string
never

최종결과
string
*/
