---
slug: Javascript/Async to Sync in Javascript
title: Async to Sync in Javascript
summary: 답은 없다.
date: 2020-11-09
thumbnail: https://img.insight.co.kr/static/2017/11/22/700/2u2l3278puw12345e61p.jpg
---

## 들어가며

프로젝트를 진행하다보면 HTTP 통신을 통해 데이터를 가져와야할 경우가 있습니다.    
기본적으로 HTTP통신은 비동기적으로 이루어집니다.    
그렇다보니 데이터를 받아오기전에 Rendering이 이루어지는 경우도 있고 미리 연산처리를 해버려 에러를 발생시키는 경우도 빈번하게 발생합니다. 
이번 포스팅에서는 위와 같은 일을 방지하기 위해 Javascript 에서의 비동기를 동기로 실행하는 방법에 대해서 알아보려합니다 👍   

## 비동기 / 동기
우리는 카페에가서 음료를 주문하고 진동벨을 받아옵니다.    
자리에가서 앉아 있다 진동벨이 울리면 커피를 받아옵니다. 이를 **비동기 처리**에 비유할 수 있습니다.   
각자의 일을 처리하다 자신의 차례가 오면 자신의 일을 수행합니다. 서로에게 영향을 주지 않습니다.   
진동벨이 없다고 생각해보세요 카페에가서 음료를 시키고 음료가 나올때까지 카운터에서 기다려야한다면 우리는 커피가 나오기전까지는 자리에 앉아  업무를 볼 수 없을거에요 이처럼 앞의 일이 끝나야 다음일을 처리할 수 있는 것을 **동기의 처리**에 비유할 수 있습니다.  

## 비동기를 동기로 동작시키는법
자바스크립트에서의 비동기를 동기로 동작시키는 대표적인 3가지의 방법을 알아보겠습니다.

- Callback Function
- Promise
- Async / Await
- Generator (이 포스트에서는 다루지 않습니다)

### 1. Callback

```js
function a(callback) {
    const whoami = 'i am A';
    callback(whoami);
}

function b(message) {
    console.log(`넘겨 받은 값: ${message}`);
}

a(function(message) {
    console.log(`넘겨 받은 값: ${message}`);
})

a(b)
```

기본적인 Callback의 사용법은 위와 같습니다 😉

- a 는 callback 즉 function을 받는 함수입니다.
- a 는 받은 함수에 ‘i am A’ 라는 값을 넣어줍니다.
- b 는 a에서 넘겨준 ‘i am A’ 라는 값을 받아 console 에 찍어줍니다.

위의 코드의 동작을 이해하셨다면 비동기를 동기로 바꾸는 코드도 쉽게 이해하실 수 있습니다.

```js
function step1() {
    setTiemout(function() {
        console.log('step1 run...');
    }, 2000)
}

function step2() {
    setTiemout(function() {
        console.log('step2 run...');
    }, 1000)
}
```

- 두개의 함수가 있습니다.
- step1은 실행 후 2초가 걸리고, step2는 1초가 걸립니다.
- 우리는 step1이 실행되고 step2 가 실행되기를 바랍니다.

```js
step1();
step2();
```

위의 코드를 실행해보면 우리가 원했던 결과가 나오지 않습니다.

- step2 가 실행하고 step1 이 실행됩니다.

어떻게 하면 우리가 원하는대로 실행시킬 수 있을까요 ? 바로 ‘Callback’ 을 이용하면 됩니다.

```js
function step1(callback) {
    setTiemout(function() {
        console.log('step1 run...');
        callback();
    }, 2000)
}

function step2(callback) {
    setTiemout(function() {
        console.log('step2 run...');
    }, 1000)
}

// 방법 1
step1(step2)

// 방법 2
step1(function() {
    setTiemout(function() {
        console.log('step2 run...');
    })
})

```

- step1 은 함수를 인자로 받는 함수입니다.
- step1 은 받은 함수를 실행해주는 역할을 합니다.
- 우리가 의도한대로 step1 이 실행된 후 step2 가 실행됩니다.

위와 같은식으로 Callback을이용하면 비동기를 동기처럼 동작하게 할 수 있습니다.

하지만 지금은 함수가 2개 뿐이지만 함수가 많아질 수록 함수의 깊이가 깊어집니다. 표현방법 2 처럼 말이죠 함수안에 함수 함수안에 함수…. 그안에 또 함수 … 다들 한번쯤 들어보셨을만한 Callback Hell 이 되는 것이죠 .. 그래서 조금더 깔끔하게 처리할 방법이 필요했습니다.

그것이 2번째 방법인 Promise 입니다.

## 2. Promise