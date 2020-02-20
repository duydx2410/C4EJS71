

//Bài tập 1: Nhập vào bán kính hình tròn, in ra chu vi, diện tích.

// let r = parseFloat(prompt("Nhập vào bán kính r (cm)"));
// let P = 2 * Math.PI * r ;
// let S = r * r * Math.PI ;
// console.log(`Chu vi hình tròn bán kính ${r} là: ${P} cm`);
// console.log(`Diện tích hình tròn bán kính ${r} là: ${S} cm2`);

//Bài tập 2: Nhập vào chiều dài, chiều rộng hình chữ nhật. In ra chu vi, diện tích hình chữ nhật.

// let a = parseFloat(prompt("Nhập vào chiều rộng hình chữ nhật: (cm)"));
// let b = parseFloat(prompt("Nhập vào chiều dài hình chữ nhật: (cm)"));
// let P2 = 2 * (a + b) ;
// let S2 = a * b ;
// console.log(`Chu vi hình chữ nhật là: ${P2} cm`);
// console.log(`Diện tích hình chữ nhật là: ${S2} cm2`);

// Bài tập 3: Tính giá trị biểu thức
//           a) y = 4(x^2 + 10x(sqrt x) + 3x + 1)

// let x = parseFloat(prompt("Nhập giá trị của x:"));
// let y = 4 * ( x*x + 10*x*Math.sqrt(x) + 3*x + 1) ;
// console.log(` Kết quả giá trị biểu thức y với x = ${x} là: ${y}`);


        //   b) y = (sin(pix^2) + sqrt(x^2 + 1))/(e^2x + sos(pix/4))

// let x = parseFloat(prompt("Nhập giá trị của x:"));
// let y = ((Math.sin(Math.PI * x * x)) + (Math.sqrt(x*x + 1))) / (Math.pow(Math.E , 2*x) + Math.cos(Math.PI*x/4));
// console.log(` Kết quả giá trị biểu thức y với x = ${x} là: ${y}`);

//Bài tập 4: Nhập vào số tiền X vnđ, (bội số của 10.000vnđ), đổi xem tờ tiền đó đc bao nhiêu tờ 100.000vnđ, 50.000vnđ, 20.000vnđ, 10.000vnđ.

// let yourMoney = parseInt(prompt("Nhập mệnh giá tiền:"));
// let A = parseInt(yourMoney/100000) ;
// let B = parseInt((yourMoney - A*100000)/50000) ; 
// let C = parseInt((yourMoney - (A*100000) - (B*50000))/20000);
// let D = parseInt((yourMoney - (A*100000) - (B*50000) - (C*20000))/10000);
// console.log(` Số tiền ${yourMoney}vnđ gồm có : ${A} tờ 100.000vnđ, ${B} tờ 50.000vnđ, ${C} tờ 20.000vnđ, ${D} tờ 10.000vnđ`);

//Bài tập 5: Nhập 1 số có 3 chữ số, tính tổng của các chữ số đó:

// let yourNumber = parseInt(prompt("Nhập vào bảng số có 3 chữ số:"));
// let a = parseInt(yourNumber/100);
// let b = parseInt((yourNumber - (a*100))/10);
// let c = parseInt(yourNumber - (a*100) - (b*10));
// let d = a + b + c ;
// // console.log(` Tổng số có 3 chữ số ${yourNumber} là: ${a} + ${b} + ${c} = ${d}`);













