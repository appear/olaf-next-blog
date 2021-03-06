---
slug: Javascript/Lexical Scope in Javascript
title: Lexical Scope in Javascript
summary: 답은 없다.
date: 2020-11-09
thumbnail: https://img.insight.co.kr/static/2017/11/22/700/2u2l3278puw12345e61p.jpg
---

# Lexical Scope in Javascript

클로저를 이해함에 있어 중요한 부분인 렉시컬 스코프에 대해 알아보겠습니다.
자바스크립트 코드를 실행할때 컴파일 단계에서 몇가지 일이 일어납니다. 그 중의 하나인 **토크나이징**과 **렉싱**에 대해서 알아보겠습니다.
토크나이징은 문자열을 나누어 **토큰** 이라는 조각으로 만드는 과정입니다

```js
var num = 5;
```

위와 같은 구문을 만나게 된다면, 아래와 같은 토큰 결과를 가져옵니다.

```js
- var 
- num 
- =
- 5
- ;
```

## 렉스타임

컴파일러는 스크립트 코드를 실행하는 첫 단계때 토크나이징/렉싱이라는 작업을 한다고 했습니다.    
토큰 처리과정에서 토큰을 분석하여 생성된 토큰에 의미를 부여하는 것을 렉싱 이라고합니다.
이 과정을 렉스타임이라고합니다.

## 렉시컬 스코프

개발자가 코드를 작성할때 변수를 어디에 작성하는가를 바탕으로 따라서 렉시타임에 토큰이 분석되며 스코프가 결정되는 것 입니다.
이때 구성된 스코프를 렉시컬 스코프라고합니다.

```js
var a = 10; // global
function foo() {  // foo
    var b = 10;
    function bar() { // bar
        var c = 10;
        console.log(a + b + c) // 30
    }
    bar()
}
foo()
```

우리가 위와 같은 코드를 작성할때 실행 단계에 이미 코드들의 스코프는 결정이 됩니다.

- global 안에 사는 변수 a
- foo 안에 사는 변수 b
- bar 안에 사는 변수 c

위의 코드가 실행될때 스코프 버블은 bar 안쪽에서 부터 시작되어 올라갑니다.

scope 에 대한 검색은 기본적으로 하위에서 상위는 되지만 상위에서 하위로의 검색은 불가합니다.

```js
var a = 10;
function foo() {
    var b = 10;
    console.log(a);
    console.log(b);
}
console.log(b); // b is not defined
```

하위에서 global 을 참조 할 수 있다는 간단한 예제였습니다.
다시 위쪽의 코드로 올라가보면

1. console.log(a + b + c) 각각 a b c 에 대한 검색이 필요합니다.
2. bar 내부에서 a 를 찾지만 없습니다. 상위 스코프에서 검색을 실행합니다. 이것을 스코프 체인이라고 부릅니다. foo 에서 a 를 찾습니다 없습니다. 마지막으로 global 스코프에서 a를 검색합니다.
3. b 에 대해 2번 작업을 실행합니다.
4. c 는 bar 스코프에 있는 변수이기 때문에 바로 검색이 가능합니다.
5. 결과적으로 30 이라는 값을 출력합니다.

## 정리하기

컴파일레이션의 렉싱 단계에서 모든 변수들이 어디서 어떻게 선언되었는바탕으로 실행 단계에서 스코프를 구성합니다.
이렇게 구성되는 스코프가 렉시컬 스코프 입니다.
