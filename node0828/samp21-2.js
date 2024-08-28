// 동기적으로 콜백 지옥
function work(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString());
    }, sec * 1000);
};

work(1, (result) => {
    
    work(1, (result) => {
        
        work(1, (result) => {
            console.log('세번째 작업', result);
        });
        console.log('두번째 작업', result);
    });
    console.log('첫번째 작업', result);
    // 콘솔 위치를  옮겨도 결과는 같음.
    // work마다 자체적으로 setTimeout이 있기 때문에 위치와 상관없이 순서대로 출력
});