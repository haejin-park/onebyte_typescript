// 템플릿 리터럴 타입

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat'| 'chicken';

// 타입이 많아질 수록 매우 불편해짐
// type ColoredAnimal = 'red-dog' | 'black-cat' | 'green-chicken' ...;

//템플릿 리털러 타입을 사용하면됨 (이렇게하면 Color, Animal로 만들 수 있는 모든 유니온 타입이 조합되어 생김)
type ColoredAnimal = `${Color}-${Animal}`;

