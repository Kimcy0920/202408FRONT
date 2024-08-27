const onClickAdd = () => {
    // 01.
    const textEl = document.getElementById("add-text"); // add-text에 입력한 값 저장
    const text = textEl.value; // add-text에 입력한 값 저장
    textEl.value = ""; // 입력한 문자 초기화
    console.log(text); // 콘솔에 text에 들어간 문자 출력

    // 02.
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;

    // 03.
    const button = document.createElement("del-button");
    button.textContent = "-----DELETE";
    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li"); // li에 가까운 것 지우기
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    // 04.
    div.appendChild(p);
    div.appendChild(button); // p -> div -> li
    li.appendChild(div); // 태그 붙이기
    document.getElementById("memo-list").appendChild(li); // memo-list에 li 아래로 출력
}

const onClickDelAll = () => {
}


document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd())
    .addEventListener("click", () => onClickDelAll());