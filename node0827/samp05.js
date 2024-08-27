function outer() {
    var a = 'A';
    var b = 'B';

    function inner() { // 내부 함수 inner가 외부함수 outer에 접근
        var a = 'AA';
        console.log(b);
    }
    return inner;
}

var outerFunc = outer();
outerFunc(); // 결과값: B

/*
    클로저(closure): 함수를 지칭, 함수가 선언된 환경과의 개념
    자신이 선언될 당시의 환경을 기억하는 함수
    내부함수가 외부함수의 context에 접근할 수 있는 것

    내부->외부 접근가능
    외부->내부 접근X
*/