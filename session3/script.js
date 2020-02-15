//Kiểu dữ liệu:
//Number(số) - số nguyên(Integer)
//           - số thực(Float)




//String(Chuỗi):
// let name = 'Duy';
// let name1 = "Duy";
// let name2 = `Duy`; //có thể viết 1 đoạn code js vào bên trong nó.

//VD:
// let welcome = "Xin chào";
// let welcome1 = `${welcome} C4EJS71`;
// console.log(welcome1);

let x = 10;
let y = 4 * (x * x + 10 * x * Math.sqrt(x * x + 3 * x + 1));//Math.sprt(x): tính căn bậc 2.
alert(y);
console.log(y);

//String: chuỗi
// let name = prompt("Nhập tên của bạn:");
// // let name1 = "Xin chào";
// let name2 = "Xin chào " + name;
// alert(name2); or alert("Xin chào " = name);


//Chuyển đổi dữ liệu chuỗi về số:
// let x = Number("5");
// let y = Number("6");
// alert(x + y);

// //Chuyển đổi chuỗi sang số nguyên:
// x = parseInt("5.6");
// console.log(x);

// //Chuyển đổi chuỗi thành số thực:
// y = parseFloat("5.6");
// console.log(y);

//Chuyển số sang chuỗi:
//Lấy số đấy cộng 1 chuỗi rỗng
// let s = 10 + '';//=> s = "10";


// //VD1: nhập vào bán kình hình tròn, tính chu vi, diện tích:

// let r = parseFloat(prompt("nhập vào bán kính hình tròn:"));//câu lệnh khai báo biến r và 1 phép gán.
// let P = 2 * Math.PI * r;
// let S = r * r * Math.PI;
// // alert("Chu vi hình tròn là: " + P);// or console.log(`Chu vi hình tròn là: ${r} ${P} `);
// console.log(`Chu vi hình tròn là: ${P} `);
// // alert("Diện tích hình tròn là: " + S);// or console.log(`Diện tích hình tròn là:${r} ${S} `);
// console.log(`Diện tích hình tròn là: ${S} `);

//VD2: Nhập chiều dài, chiều rộng hình chữ nhật. Tính chu vi, diện tích:
let a = Number(prompt("Nhập vào chiều rộng:"));
let b = Number(prompt("Nhập chiều dài:"));
let P1 = 2 * (a + b);
let S2 = a * b;
console.log("Chu vi hình chữ nhật: " + P1 );
console.log("Diện tích hình chữ nhật: " + S2);

// KIểm tra xem là kiểu dữ liệu gì:
console.log(typeof a);
let name = "abc";
console.log(typeof name);
console.log(typeof 5);
console.log(typeof "abc");







