 


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
// if ((a===b) || (b===c) || (a===c)) {
// console.log("Và là tam giác cân.")
// }
// else if ((a===b) && (b===c) && (c===a)) {
// console.log("Và là tam giác đều.")
// }
// else if ((a*a = b*b + c*c) || (b*b = a*a + c*c) || (c*c = a*a + b*b)) {
// console.log("Và là tam giác vuông.")

// else {console.log("đây ko phải tam giác.")
// }


//Bài tập 7: Nhập vào chiều cao, cân nặng. tính chỉ số BMI, và đưa ra tình trạng theo cấp độ.

let hight = parseFloat(prompt("Nhập vào chiều cao của bạn: m"));
let weigth = parseFloat(prompt("Nhập vào cân nặng của bạn: kg"));
let BMI = (weigth/(hight*hight));
if (BMI < 18.5) {
    console.log(` Chỉ số BMI của bạn là ${BMI}, bạn đang gầy.`)
}
else if ((18.5<BMI) && (BMI<24.9)) {
    console.log(` Chỉ số BMI của bạn là ${BMI}, bạn đang bình thường.`)
}
else if ((25<BMI) && (BMI<29.9)) {
    console.log(` Chỉ số BMI của bạn là ${BMI}, bạn đang hơi béo.`)
}
else if ((30<BMI) && (BMI<34.9)) {
    console.log(` Chỉ số BMI của bạn là ${BMI}, Bạn đang béo phì cấp độ 1.`)
}
else if ((35<BMI) && (BMI<39.9)) {
    console.log(` Chỉ số BMI của bạn là ${BMI}, Bận đang béo phì cấp độ 2.`)
}
else {(BMI>40);
console.log(` Chỉ số BMI của bạn là ${BMI} WARNING: Bạn đã quá béo phì.`)
 }

//Bài tập 8