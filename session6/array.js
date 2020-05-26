
//Khai báo:

// let arr = []; // mảng rỗng
// let list = [gtri1, gtri2, gtri3,...]; // chỉ js chấp nhận nhiều kiểu dữ liệu trong 1 mảng.
//-gtri: kiểu dữ liệu bất kỳ.
//- các giá trị có thể không cùng kiểu dữ liệu.

//VD:

// let arr = [1, 2, 3, 4, 5];
// // let listNumbers = [ 1, 2, 3, 4, 5];
// // let listName = [` Thắng`, "Duy", 'Tùng'];

// console.log(arr);
// console.log(listNumbers);
// console.log(listName);

// arr.push(10);
// console.dir(arr);//dạng mảng
// arr.push(11, 12, 13, 14);
// console.table(arr)

// arr.unshift(20);
// console.dir(arr);//dạng mảng
// arr.unshift(21, 22, 23);
// console.table(arr)

//Duyệt: mảng[index] -> lấy gtri của mảng tại index
// index : [0 -> length - 1]
// console.log(arr[1]);
// console.log(arr[14]);
// console.log(arr[-1]);
//lấy ngoài giá trị mảng, ->> bị undefine


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);  
// }

// Sửa: mảng[index] = giá trị mới;
// console.log(arr[1]);
// arr[1] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// console.log(arr[1]);

// Xóa: mảng.splice(vị trí bắt đầu, số lượng muốn xóa);
// console.log(arr[1]);
// arr[1] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// console.log(arr[1]);

// arr.splice(1,2);
//xóa 1 phần tử, .splice(vị trí cần xóa, 1);

// .pop()>< push(): xóa đầu phần tử
// .shift()>< unshift: xóa cuối phần tử
// .pop() & .shift() trả lại giá trị phần tử bị xóa

// console.log(arr[1]);
// arr[1] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// console.log(arr[1]);
// arr.pop(2);
// arr.shift(4);

// Stack: first in last out. [push()    pop()] và [unshift()     shift()]
// Queue: first in first out. [push()   shift()]  và [pop()   unshift()]


//VD:
//1: khai báo mảng rỗng: yêu cầu người dùng nhập 5 số vào mảng

// let arr = [];
// let length = 5;
// for (let i = 0; i < length; i++) {
//     let n = parseInt(prompt("Nhập 1 số:"));
//     arr.push(n);
//     //arr[i] = n; ko nên dùng
// }

// //2: In giá trị của mảng ra từng dòng.

// console.log("STT: Giá trị");
// for (let i = 0; i < arr.length; i++) {
//     console.log(` ${i+1} :  ${arr[i]}`);
// }

// //3: Tính tổng giá trị của mảng
// console.log("=====Tổng=====");
// let S = 0;
// for (let i = 0; i < arr.length; i++) {
//     S = S + arr[i]  
// }
// console.log(` Tổng: ${S}`);

// //   Tính trung bình.
// console.log(` Trung bình: ${S/arr.length}`);

// //4: Yêu cầu nhập 1 số N: 
// //-a: Kiểm tra số N có trong mảng không.
// let arr = [1,2,8,5,9,3];
// let isExist = false;
// let N = Number(prompt("Nhập giá trị N:"));

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element === N){
//         isExist = true;
//         break;
//     }   
// }
// if (isExist) {
//     console.log("Có tồn tại");
// } else {
//     console.log("Không tồn tại");   
// }

//-b: In ra các số thuộc mảng < N
// for (let i = 0; i < N; i++) {
//     const element = arr[i];
    
// }
// if(arr[i] < N) {
//     console.log(arr[i]);
// }


// //5: cho người dùng nhập 1 vị trí và 1 giá trị, update giá trị này váo vị trí đó. 

// let Stt = parseInt(prompt("Vị trí muốn sửa:"));
// while (Stt<1 ||Stt >= arr.length){
//     Stt = parseInt(prompt("Nhập đúng số thứ tự: "));
// }
// arr[Stt - 1] = Number(prompt("Nhập giá trị mới: "));



// // Sắp xếp rồi in ra màn hình: (hàm sort) or thuật toán
// // Hàm sort:
// arr.sort();//tăng dần.
// arr.reverse(); // đảo ngược thứ tự để tạo giảm dần.
// // Thuật toán:
// let arr = [6,7,3,2,9];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) // lấy sau vị trí 1 cấp, =>
//      {
//          if (arr[i] > arr[j]) {
//              //đổi chỗ
//              let temp = arr[i];
//              arr[i] = arr[j];
//              arr[j] = temp;
//          }     
//     } 
// }
// console.log(arr);
// muốn sắp xếp ngước lại thì đảo dấu.
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if( arr[i] < arr[j]) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }   
//     }
// }
// console.log(arr);
// console.log(` Số lớn thứ 2: ${arr[1]}`);


// 1: Tính tổng các phần tử của 1 mảng:

// let arr = [ 1, 6, 3, 8, 7];
// let s = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     s = s + arr[i];
// // }
// console.log(arr);

// console.log(` Tổng các phần tử trong mảng: ${s}`);

// // 2: Tính trung bình các phần tử của mảng:
// console.log(` Trung bình các phần tử của mảng: ${s/arr.length}`);
// 3: Tìm số lớn nhất, nhỏ nhất:
// let maxInNumbers = Math.max.apply(Math, arr);
// let len = arr.length;
//  let max = - Infinity;
//      while (len--) {
//      if (arr[len] > max) {
//         max = arr[len];
//              }
//         }
// console.log(` Số lớn nhất : ${max}`);



// let minInNumbers = Math.min.apply(Math, arr);
// let len1 = arr.length;
// let min = Infinity;
//     while (len1--) {
//         if(arr[len1] < min) {
//             min = arr[len1];
//         }
//     }
// console.log(` Số Min : ${len1}`);
    

// console.log(` Số lớn nhất trong mảng là: ${maxInNumbers}`);
// console.log(` Số nhỏ nhất trong mảng là: ${minInNumbers}`);
// //4: Sắp xếp mảng:

// let arrXuoi = arr.sort();
// console.log(` Sắp xếp mảng: ${arrXuoi}`);
// console.log(` Số nhỏ thứ 2 là: ${arrXuoi[1]}`);


// // //5: Tìm số lớn thứ 2, nhỏ thứ 2


// let arrNguoc = arrXuoi.reverse();
// console.log(` Sắp xếp ngược : ${arrNguoc}`);
// console.log(` Số lớn thứ 2 là: ${arrNguoc[1]}`)

//6: Tìm các số trong mảng lớn hơn N nhập từ bàn phím:


// xác định N có thuộc mảng ko
// let isExist = false;
// let N = parseInt(prompt("Nhập giá trị N:"));

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if(element === N) {
//         isExist = true;
//         break;
//     }
// }
// if (isExist) {
//     console.log(` Có tồn tại ${N} trong mảng`);   
// } else {
//     console.log(` Không tồn tại ${N} trong mảng`);  
// }
// // in các số nhỏ hơn N
// // for (let i = 0; i < N; i++) {
// //     const element = arr[i];   
// // if (arr[i] < N ) {
// //     console.log(arr[i]);
// //     }
// // }
// //In các sô lớn hơn N:
// for (let i = 0; i < N; i++) {
//     const el = arr[i];
    
//     if (arr[i] > N) {  
//         console.log(arr[i]);   
//     }
// }


// Cho 1 mảng : ["Javascript" , "Html" , "Css" , "Pascal"], Nhập 1 giá trị từ bàn phím,
//tìm các giá trị trong mảng chứ từ nhập vào.

// let arr = ["Javascript", "Html", "Css", "Pascal"];
// let searchKey = prompt("Nhập giá trị:");
// console.log(`=======Tìm giá trị=======`);
// console.log(`===Kết quả tìm kiếm "${searchKey}" ===`);

// for (const keyName of arr) {
//     if(keyName.toLowerCase().includes(searchKey.toLowerCase())) {
//         for (const key in keyName) {
//             if (keyName.hasOwnProperty(key)) {
//                 const value = keyName[key];
//                 console.log("\t" + key + ": " + value);
                
//             }
//             // console.log('\t --- \t --- ');
            
//         }
//     }
// }


//8. Đảo ngược chuỗi nhập vào
// let str = 'Hello world';
// let arr = str.split("");
// console.log(arr.reverse().join(""));



















    

        
   








