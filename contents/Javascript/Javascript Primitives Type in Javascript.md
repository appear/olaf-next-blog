---
slug: Javascript/Javascript Primitives Type in Javascript
title: Javascript Primitives Type in Javascript
summary: 답은 없다.
date: 2020-11-09
thumbnail: https://img.insight.co.kr/static/2017/11/22/700/2u2l3278puw12345e61p.jpg
---

# Javascript Primitives Type in Javascript

**이 포스트에서 타입스크립트에 대한 이야기는 다루지 않습니다.**   
위키백과에서는 아래와 같이 타입을 설명합니다.

> 자료형 또는 데이터 타입(영어: data type)은 컴퓨터 과학과 프로그래밍 언어에서 실수치, 정수, 불린 자료형 따위의 여러 종류의 데이터를 식별하는 분류로서, 더 나아가 해당 자료형에 대한 가능한 값, 해당 자료형에서 수행을 마칠 수 있는 명령들, 데이터의 의미, 해당 자료형의 값을 저장하는 방식을 결정한다

즉, 타입이란 것은 다른 값과 분별할 수 있는 고유한 특성 입니다.
많은 사람들은 자바스크립트에 타입에 대한 개념이 없다고 생각합니다.
자바스크립트에는 원시 타입이라고 불리는 내장 타입이 있습니다.

- null
- undefined
- boolean
- number
- string
- object
- symbol (ES6 부터 추가되었습니다)

```js
console.log(typeof '올라프' === 'string') // true
console.log(typeof 29 === 'number') // true
console.log(typeof {} === 'object') // true
console.log(typeof Symbol() === 'symbol') // true
console.log(typeof undefined === 'undefined') // true
```

null 의 타입이 Object 로 평가되는 오래된 버그가 있습니다. 

```js
console.log(typeof null === 'object') // true
```

자바스크립트에서는 타입을 강제하지 않기 때문에 아래와 같은 코드에도 에러가 발생하지 않습니다.

```js
var message = 'hello'
console.log(typeof message) // string
message = 100
console.log(typeof message) // number
```

프로젝트 규모가 커지고 여러사람의 손을타 개발을 하다보면 의도치 않은 값에 의한 에러가 발생할 여지가 있기 때문에 typeof 를 이용해 예외처리를 해주는 것이 좋습니다.

또 하나 중요하게 집고 넘어갈 것이 있습니다.

**undefined와 undeclared의 차이 즉, undefined와 null 의 차이점 입니다.**

```js
var num 
console.log(typeof num) // undefined

// 선언하지 않은 변수 
console.log(num2) // num2 is not defined
```

num 은 접근 가능한 변수가 선언이 되었으나 값을 할당하지 않은 상태이기 때문에 참조시 undefined 가 찍히게되고 num2의 경우 선언 자체가 되지 않았기 때문에 참조시 에러가 발생합니다.

선언하지 않은 변수에 대한 typeof 의 경우 undefined 가 찍힌다.

```js
var num 
console.log(typeof num) // undefined
console.log(typeof num2) // undefined
```

## 정리

- 자바스크립트의 원시 타입은 7가지가 있다.
- 변수의 타입은 없지만, 값은 타입이 있다.
- undefined와 undeclared는 엄연히 다르다
- typeof 를 사용하여 예외처리를 잘해주자

