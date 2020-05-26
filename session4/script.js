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

// let year = parseInt(prompt("nhập số năm mong muốn"));
// if (((year % 4 === 0) && (year % 100 !== 0)) ||
// ((year % 100 === 0) && (year % 400 === 0))) {
//     console.log(year +' là năm nhuận.')
// } else {
//     console.log(year + ' Không phải là năm nhuận');
// }

//VD: nhập vào số tháng, in ra số ngày của tháng.
// let month = parseInt(prompt("nhập vào tháng:"));
// if (
//     month === 1 || 
//     month === 3 || 
//     month === 5 || 
//     month === 7 || 
//     month === 8 || 
//     month === 10 || 
//     month === 12) {
//     console.log(month + "31 ngày");    
// }else if (
//     month === 2) {
//     console.log( month +" 28 hoặc 29 ngày");
// } else if ( 
//     month === 4 || 
//     month === 6 || 
//     month === 9 || 
//     month ===11) {
//     console.log("30 ngày");
    
// }else{
//     console.log("Nhập sai");
    
// }

// let month = parseFloat(prompt("Nhập tháng"));
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:    
//         console.log("31");
//         break;
//     case 2:
//         console.log("28 or 29");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30");
//         break;
        
//     default://optional
//         console.log("Nhập sai");      
// };



//1: Nhập 1 năm, kiểm tra xem năm đó có bao nhiêu ngày:

// let year = parseInt(prompt("Nhập năm:"));
// if ((year % 4 === 0 && year % 100 !== 0) ||
//     (year % 100 === 0 && year % 400 === 0)) {

//         console.log(` Năm ${year} có 366 ngày.`);
// }
// else {
//     console.log(` Năm ${year} có 365 ngày.`); 
// }

//2: Nhập 1 tháng trong năm, kiểm tra số ngày của tháng đó.

// let month = parseInt(prompt("Nhập vào 1 tháng trong năm:"));
// while ((12 < month) || (month <= 0)) {
//     month = parseInt(prompt("Nhập sai tháng, Yêu cầu nhập đúng:"));
// }
// // console.log(month);
// let year = parseInt(prompt("Nhập vào năm :"));

// let arr = [1, 3, 5, 7, 8, 10, 12];
// for (let i = 0; i < arr.length; i++) {
//     const thang = arr[i];
//       if (thang === month) {
//         console.log(` Tháng ${month} có 31 ngày.`);     
//     }
// }
// let arr2 = [4, 6, 9, 11];
// for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];
//     if (element === month) {
//         console.log(` Tháng ${month} có 30 ngày.`);
//     }
// }
// if ((month === 2) && ((year % 4 === 0 && year % 100 !== 0) ||
//     (year % 100 === 0 && year % 400 === 0)))  {
//     console.log(` Tháng ${month} có 29 ngày và phải là năm nhuận.`);   
// }
// if ((month === 2) && (!((year % 4 === 0 && year % 100 !== 0) ||
//     (year % 100 === 0 && year % 400 === 0))))  {
//     console.log(` Tháng ${month} có 28 ngày và không phải là năm nhuận.`);
// }

//3: 