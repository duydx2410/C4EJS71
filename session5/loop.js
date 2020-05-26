


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

// let pass = prompt("Nhập mật khẩu:");
// while (!(pass.length >=8 && pass.search("@") >=0)) {
//     pass = prompt("Nhập lại pass:")
// }
// console.log(pass);


//Ví dụ break vs continues

//continues:
// let n = 10;
// for( let i = 0; i <= n; i++) {
//     if(i % 2 === 1) {
//         continue; // bỏ qua 1 lượt lặp hiện tại
//     }
//     console.log(i);
// }

//Break:
// let n = 10;
// for( let i = 0; i <= n; i++) {
//     if(i % 2 === 1) {
//         break;
//     }
//     console.log(i);
// }


//1: In ra các số từ 0 -> 100:
// for (let i = 0; i <= 100 ; i++) {   
//     console.log(i);   
// }

//2: In ra các số từ 100 -> 0 :

// for (let i = 100; i >= 0; i--) {
//     console.log(i);  
// }

//3: In ra các số chẵn lẻ từ 0 -> 100
// Số chẵn:

// for (let i = 0; i <= 100; i+=2) {
//     console.log(i);   
// }

// Số lẻ:

// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);   
// }

//4: in ra các số chẵn , lẻ từ 100 -> 0:
// Số chẵn:

// for (let i = 100; i >= 0; i-=2) {
//     console.log(i);   
// }

// Số lẻ:

// for (let i = 99; i >= 0; i-=2) {
//     console.log(i);   
// }

//5: Thực hiện tính tổng: S = 1 + 2 + 3 + ... + N, với N nhập từ bàn phím:

// let N = parseInt(prompt("Nhập giá trị của N:"));
// let S = 0;
// for (let i = 0; i <= N; i++) {
//     S = S + i;   
// }
// console.log(` Tổng S = ${S} với N = ${N}`);

//6: S = 1 + 3 + 5 + ... + 2N + 1

// let N = parseInt(prompt("Nhập giá trị của N:"));
// let S = 0;
// for (let i = 0; i <= N; i++) {
//     S += (2 * i + 1)
// }
// console.log(S);

//7: S = 2 + 4 + 6 + ... + 2N

// let n = parseInt(prompt("Nhập giá trị N:"));
// let s = 0;
// for (let i = 0; i <= n; i++) {
//     s += 2*i
// }
// console.log(s);

// 8: S = 1/1 + 1/2 + 1/3 + ... + 1/N
// let n = parseInt(prompt("Nhập giá trị N:"));
// let S = 0;
// for(let i = 1; i <= n; i++) {
//     S = S + 1/i;
// }
// console.log(S);

//9: S = 1/1*2 +1/2*3 + ... + 1/N*(N+1)

// let n = parseInt(prompt("Nhập giá trị N:"));
// let S = 0;
// for (let i = 1; i <= n; i++) {
//     S = S + 1/(i * (i + 1))
// }
// console.log(S);

//10: dãy số Fibonacci: 1,1,2,3,5,... 
// let n = parseInt(prompt("nhập giá trị n:"))
// let f1 = 1;
// let f2 = 1;
// let count = 2;
// for (let i = 1; i < n/2; i++) {
//     f1 = f1 + f2;
//     count++;
//     f2 = f2 + f1;
//     count++;
// }
// console.log(`F${count - 1}: ${f1}   F${count}: ${f2}`);

//In hình chữ nhật *
// let a = parseInt(prompt("Nhập vào chiều dài hình chữ nhật:"));
// let b = parseInt(prompt("Nhập vào chiều rộng hình chữ nhật:"));
// let s = "";
// for (let i = 0; i < a; i++) {
//     s = s + "*";   
// }
// let p = "";
// for (let i = 0; i < b; i++) {
//     p += s + "\n";
// }
// console.log(p);


// In hình tam giác

// let a = parseInt(prompt("Nhập a:"));
// let s = "";
// for (let i = 1; i <= a; i++) {
//     s = s + "*";   
//     console.log(s);
// }

// 13,14: Yêu cầu người dụng nhập mật khẩu, nếu < 8  ký tự. yêu cầu nhập lại.

// let pass = prompt("Nhập mật khẩu:");
// while (pass.length<8) { 
//     pass = prompt("Mật khẩu quá ngắn, nhập lại:")
// }
// console.log(pass);

//15:Yêu cầu người dùng nhập mật khẩu chứa đồng thời 3 kí tự($,%,_) và dài hơn 8 ký tự. thiếu điều kiện nào yêu cầu nhập lại.

// let pass = prompt("Nhập mật khẩu:");
// while (!((pass.length >= 8) && (pass.search("$") > 0))) {
//     pass = prompt("Mật khẩu chưa đủ điều kiện, nhập lại:")
// }
// console.log(pass);

//16, kiểm tra số chính phương

// let n = parseInt(prompt("Nhập 1 số"));
// let soUoc = 0;
// for (let i = 1; i < n; i++) {
//     if( n % i ===0) {
//         console.log(soUoc);
//         soUoc++;
//         if (soUoc > 2) {
//             break;
//         }
//     }
    
// }
// if (soUoc > 2) {
//     console.log(`${n} là Hợp số:`); 
// }
// else {
//     console.log(`${n} là số nguyên tố.`);
    
// }







