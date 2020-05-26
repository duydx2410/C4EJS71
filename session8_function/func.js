//khai báo
// function helloworld() {
//     console.log("Hello from function");
// }
// gọi
// helloworld();
// helloworld();

// khai báo function sử dụng tham số:

// function xinChao(userName){// biến này là tham số đại diện
//     console.log(`Xin chào ${userName}`);
// }
// xinChao("Duy");
// xinChao("Linh");
// xinChao("Trang");


//VD: Tính tổng 2 số:
// function tong2(a1,a2) {
//     console.log(a1);
//     console.log(a2);
    
//     let sum = a1 + a2;
//     console.log(` Tổng 2 số là: ${sum}`);   
// }
// tong2(2, 3);

// function tinhTong3(a1, a2) {
//     let s = a1 + a2;
//     return s;
// }
// let n = tinhTong3(5, 6);
// console.log(n);

//VD: viết function đầu vào nhận 1 mảng, tính tổng các giá trị 

// function tinhTong4(a) {
//     // if (typeof a == "array") {
//     let s = 0;
//     for (let i = 0; i < a.length; i++) {
//         let s = s + a[i];   
//     }
//         return s;
//         //} else {
//             // return 0;
//         //}
// }
// let sum = tinhTong4([1,2,3,4,5,6]);
// console.log(sum);


// function




// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:

// tên, giá, hãng sx
// 1. in ds đt ra màn hình (không sử dụng log mảng và log object)
// 2. cho ngdung thêm 1 đt mới vào mảng, bằng cách cho ngdung nhập tên, giá, hãng rồi thêm đt mới này vào mảng
// 3. ngdung nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)

// let listPhone = [
//   {
//     name: 'Galaxy Note',
//     price: 10e6,
//     brand: 'Samsung'
//   },
//   {
//     name: 'Xperia 1',
//     price: 11e6,
//     brand: 'Sony'
//   },
//   {
//     name: 'iPhone 11',
//     price: 12e6,
//     brand: 'Apple'
//   },
// ];

// inDanhSachDT();
// themMoi();
// // // In ra
// for (let i = 0; i < listPhone.length; i++) { // mảng
//   const phone = listPhone[i]; // object
//   console.log(i + 1);
//   for (const key in phone) {
//     const value = phone[key];
//     console.log("\t" + key + ": " + value);
//   }
//   console.log('\t --- \t --- ');
// }

// thêm mới

// let newPhoneName = prompt("Tên đt mới:");
// let newPhonePrice = Number(prompt("Giá đt mới:"));
// let newPhoneBrand = prompt("Hãng đt mới:");
// let newPhone = {
//   name: newPhoneName,
//   price: newPhonePrice,
//   brand: newPhoneBrand,
// };
// listPhone.push(newPhone);
// console.log("======= Thêm thành công ======");
// // in ra
// for (let i = 0; i < listPhone.length; i++) {
//   const phone = listPhone[i];
//   console.log(i + 1);
//   for (const key in phone) {
//     const value = phone[key];
//     console.log("\t" + key + ": " + value);
//   }
//   console.log('\t --- \t --- ');
// }

// sửa
// let sttSua = parseInt(prompt("Nhập vị trí muốn sửa:"));
// if (sttSua >= 1 && sttSua <= listPhone.length) {
//   // Nhập đúng
//   let phoneEdit = listPhone[sttSua - 1];
//   let keyEdit = prompt("Nhập thông tin cần sửa: (name, price, brand)");
//   if (phoneEdit.hasOwnProperty(keyEdit)) {
//     // Nhập đúng
//     phoneEdit[keyEdit] = prompt(`Nhập ${keyEdit} mới:`);
//     console.log("======= Sửa thành công ======");

//     // in ra
//     for (let i = 0; i < listPhone.length; i++) {
//       const phone = listPhone[i];
//       console.log(i + 1);
//       for (const key in phone) {
//         const value = phone[key];
//         console.log("\t" + key + ": " + value);
//       }
//       console.log('\t --- \t --- ');
//     }
//   } else {
//     // Nhập sai
//     alert("Sai key cần sửa");
//   }
// } else {
//   // Nhập sai
//   alert("Nhập sai stt");
// }
// xóa
// let sttXoa = parseInt(prompt("Vị trí cần xóa:"));
// if (sttXoa >= 1 && sttXoa <= listPhone.length) {
//   // Nhập đúng:
//   listPhone.splice(sttXoa - 1, 1);
//   console.log("======= Xóa thành công ======");

//   // in ra
//   for (let i = 0; i < listPhone.length; i++) {
//     const phone = listPhone[i];
//     console.log(i + 1);
//     for (const key in phone) {
//       const value = phone[key];
//       console.log("\t" + key + ": " + value);
//     }
//     console.log('\t --- \t --- ');
//   }
// } else {
//   alert("Nhập sai");
// }

// Tìm theo tên đt

// let searchPhoneName = prompt("Tên đt cần tìm");
// let minPrice = Number(prompt("Nhập price min:"));
// let maxPrice = Number(prompt("Nhập price max:"));
// console.log("======= Tìm đt ======");
// let resultSearch = [];

// for (const phone of listPhone) { // Vòng lặp tìm kiếm
//   // if (phone.name.toLowerCase().includes(searchPhoneName.toLowerCase())) {
//   //   resultSearch.push(phone);
//   // }
//   if (phone.price >= minPrice && phone.price <= maxPrice) {
//     resultSearch.push(phone);
//   }
// }

// // console.log(`=== Kết quả tìm kiếm: ${searchPhoneName}`);
// console.log(`=== Kết quả tìm kiếm: ${minPrice} - ${maxPrice}`);
// if (resultSearch.length > 0) {
//   // in ra
//   for (let i = 0; i < resultSearch.length; i++) {
//     const phone = resultSearch[i];
//     console.log(i + 1);
//     for (const key in phone) {
//       const value = phone[key];
//       console.log("\t" + key + ": " + value);
//     }
//     console.log('\t --- \t --- ');
//   }
// }
// else {
//   console.log("Không có kết quả thỏa mãn");
// }

// // Sắp xếp
// for (let i = 0; i < listPhone.length - 1; i++) {
//   for (let j = i + 1; j < listPhone.length; j++) {
//     if (listPhone[i].brand.toLowerCase().localeCompare(listPhone[j].brand.toLowerCase()) > 0) {
//       let temp = listPhone[i];
//       listPhone[i] = listPhone[j];
//       listPhone[j] = temp;
//     }
//   }
// }
// // in ra
// console.log("====== Sắp xếp ======");

// for (let i = 0; i < listPhone.length; i++) {
//   const phone = listPhone[i];
//   console.log(i + 1);
//   for (const key in phone) {
//     const value = phone[key];
//     console.log("\t" + key + ": " + value);
//   }
//   console.log('\t --- \t --- ');
// }


// function inDanhSachDT() {
//     for (let i = 0; i < listPhone.length; i++) { // mảng
//         const phone = listPhone[i]; // object
//         console.log(i + 1);
//         for (const key in phone) {
//           const value = phone[key];
//           console.log("\t" + key + ": " + value);
//         }
//         console.log('\t --- \t --- ');
//       }
// }

// function themMoi() {
//     let newPhoneName = prompt("Tên đt mới:");
// let newPhonePrice = Number(prompt("Giá đt mới:"));
// let newPhoneBrand = prompt("Hãng đt mới:");
// let newPhone = {
//   name: newPhoneName,
//   price: newPhonePrice,
//   brand: newPhoneBrand,
// };
// listPhone.push(newPhone);
// console.log("======= Thêm thành công ======");
// // in ra
// for (let i = 0; i < listPhone.length; i++) {
//   const phone = listPhone[i];
//   console.log(i + 1);
//   for (const key in phone) {
//     const value = phone[key];
//     console.log("\t" + key + ": " + value);
//   }
//   console.log('\t --- \t --- ');
// }
// }

// function sttSua() {
      
// }

// ĐỆ QUI

//VD 
// function tinhGiaiThua(n) {
//     if(n === 0) {
//         return 1;
//     }

//     return n * tinhGiaiThua(n - 1)
// }
// let gT = tinhGiaiThua(5);
// console.log(gT);


// fibonacci:

// function fibonacci(n) {
//     if(n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(4));


// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.toString());xuất ra chuỗi các phần tử trong mảng cách nhau bởi dấu ,
// // console.log(fruits.join("-")); tác dụng như toString() nhưng thay đổi được dấu phân các các phần tử
// // let fruit = fruits.pop(); //xóa đi 1 phần tử trong mảng phía cuối cùng
// // console.log(fruit);
// // console.log(fruits);
// // fruits.push("Xoai");//thêm 1 phần tử vào mảng phía cuối cùng
// // console.log(fruits.toString());
// // console.log(fruits.shift());//xóa đi 1 phần tử trong mảng phái đầu
// // fruits.unshift("Lemon");// thêm 1 phần tử vào mảng phía đầu, tăng chiều dài mảng
// // console.log(fruits);
// fruits[0] = "Mia";
// console.log(fruits);
// // nối phần tử
// fruits[fruits.length] = "Khoai";// tương đương với unshift
// console.log(fruits);
// // delete fruits[0];
// // console.log(fruits);// delete để lại giá trị trống trong mảng
// fruits.splice(1, 0, "Táo tầu", "Nho"); //có thể dùng để thêm giá trị (vị trí, số lượng xóa, "chuỗi thêm")
// console.log(fruits);


/// Kiến thức mới: 
// 1. Function. // function không tham số, có tham số, có giá trị trả về
// 2. Array methods:
// - Array.filter()
// - array.find(), array.findIndex();
// - array.indexOf(), lastIndexOf();
// - array.every(), array.some();











