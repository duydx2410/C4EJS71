// let number = Number(prompt("Nhập vào giá trị"));
// if(number > 8) {
//     console.log(number + " Lớn hơn 8")
// };
// if(number < 8) {
//     console.log(number + " Nhỏ hơn 8")
// };
// if(number === 8) {
//      console.log(number + " bằng 8")
//     };

//VD: xác định số chẵn số lẻ
// let a = Number(prompt("nhập giá trị số"));
// if(a % 2 === 0){
//     console.log(a + " là số chẵn.")
// } else { console.log(a + " là số lẻ")};

//VD: Nhập vào xem có phải năm nhuận không.

let year = parseInt(prompt("nhập số năm mong muốn"));
if (((year % 4 === 0) && (year % 100 !== 0)) ||
((year % 100 === 0) && (year % 400 === 0))) {
    console.log(year +' là năm nhuận.')
} else {
    console.log(year + ' Không phải là năm nhuận');
}

//VD: nhập vào số tháng, in ra số ngày của tháng.
let month = Number(prompt("nhập vào tháng:"));
if(month )
