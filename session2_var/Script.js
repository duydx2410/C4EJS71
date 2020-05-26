// alert("Xin Chao Cac Ban!");// Thông báo

// prompt("What your name?");// Nhập thông tin

// let age;//Khai báo biến
// age = 25;//Giá trị

//25 = age// Sai

// let age1=25;

//Sử dụng
// alert(age);
// alert(age1);
// console.log(age);// cho code chạy tiếp
// console.log(age1);

/*
var name;
const PI = 3.14;

let a = 5;
let b = 10;

let c = a + b; alert(c);
console.log(c);
//-

*/

// let d = a - b;
// console.log(d);

// let e = a / b;
// console.log(e);

// let f = a * b;
// console.log(f);

// let yourName = prompt("Nhập tên:");//lấy 1 giá trị nhập vào để hiển thị

// console.log(yourName);

// let yourAge = prompt("Nhập tuổi của bạn:");
// let yourYearOfBirth = prompt("Nhập năm sinh:");
// yourAge = 2020 - yourYearOfBirth;

//nếu biến có 1 chữ cái thì viết bình thường
//nếu biến có nhiều hơn 2 chữ cái thì từ đầu tiên viết thường, chữ cái đầu tiên của từ thứ 2 trở đi viết hoa.(qui ước)
//đặt tên biến nên có ý nghĩa, gợi lên giá trị định lưu và nên đặt tiếng anh.

// alert(yourName);
// alert(yourAge);

//nhập 2 số, tính giá trị theo +-*/ rồi in ngược ra màn hình.

// let a = prompt("nhập giá trị của a");
// let b = prompt("nhập giá trị của b");

// let c = a + b;
// alert(c);


//1: Nhập bán kính hình tròn, in ra chu vi, diện tính
// let r = parseInt(prompt("Nhập bán kính hình tròn:"));
// let p =  (2 * r) * Math.PI ;
// let s = (r*r) * Math.PI ;
// console.log(` Chu vi hình tròn bán kính ${r} là : ${p}`);
// console.log(` Diện tính hình tròn bán kính ${r} là : ${s}`);

//2: Nhập vào chiều dài, rộng, in ra chu vi, diện tính hình chữ nhật:

// let a = parseInt(prompt("Nhập vào chiều rộng hình chữ nhật:"));
// let b = parseInt(prompt("Nhập vào chiều dài hình chữ nhật:"));
// let p = 2 * (a + b) ;
// let s = a * b ;
// console.log(` Chu vi hình chữ nhật là: ${p}`);
// console.log(` Diện tích hình chữ nhật là: ${s}`);

//3: Tính gia trị biểu thức:
//a:

// let x = parseInt(prompt("Nhập giá trị của X:"));
// let y1 = 4 * ( x** + 10 * x * Math.sqrt(x) + 3 * x + 1);
// console.log(` Tổng Y1 là: ${y1}`);

//b:

// let x = parseInt(prompt("Nhập giá trị của X:"));
// let y2 = (Math.sin(Math.PI * Math.pow(x,2)) + (Math.sqrt(Math.pow(x,2) + 1))) / (Math.pow(Math.E,2*x) + Math.cos((Math.PI * x) / 4)) ;
// console.log(` Tổng Y2 : ${y2}`);

//4: Nhập số tiền X, đổi xem đc bao nhiêu tờ tiền các loại:

// let money = parseInt(prompt("Nhập vào mệnh giá tiền:"));
// let s1 = parseInt(money / 1e5) ;
// let s2 = parseInt((money - (s1 * 1e5)) /5e4) ;
// let s3 = parseInt((money - (s1 * 1e5 + s2 * 5e4)) / 2e4) ;
// let s4 = (money - ( s1 * 1e5 + s2 * 5e4 + s3 * 2e4)) / 1e4 ;

// console.log(` Số tiền ${money} đổi được ${s1} tờ 100000đ, ${s2} tờ 50000đ, ${s3} tờ 20000đ, ${s4} tờ 10000đ`);

//5: Nhập 1 số có 3 chữ số, tính tổng các chữ số đó

// let a = parseInt(prompt("Nhập số có 3 chữ số:"));
// let s1 = parseInt(a / 100);
// let s2 = parseInt((a - s1 * 100) / 10);
// let s3 = parseInt(a - (s1 * 100 + s2 * 10)) ;
// let s = s1 +s2 + s3 ;
// console.log(a);
// console.log(` Tổng 3 số ${s1} , ${s2} , ${s3}  là: ${s}`);









