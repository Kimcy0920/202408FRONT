function fetchData() { // axios
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // 데이터를 가져오는 코드 넣기
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Failed to fetch data.');
            }
        }, 2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}
getData(); 