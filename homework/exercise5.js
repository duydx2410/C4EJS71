


// Bài tập 1: in ra từ số 0 tới số 100:

// for (let index = 0; index <= 100; index++) {
//     console.log(index);
// };

// Bài tập 2: in ra số từ 100 về 0:

// for (let index = 100; index >= 0 ; index--) {
//     console.log(index);    
// }

// Bài tập 3: In ra số chẵn, lẻ từ 0 -> 100:

// In số chẵn:

// for ( let A = 0; A <= 100; A += 2) {
//     console.log(A);
// }

// In số lẻ:

// for ( let B = 1; B <= 100; B += 2) {
//     console.log(B);
// }

// Bài tập 4: In ra số chẵn, lẻ từ 100 -> 0:

// In số chẵn:

// for (let A = 100; A >= 0; A -= 2) {
//     console.log(A);        
// }

// In số lẻ:

// for (let A = 99; A >=0; A -= 2) {
    // console.log(A);
// }

//Bài tập 5: tính tổng S = 1 + 2 + 3 + 4 + .... + N, với n nhập từ bàn phím:

// let n = parseInt(prompt("Nhập vào số n:"));
// let S = 0;
// for( let i = 0; i <= n; i++) {
//     S = S + i;
//     console.log(i);
// }
// console.log(`tổng  ${S}`);

// Bài tập 6: Thục hiện tính tổng: S = 1+3+5+7+...+ 2N+1 . N nhập từ bàn phím:

// let N = parseInt(prompt("Nhập giá trị N:"));
// let S = 0;
// for ( let i = 1; i<=(2*N +1); i+=2) {
//     console.log(i);
//     S = S + i;
// }
// console.log(` Tổng S = ${S}`);

// Bài tập 7: Tính tổng S = 2 + 4 + 6 + ... + 2N, N nhập từ bàn phím:

// let N = parseInt(prompt("Nhập giá trị N:"));
// let S = 0;
// for (let i = 0; i <= 2*N; i+=2) {
//     S = S +i;
//     console.log(i);
// }
// console.log(` Tổng S = ${S}`);

// Bài tập 8: Tính tổng S = 1/1 + 1/2 + 1/3 + ... + 1/N, với N nhập từ bàn phím:

// let N = parseInt(prompt("Nhập giá trị N:"));
// let S = 0;
// for ( let i = 1; i <= N; i++) {
//     S = S + 1/i;
//     console.log(i);
// } 
// console.log(` Tổng S = ${S}`);

// Bài tập 9: Tính tổng S = 1/(1*2) + 1/(2*3) + 1/(3*4) + ... + 1/(N*(N+1)), với N nhập từ bàn phím:

// let N = parseInt(prompt(" Nhập giá trị N:"));
// let S = 0;
// for( let i = 1; i <= N*(N+1); i++) {
//     S = S + (1/(i*(i+1)));
//     console.log(i);
// }
// console.log(` Tổng S = ${S}`);

//Bài tập 10: Cho dãy số Fibonacci: 1,1,2,3,5,8,... có dạng: Số sau bằng tổng 2 số liền trước
// - Tìm phân tử thứ N của dãy số, với N nhập từ bàn phím:
// - Tổng N phân tử đầu tiên cảu dãy số với N nhập từ bàn phím: F(n) = F(n-1) + F(n-2)

// let n = parseInt(prompt("Stt fibonacci: "));
// let f1 = 1, f2 = 1;
// let count = 2;//số thứ 2, đếm
// for (let i = 1; i < n/2; i++) {
//     f1 = f1 + f2;
//     count++;
//     f2 = f2 + f1;
//     count++;
// }
// console.log(`f${count-1}: ${f1} , f${count}: ${f2}`);


// Bài 11: In ra màn hình :******
//                         ****** với chiều dài là a dấu *, rộng là b dấu *
//                         ******

// let a = parseInt(prompt("Nhập a:"));
// let b = parseInt(prompt("Nhập b:"));
// let s = ""
// for (let i = 0; i < b; i++) {
//     s += "*" ;
// }
// let result = '';
// for (let i = 0; i < a; i++) {
//     result = s +'\n';
// }
// console.log(s);

// console.log(result);

// let a = parseInt(prompt("Nhập chiều rộng a:"));
// let b = parseInt(prompt("Nhập chiều dài b:"));
// let s = "";
// for( let i = 0; i < b; i++) {
//     s = s + "*";
// }
// let result = "";
// for(let i = 0; i < a; i++){
//     result = s + "\n";
// }
// console.log(s);
// console.log(result);


// Bài tập 12: In ra màn hình : *
//                              **
//                              *** 
//                              ****
// Với cạnh chiều dài dưới cùng là a dấu *(a nhập từ bàn phím)

// let a = parseInt(prompt("Nhập vào chiều dài dưới cùng a:"));
// let s = "";

// for( let i = 0; i < a; i++) {
//     s = s + "*";
//     console.log(s);    
// }


//bài tập 13: yêu cầu người dùng nhập mật khẩu, nếu mật khẩu nhỏ hơn 8 ký tự, yêu cầu nhập lại:

// let pass = prompt("Nhập mật khẩu:");
// while (pass.length<8) {
//     pass = prompt("Pass quá ngắn, nhập lại:");
// }
//     console.log(pass);

// Bài tập 14: yêu cầu người dùng nhập mật khẩu, nếu mật khẩu nhỏ hơn 8 ký tự, thông báo mật khẩu quá ngắn vàyêu cầu nhập lại:

// let pass = prompt("Nhập mật khẩu vào đây:");
// while (pass.length < 8) {
//     alert ("Mật khẩu quá ngắn!");
//     pass = prompt("Nhập lại mật khẩu!");
// }
// console.log(pass);

// Bài tập 15: Yêu cầu người dùng nhập mật khẩu chứa đồng thời 3 ký tự đặc biệt: $,%,_, và lớn hơn 8 ký tự, thiếu điều kiện nào yêu cầu nhập lại:
//  let pass = prompt("Nhập mật khẩu:");
//  while (((pass.length < 8) && pass.search(("$","%","_") <= 0)))  {
//         //   pass = prompt("Nhập lại mật khẩu:");
//       }
//       console.log(pass);


//Bài tập 16: Nhập vào 1 số, kiểm tra xem có phải số chính phương ko, nếu là hợp số, in ra các ước số của nó:

// let n = parseInt(prompt("Nhập số (kiểm tra hợp số - số nguyên tố):"));
// let soLuongUocSo = 0;
// for (let i = 1; i <= n; i++) {
//     if(n % i === 0) {
//         console.log(i);
//         soLuongUocSo++;
//         if (soLuongUocSo > 2) {
//             break;
//         }
//     }
// }
//     if(soLuongUocSo > 2) {
//         console.log(`${n} là Hợp số`);
//     }
//     else {
//         console.log(`${n} là số Nguyên tố`);        
    // }


      
























