


// for (let index = 0; index < 5; index++) {
//     console.log(index);    
// };

//in số chẵn từ 0->10

// for (let A = 0; A <=10; A+=2) {
//     console.log(A);
    
// }

//in số let từ 0 đến 10
// for(let B = 1; B<10; B+=2) {
//     console.log(B);
    
// }

//chạy từ 10 về 0

// for(let A = 10; A>0; A-=2) {
//     console.log(A);
    
// }

//(m<n)
// let m = parseInt(prompt("Nhập vào giá trị số m:"));
// let n = parseInt(prompt("Nhập vào giá trị số n"));
// for(let i = m; i<n; i++) {
//     // console.log(i);   
// }

// let m = parseInt(prompt("Nhập giá trị n"));
// let m = parseInt(prompt("nhập giá trị m"));
// let a,b
// //Math.max(), Math.min();
// a = (m)
// if (m<=n) {
//     // for(let i = m; i<n; i++) {
//     //     console.log(i);       
//     // }
//     a = m; b = n;
// }
// else {
//     // for(let i=n; i<=m; i++) {
//     //     console.log(i)     
//     // }
//     a = n; b = m;

// }
// b1: kb :a,b với a= min(m,n), b = max(m,n);
// b2: for a=>b

//Tính tổng.
//cho nhập vào 1 số, tính tổng từ 0->10

// let m = parseInt(prompt("Nhập vào giá trị m:"));
// let s = 0;
// for (let i = 0; i <=m; i++) {
//     s=s+i;   //s+=i 
// }
// console.log(s);

// let m = parseInt(prompt("Nhập giá trị m:"));
// let s = 0;
// for (let i = 0; i<=m; i+=2) {
//     s = s + i;
// }
// console.log(s);

// let m = parseInt(prompt("nhập giá trị m:"));
// let s = 0;
// for(let i = 1; i<=m; i+=2) {
//     s = s + i
// }
// console.log(s);

// let m = parseInt(prompt("Nhập giá trị m:"));
// let s = 0;
// for ( let i = 1; i<=m ; i++) {
//     s = s + 1/i;
// }
// console.log(s);


// tính s = 1! + 2! + ... + M!
// let m = parseInt(prompt("nhập m"))
// let s = 0;
// for (let i = 0; i<=m; i++) {
//     let giaiThua = 1;
//     for (let j = 1; j <= i; j++) {
//         // tính giai thừa
//         giaiThua = giaiThua*j;
//     }
// s = s + giaiThua;
// }
// console.log(s);

//cách 2:
// let m = parseInt(prompt("MM"));
// let s = 1;
// let giaiThua = 1;
// for (let i = 0; i <= m; i++) {
//     giaiThua = giaiThua * i;
//     s = s + giaiThua;    
// }

// While:
// let n = Number(prompt("Nhập 1 số:"));
// while (n<8) {
//     n = Number(prompt("Nhập lại n>=8"));
// }
// console.log(n);

//bài 13:
// let mk = prompt("Nhập mật khẩu");
// while (mk.length < 8){
//     mk = prompt("Mật khẩu quá ngắn, Nhập lại:")
// }
// console.log(mk);

//Bài: bắt người dùng nhập vào 1 số >10, và là số chẵn.

// let x = parseInt(prompt("Nhập vào số chẵn >10"));
// while (!((x>10) && (x % 2 === 0))) {

// // if ((x<=10) || (x % 2 !==0)) {
//     x = prompt("số sai, nhập lại")
// }
// console.log(x);

//Bài 15: Yêu cầu người dùng nhập mật khẩu có ký tự đặc biệt ($,%,_),và lớn hơn 8 ký tự,thiếu điều kiện bắt nhập lại.

let pass = prompt("Nhập mật khẩu:");
if (!(pass.length >=8 && pass.search("@") >=0)) {
    pass = prompt("Nhập lại pass:")
}
console.log(pass);



