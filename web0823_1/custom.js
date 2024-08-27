// alert("Ang Kimojji~");
// console.log("Hello World, 모찌 모찌 기모찌");
        
// const title = document.getElementById("title");
// const title = document.querySelector(".title");
// console.log(title);

// const frame = document.querySelector("#wrap .box1");
const frame = document.querySelectorAll("#wrap article");
// let i = 0;
// for(let item of frame) {
//     console.log(++i, item);
// }
for(let i=0; i<frame.length; i++) {
    console.log(i, frame[i]);
}

