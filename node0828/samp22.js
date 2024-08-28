function workP(sec) {
    // Promise의 인스턴스를 리턴, then에서 리턴값 받음
    return new Promise((resolve, reject) => {
        // Promisse 생성 시 넘기는 콜백: resolve, reject
        // resolve 동작 완료 시 호출, 에러 발생 시 reject
        setTimeout(()=> {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

workP(1).then((result) => {
    console.log('첫번째 작업', result);
    return workP(1);
}).then((result) => {
    console.log('두번째 작업', result);
    return workP(1);
}).then((result) => {
    console.log('세번째 작업', result);
});