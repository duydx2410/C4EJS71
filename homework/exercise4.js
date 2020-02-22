 


//Bài tập 1: Nhập vào 1 năm, kiểm tra năm đó có bao nhiêu ngày:
// let yourYear = Number(prompt("Nhập năm vào đây:"));
// if 
//   (((yourYear % 4 === 0) && (yourYear % 100 !== 0)) || 
//    ((yourYear % 100 === 0) && (yourYear % 400 === 0))) {
//     console.log(` Năm ${yourYear} có 366 ngày`)     
// } else {
//     console.log(` Năm ${yourYear} có 365 ngày.`)};

//Bài tập 2: Nhập vào 1 tháng trong năm, in ra số ngày của tháng đó:

// let month = parseInt(prompt("Nhập tháng:"));
// let year = parseInt(prompt("Nhập vào năm:"))
// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     console.log(` Tháng ${month} của năm ${year} có 31 ngày`);
//     } ;
// if ((month === 2) &&
//     (((year % 4 === 0) && (year % 100 !== 0)) || 
//      ((year % 100 === 0) && (year % 400 === 0)))) { 
//        console.log(` Tháng ${month} của năm ${year} có 29 ngày`) }  
    
// if ((month === 2) &&
//    (year % 4 !== 0) && 
//    (year % 100 !== 0) && (year % 400 !== 0)) { 
//        console.log(` Tháng ${month} của năm ${year} có 28 ngày.`)
//     };

// if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log(`Tháng ${month} của năm ${year} có 30 ngày.`)    
// };

//Bài tập 3: Nhập 1 thang trong năm, in ra mùa của tháng đó:

// let month = parseInt(prompt("Nhập vào tháng mong muốn:"));
// if (month === 4 || month === 2 || month === 3) {
//     console.log(`Tháng ${month} thuộc mùa Xuân `)
// };
// if (month === 5 || month === 6 || month == 7) {
//     console.log(` Tháng ${month} thuộc mùa Hè`)
// };
// if (month === 8 || month === 9 || month === 10) {
//     console.log(` Tháng ${month} thuộc mùa Thu`)
// };
// if (month === 11 || month === 12 || month === 1) {
//     console.log(` Tháng ${month} thuộc mùa Đông`)
// };

// Bài tập 4: Nhập vào 3 số a, b, c. In ra theo thứ tự tăng dần:

// let a = parseInt(prompt("Nhập giá trị số a:"));
// let b = parseInt(prompt("Nhập giá trị số b:"));
// let c = parseInt(prompt("Nhập giá trị số c:"));
// if ((a>=b) && (b>=c)) {
//     console.log(` Thứ tự tăng dần ${c} ${b} ${a}`)
// };
// if ((a>=c) && (c>=b)) {
//     console.log(` Thứ tự tăng dần ${b} ${c} ${a}`)
// };
// if ((b>=a) && (a>=c)) {
//     console.log(` Thứ tự tăng dần ${c} ${a} ${b}`)  
// };
// if ((b>=c) && (c>=a)) {
//     console.log(` Thứ tự tăng dần ${a} ${c} ${b}`)
// };
// if ((c>=a) && (a>=b)) {
//     console.log(` Thứ tự tăng dần ${b} ${a} ${c}`)
// };
// if ((c>=b) &&(b>=a)) {
//     console.log(` Thứ tự tăng dần ${a} ${b} ${c}`)
// };

//Bài tập 5: nhập vào 3 số a, b, c. kiểm tra xem có lập được thành tam giác không, nếu được thì tam giá đó là tam giác gì:


// let a = parseInt(prompt("Nhập vào giá trị của a:"));
// let b = parseInt(prompt("Nhập vào giá trị cảu b:"));
// let c = parseInt(prompt("Nhập vào giá trị của c:"));
// if ((a+b>c) && (a+c>b) && (b+c>a)) {
// console.log(`${a}, ${b}, ${c} Tạo được tam giác.`)
// }
// if ((a*a === b*b + c*c) || (b*b === a*a + c*c) || (c*c === a*a + b*b)) {
// console.log("Và là tam giác vuông.")
// }
// if (a===b)
// else {console.log("đây ko phải tam giác.")
// }

// //Bài tập 6: Cho thông tin bảng giá điện, nhập vào số điện sử dụng của 1 hộ trong 1 tháng, in ra số tiênf từng bậc và tổng số tiền phải trả.
// let numberElectric = parseInt(prompt("Nhập vào số điện tiêu thụ trong tháng: (kWh)"));
// let bac1max = 50 * 1678 ;
// let bac2max = 50 * 1734 ;
// let bac3max = 100 * 2014 ;
// let bac4max = 100 * 2536 ;
// let bac5max = 100 * 2834 ;

// if ((0<numberElectric) && (numberElectric<=50)) {
//     console.log(` Số tiền điện bậc 1 là: ${numberElectric*1678} vnđ
//     Tổng tiền điện là: ${numberElectric*1678} vnđ`)  
// };
// if ((51<=numberElectric) && (numberElectric<=100)) {
//     console.log(` Số tiền điện bậc 1 là: ${bac1max} vnđ 
//  Số tiền điện bậc 2 là: ${(numberElectric-50)*1734} vnđ
//  Tổng tiền điện là: ${bac1max+((numberElectric-50)*1734)} vnđ` )
// };
// if ((101<=numberElectric) && (numberElectric<=200)) {
//     console.log(` Số tiền điện bậc 1 là: ${bac1max} vnđ
//  Số tiền điện bậc 2 là: ${bac2max} vnđ
//  Số tiền điện bậc 3 là: ${(numberElectric-100)*2014} vnđ
//  Tổng tiền điện là: ${bac1max+bac2max+((numberElectric-100)*2014)} vnđ`)
// };
// if ((201<=numberElectric) && (numberElectric<=300)) {
//     console.log(` Số tiền điện bậc 1 là: ${bac1max} vnđ
//  Số tiền điện bậc 2 là: ${bac2max} vnđ
//  Số tiền điện bậc 3 là: ${bac3max} vnđ
//  Số tiền điện bậc 4 là: ${(numberElectric-200)*2536} vnđ
//  Tổng tiền điện là: ${bac1max+bac2max+bac3max+((numberElectric-200)*2536)} vnđ`)   
// };
// if ((301<=numberElectric) && (numberElectric<=400)) {
//     console.log(` Số tiền điện bậc 1 là: ${bac1max} vnđ
//  Số tiền điện bậc 2 là: ${bac2max} vnđ
//  Số tiền điện bậc 3 là: ${bac3max} vnđ
//  Số tiền điện bậc 4 là: ${bac4max} vnđ
//  Số tiền điện bậc 5 là: ${(numberElectric-300)*2834} vnđ
//  Tổng tiền điện là: ${bac1max+bac2max+bac3max+bac4max+((numberElectric-300)*2834)} vnđ`)
// };
// if (401<=numberElectric) {
//     console.log(` Số tiền điện bậc 1 là: ${bac1max} vnđ
//  Số tiền điện bậc 2 là: ${bac2max} vnđ
//  Số tiền điện bậc 3 là: ${bac3max} vnđ
//  Số tiền điện bậc 4 là: ${bac4max} vnđ
//  Số tiền điện bậc 5 là: ${bac5max} vnđ
//  Số tiền điện bậc 6 là: ${(numberElectric-400)*2927} vnđ
//  Tổng tiền điện là: ${bac1max+bac2max+bac3max+bac4max+bac5max+((numberElectric-400)*2927)} vnđ`)
// };


//Cách khác:

let x = parseInt(prompt("Nhập số điện"));
let y;
if (x<=50) {
    y = x * 1678
}


// Bài tập 7: Nhập vào chiều cao, cân nặng. tính chỉ số BMI, và đưa ra tình trạng theo cấp độ.

// let hight = parseFloat(prompt("Nhập vào chiều cao của bạn: m"));
// let weigth = parseFloat(prompt("Nhập vào cân nặng của bạn: kg"));
// let BMI = (weigth/(hight*hight));
// if (BMI < 18.5) {
//     console.log(` Chỉ số BMI của bạn là ${BMI}, bạn đang gầy.`)
// }
// else if (BMI<=24.9) {
//     console.log(` Chỉ số BMI của bạn là ${BMI}, bạn đang bình thường.`)
// }
// else if (BMI<=29.9) {
//     console.log(` Chỉ số BMI của bạn là ${BMI}, bạn đang hơi béo.`)
// }
// else if (BMI<=34.9) {
//     console.log(` Chỉ số BMI của bạn là ${BMI}, Bạn đang béo phì cấp độ 1.`)
// }
// else if (BMI<=39.9) {
//     console.log(` Chỉ số BMI của bạn là ${BMI}, Bận đang béo phì cấp độ 2.`)
// }
// else {console.log(` Chỉ số BMI của bạn là ${BMI} WARNING: Bạn đã quá béo phì.`)
//  }

//Bài tập 8