---
slug: This rule in Javascript
title: This rule in Javascript
summary: 답은 없다.
date: 2020-11-09
thumbnail: https://img.insight.co.kr/static/2017/11/22/700/2u2l3278puw12345e61p.jpg
---

# This

This에는 아래 4가지 규칙이 있습니다.

- 기본 함수에서의 This
- Object Method 에서의 This
- New 생성자 함수의 This
- Apply, Call, Bind 를 이용한 This 바인딩

## 1. 기본 바인딩

```js
function foo() {
    console.log(this.a);
}
var a = 20; // global scope
foo();
```

첫 번째 규칙은 우리가 일반적으로 사용하는 기본적인 함수호출입니다.

기본적인 함수 호출에서는 기본 바인딩이 적용되어 이때의 this 는 전역 객체를 참조합니다.
즉, 위에서는 this.a === window.a 와 같습니다.

그렇다면 엄격 모드라 불리는 **strict** 모드에서는 어떻게 바인딩이 될까요?

```js
'use strict'

function foo() {
    console.log(this.a); // Cannot read property 'a'
}

var a = 20;
foo();
```

**strict** 모드에서 전역으로 바인딩 될 때 window 는 undefined로 바인딩 됩니다. 그 때문에 undefined.a 라는 것을 참조하게 되고 에러가 나는 것입니다.

## 2. Object Method 에서의 바인딩

두 번째 This 바인딩 규칙은 객체의 포함여부에 따라서 달라집니다.

```js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

obj.foo();
```

foo 는 obj라는 객체의 메서드로 존재합니다.

호출 부가 중요합니다. obj.foo() 즉 obj를 통해 foo를 호출합니다.

함수(foo)가 실행될 때 함수 레퍼런스에 대한 컨텍스트 객체(obj)가 존재할때 (obj는 foo를 포함하고 있다.)
암시적 바인딩이라는 규칙을 따릅니다.

쉽게 말하면 객체 안에 메서드가 존재할 때 메서드안에 this는 자신을 포함하는 객체를 본다는 것입니다.
암시적 바인딩을 사용할때 암시적 소실이 일어날 수 있어 주의해야 합니다.

- 메서드를 변수에 담아서 호출할 때

```js
function foo() {
    console.log(this.a) // Hello
}
var obj = {
    a: 2,
    foo: foo
}
var bar = obj.foo;
var a = 'Hello'

bar() 
```

- 메서드를 콜백으로 넘겨줄 때

```js
function foo() {
    console.log(this.a); // Hello
}
function doFoo(callback) {
    callback();
}
var obj = {
    a: 2,
    foo: foo
}
var a = 'Hello';

doFoo(obj.foo); 
```

- 메서드에서 함수를 정의하여 This를 정의 할 때

```js
var obj = {
    a: 2,
    foo: function () {
        console.log(this.a); // 2

        function inner() {
            console.log(this.a); // Hello
        }
        inner();
    }
}
var a = 'Hello'
obj.foo()
```

가장 많이 겪는 경우가 위의 경우일 거라고 생각합니다.

메서드 안에서 함수를 정의하여 그 안에서 this를 참조하려고 할 때 우리의 생각으로는 해당 객체가 this로 잡힐 것으로 생각하나, 실제로는 기본 바인딩이 적용되어 의도한 대로 동작하지 않는 경우가 대부분입니다.

그렇다면 위의 경우 어떻게 inner 함수에서 obj를 참조할 수 있을까요?

```js
var obj = {
    a: 2,
    foo: function() {
        var self = this;
        console.log(this.a) // 2
        
        function inner() {
            console.log(self.a); // 2
        }

        inner()
    }
}
```

가장 간단한 방법은 자기 자신을 임시로 담아 놓을 변수를 만들어주면 됩니다.

위의 코드의 self 라는 변수가 그런 역할을 해줍니다. inner 에서는 self 라는 것을 참조하여 obj에 접근을 하면 되는 것입니다.
다른 방법은 apply, call, bind을 이용해서 호출 부에서 this 바인딩을 시켜주는 방법이 있습니다.

(이번 포스트에서 apply, call을 다루진 않습니다. 쉽게 apply, call을 이용하면 this를 바인딩해줄 수 있구나 정도로만 이해하셔도 무방합니다.)

```js
var obj = {
    a: 2,
    foo: function() {
        console.log(this.a); // 2

        function inner() {
            console.log(this.a); // 2
        }
        inner.call(this)
    }
}
var a = 'Hello';
obj.foo();
```

bind를 이용한 this 바인딩

```js
var obj = {
    a: 2,
    foo: function() {
        console.log(this.a); // 2

        function inner() {
            console.log(this.a); // 2
        }
        var innerFn = inner.bind(this);
        innerFn();
    }
}
var a = 'Hello';
obj.foo();
```

## 3. New 생성자 함수에서의 This

JS에서 new 연산자를 이용한 Function 생성 시 아래와 같은 일들이 일어납니다.

- 새로운 객체가 만들어집니다. (new는 객체를 만드는 방법 중 하나입니다)
- 생성된 객체에 Prototype이 연결됩니다.

Person 이라는 생성자 함수를 정의하고 객체를 만들어보며 this 에 대해 알아보겠습니다.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
```

![prototype 이미지](/image/This-rule-in-Javascript/prototype01.png)

new 연산자를 이용해서 Person 객체를 만들어보겠습니다.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person('올라프', 29);

console.dir(Person)
console.dir(p)
```

![prototype 이미지](/image/This-rule-in-Javascript/prototype02.png)

this.name 이란 것이 Person.name 이라는 것을 알 수 있습니다.   
즉 생성자 함수 안에서의 this는 자기 자신이라는 것을 알 수 있습니다.  
Prototype 영역에서의 this도 알아보겠습니다.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function() {
    console.log(this.name);
}

Person.prototype.setName = function(newName) {
    this.name = newName;
}

var p = new Person('올라프', 29);
p.getName(); // 올라프
p.setName('수정된 올라프'); 
p.getName(); // 수정된 올라프
```

Prototype 영역에서의 this 도 자기자신 즉 위의 경우는 Person 이라는 것을 알 수 있습니다.

하지만 주의해야될 점이 있습니다.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function() {
    console.log(this.name);

    function inner() {
        console.log(this.name); // window.name
    }

    inner();
}

var p = new Person('올라프', 29);
p.getName(); // 올라프
```
