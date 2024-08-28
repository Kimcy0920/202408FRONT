setTimeout(() => {
    console.log('todo: First work!');
    setTimeout(() => {
        console.log('todo: Second work!');
    }, 2000);
}, 3000);
// 비동기 작업를 순서대로 실행하려면 콜백 안에 콜백 넣어야 함.