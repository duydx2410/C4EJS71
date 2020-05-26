// let arr = [2, 3, 5, 7, 9, 3, 2, 6, 1];
// let r1 = arr.findIndex(function(v, i, a) {
//     console.log(`v = ${v}`);
//     console.log(`i = ${i}`);
//     console.log(a);
//     return v > 4;
    
// });
// console.log(`r1 ${r1}`);

// let r2 = arr.find(function(v, i, a) {
//     console.log(`v = ${v}`);
//     console.log(`i = ${i}`);
//     console.log(a);
//     return v > 4;
    
// });
// console.log(`r1 ${r2}`);

// let r3 = arr.filter(function(v, i, a) {
//     console.log(`v = ${v}`);
//     console.log(`i = ${i}`);
//     console.log(a);
//     return v > 4;
    
// });
// console.log(`r3 ${r3}`);
// console.log(r3);


// let r4 = arr.every(function(v, i, a) {
//     console.log(`v = ${v}`);
//     console.log(`i = ${i}`);
//     console.log(a);
//     return v % 2 === 0;
    
// });
// console.log(`r4 ${r4}`);

// let r5 = arr.some(function(v, i, a) {
//     console.log(`v = ${v}`);
//     // console.log(`i = ${i}`);
//     // console.log(a);
//     return v % 2 === 0;
    
// });
// console.log(`r5 ${r5}`);

let listPhone = [
      {
        name: 'Galaxy Note',
        price: 10e6,
        brand: 'Samsung'
      },
      {
        name: 'Xperia 1',
        price: 11e6,
        brand: 'Sony'
      },
      {
        name: 'iPhone 11',
        price: 14e6,
        brand: 'Apple'
      },
    ];

    //1: tìm ra điện thoại có giá  > 10 triệu và < 12 triệu.
        // let price1 = listPhone.find(function(v, i, a) {
        //     console.log(v);
        //     return (v.price > 10e6 && v.price < 12e6 );
        // }
        // );
    //2: Tìm các điện thoại của hãng SamSung.
        let brand1 = listPhone.filter(function(phone,i,a) {
            // console.log(phone);
            return phone.brand.toLocaleLowerCase() === 'samsung';
        }
        );
        // console.log(brand1);
        
    //3: Tìm các điện thoại có giá > 12 triệu
        // let r3 = listPhone.filter(function(price2,i,a) {
        //     return price2.price > 12e6;
        // }
        // );
        // console.log(r3);
        

    //4: Tìm các điện thoại có tên chứa chữ 'a'(không phân biệt hoa thường)
    // let r4 = listPhone.filter(function(phone,i,a) {
    //     return phone.name.includes("a",0)
    // });
    // console.log(r4);
    
    //5: Tìm các điện thoại của Apple có giá < 20 triệu

    // let r5 = listPhone.filter(function(brand1,i,a) {
    //     return (phone.brand.includes('Apple',0) && phone.price < 20e6)
    // }
    // );
    // console.log(r5);
    


    

