let listDataPhones = [
    {
        phone: 'Samsung Galaxy S10 Lite',
        brand: 'Samsung',
        price: 1399e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg',
        description: 'Samsung Galaxy S10 Lite là một phiên bản khác của dòng Galaxy S10 đã ra mắt trước đó nhưng mang trong mình khá nhiều khác biệt về ngoại hình cũng như bên trong.',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-s10-lite',

    },
    {
        phone: 'Xiaomi Redmi Note 9S',
        brand: 'Xiaomi',
        price: 599e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-400x460-400x460.png',
        description: 'Redmi Note 9s là sản phẩm tầm trung nhà Xiaomi, gây ấn tượng với thiết kế tràn viền độc đáo, cấu hình mạnh mẽ và hệ thống bốn camera sau chất lượng.',
        linkDetail: 'https://www.thegioididong.com/dtdd/xiaomi-redmi-note-9s',

    },
    {
        phone: 'OPPO Reno2 F',
        brand: 'OPPO',
        price: 749e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-white-400x460-400x460.png',
        description: 'OPPO Reno2 F là một trong 3 chiếc smartphone thuộc dòng OPPO Reno2 vừa được OPPO giới thiệu với thiết kế thời trang cùng nhiều nâng cấp mạnh mẽ về camera.',
        linkDetail: 'https://www.thegioididong.com/dtdd/oppo-reno2-f',

    },
    {
        phone: 'IPhone 11 64GB',
        brand: 'Apple',
        price: 2169e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460-400x460.png',
        description: 'Sau bao nhiêu chờ đợi cũng như đồn đoán thì cuối cùng Apple đã chính thức giới thiệu bộ 3 siêu phẩm iPhone 11 mạnh mẽ nhất của mình vào tháng 9/2019. Có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như chiếc iPhone Xr năm ngoái, đó chính là phiên bản iPhone 11 64GB.',
        linkDetail: 'https://www.thegioididong.com/dtdd/iphone-11#3',

    },
    {
        phone: 'Huawei Mate 30 Pro',
        brand: 'Huawei',
        price: 1999e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/199046/huawei-mate-30-pro-400x460-4-400x460.png',
        description: 'Những năm gần đây thì Huawei luôn mang tới cho người dùng sự bất ngờ với những trang bị đột phá lần đầu tiên xuất hiện trên chiếc smartphone của mình và mới đây chiếc Huawei Mate 30 Pro đã chính thức ra mắt và nó vẫn mang trong mình rất nhiều công nghệ mang tính đột phá của Huawei.',
        linkDetail: 'https://www.thegioididong.com/dtdd/huawei-mate-30-pro',

    },
    {
        phone: 'Samsung Galaxy S20 Ultra',
        brand: 'Samsung',
        price: 2749e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-400x460-1-400x460.png',
        description: 'Samsung Galaxy S20 Ultra siêu phẩm công nghệ hàng đầu của Samsung mới ra mắt với nhiều đột phá công nghệ, màn hình tràn viền không khuyết điểm, hiệu năng đỉnh cao, camera độ phân giải siêu khủng 108 MP cùng khả năng zoom 100X thách thức mọi giới hạn smartphone.',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-s20-ultra',

    },
    {
        phone: 'IPhone 11 Pro 64GB',
        brand: 'Apple',
        price: 3019e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-black-400x460.png',
        description: 'Nếu như bây giờ để lựa chọn một thiết bị có thể sử dụng ổn định và được cập nhật trong khoảng 3 năm nữa thì không có sự lựa chọn nào xuất sắc hơn chiếc iPhone 11 Pro 64GB, siêu phẩm mới được giới thiệu cách đây không lâu tới từ Apple.',
        linkDetail: 'https://www.thegioididong.com/dtdd/iphone-11-pro',

    },
    {
        phone: 'Samsung Galaxy Fold',
        brand: 'Samsung',
        price: 50e6 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x460.png',
        description: 'Sau rất nhiều chờ đợi thì Samsung Galaxy Fold - chiếc smartphone màn hình gập đầu tiên của Samsung cũng đã chính thức trình làng với thiết kế mới lạ.',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-fold',
    },
    {
        phone: 'Samsung Galaxy Note 10+',
        brand: 'Samsung',
        price: 2699e4 ,
        img: 'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-blue-400x460.png',
        description: 'Trông ngoại hình khá giống nhau, tuy nhiên Samsung Galaxy Note 10+ sở hữu khá nhiều điểm khác biệt so với Galaxy Note 10 và đây được xem là một trong những chiếc máy đáng mua nhất trong năm 2019, đặc biệt dành cho những người thích một chiếc máy màn hình lớn, camera chất lượng hàng đầu.',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-note-10-plus',
    },
];

let tBody = document.getElementById('phones');

for (let i = 0; i < listDataPhones.length; i++) {
    const phone = listDataPhones[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

tBody.innerHTML += html;
};


//Sắp xếp điện thoại theo hãng:
function compareBrand(a, b) {
    // Dùng toUpperCase() để không phân biệt ký tự hoa thường
    const brandA = a.brand.toUpperCase();
    const brandB = b.brand.toUpperCase();
    
    let comparisonBrand = 0;
    if (brandA > brandB) {
      comparison = 1;
    } else if (brandA < brandB) {
      comparisonBrand = -1;
    }
    return comparisonBrand;
   };
    
   let listBrandAbc = listDataPhones.sort(compareBrand);
//    console.log(listPhoneAbc);

let brandAbc = document.getElementById("phonesbrand");
for (let i = 0; i < listBrandAbc.length; i++) {
    const phone = listBrandAbc[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

brandAbc.innerHTML += html;
}; 

//Sắp xếp điện thoại theo tên:
function comparenameName(a,b) {
    const nameA = a.phone.toUpperCase();
    const nameB = b.phone.toUpperCase();

    let comparisonName = 0;
    if (nameA > nameB) {
        comparisonName = 1;
    } else if (nameA < nameB) {
        comparisonName = -1;
    }
    return comparisonName;
};

let listNameAbc = listDataPhones.sort(comparenameName);
let nameAbc = document.getElementById("phonesname");
for (let i = 0; i < listNameAbc.length; i++) {
    const phone = listNameAbc[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

nameAbc.innerHTML += html;
}; 

// Sắp xếp theo giá giảm dần:

function comparenamePriceDown(a,b) {
    const priceDownA = a.price;
    const priceDownB = b.price;
    
    let comparenamePrice = 0;
    if (priceDownA < priceDownB) {
        comparenamePriceDown = 1;
    } else if (priceDownA > priceDownB) {
        comparenamePriceDown = -1;
    }
    return comparenamePriceDown;
};

let listPriceSortDown = listDataPhones.sort(comparenamePriceDown);
let priceSortDown = document.getElementById("phonespricedown");
for (let i = 0; i < listPriceSortDown.length; i++) {
    const phone = listPriceSortDown[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

priceSortDown.innerHTML += html;
};

//Sắp xếp theo giá tăng dần:

function comparenamePrice(a,b) {
    const priceA = a.price;
    const priceB = b.price;
    
    let comparenamePrice = 0;
    if (priceA > priceB) {
        comparenamePrice = 1;
    } else if (priceA < priceB) {
        comparenamePrice = -1;
    }
    return comparenamePrice;
};

let listPriceSort = listDataPhones.sort(comparenamePrice);
let priceSort = document.getElementById("phonespriceup");
for (let i = 0; i < listPriceSort.length; i++) {
    const phone = listPriceSort[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

priceSort.innerHTML += html;
};

//Danh sách được filter theo 1 hãng:

//SamSung
let nameSs = listDataPhones.filter(function(phone) {
return phone.brand.toLocaleLowerCase() === "samsung";
    }    
);
// console.log(nameSs)

let sS = document.getElementById("phonessamsung");
for (let i = 0; i < nameSs.length; i++) {
    const phone = nameSs[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

sS.innerHTML += html;
};

//Apple
let nameApple = listDataPhones.filter(function(phone) {
    return phone.brand.toLocaleLowerCase() === "apple";
    }
);
// console.log(nameApple);
let apple = document.getElementById("phonesapple");
for (let i = 0; i < nameApple.length; i++) {
    const phone = nameApple[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

apple.innerHTML += html; 
};

//Huawei
let nameHuawei = listDataPhones.filter(function(phone) {
    return phone.brand.toLocaleLowerCase() === "huawei";
    }
);
// console.log(nameApple);
let huawei = document.getElementById("phoneshuawei");
for (let i = 0; i < nameHuawei.length; i++) {
    const phone = nameHuawei[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

huawei.innerHTML += html; 
};

//Oppo
let nameOppo = listDataPhones.filter(function(phone) {
    return phone.brand.toLocaleLowerCase() === "oppo";
    }
);
// console.log(nameOppo);
let oppo = document.getElementById("phonesoppo");
for (let i = 0; i < nameOppo.length; i++) {
    const phone = nameOppo[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

oppo.innerHTML += html; 
};

// Xiaomi

let nameXiaomi = listDataPhones.filter(function(phone) {
    return phone.brand.toLocaleLowerCase() === "xiaomi";
    }
);
// console.log(nameOppo);
let xiaomi = document.getElementById("phonesxiaomi");
for (let i = 0; i < nameXiaomi.length; i++) {
    const phone = nameXiaomi[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

xiaomi.innerHTML += html; 
};

// Bảng lọc theo tầm giá

//5tr tới 10tr
let fiveToTen = listDataPhones.filter(function(phone) {
return phone.price > 5e6 && phone.price < 10e6
    }
);
// console.log(fiveToTen);
let price = document.getElementById("phones5to10");
for (let i = 0; i < fiveToTen.length; i++) {
    const phone = fiveToTen[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${phone.img}" width="90"></td>
                    <th>${phone.phone}</th>
                    <td>${phone.brand}</td>
                    <td>${phone.price}đ</td>
                    <td>${phone.description}</td>
                    <td> 
                        <button>
                            <a  href="${phone.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

price.innerHTML += html; 
};

//10tr tới 20tr
let tenToTwenty = listDataPhones.filter(function(phone) {
    return phone.price >= 10e6 && phone.price < 20e6
        }
    );
    // console.log(tenToTwenty);
    let price1 = document.getElementById("phones10to20");
    for (let i = 0; i < tenToTwenty.length; i++) {
        const phone = tenToTwenty[i];
    
        let html = `<tr>
                        <td>${i + 1}</td>
                        <td><img src="${phone.img}" width="90"></td>
                        <th>${phone.phone}</th>
                        <td>${phone.brand}</td>
                        <td>${phone.price}đ</td>
                        <td>${phone.description}</td>
                        <td> 
                            <button>
                                <a  href="${phone.linkDetail}" target="_blank">
                                Chi tiết
                                </a>
                            </button>
                        </td>
                    </tr>`
    
    price1.innerHTML += html; 
    };
//20tr ++ 

let twentyUp = listDataPhones.filter(function(phone) {
    return phone.price >= 20e6;
    }
);
// console.log(twentyUp);
let price2 = document.getElementById("phones20++");
    for (let i = 0; i < twentyUp.length; i++) {
        const phone = twentyUp[i];
    
        let html = `<tr>
                        <td>${i + 1}</td>
                        <td><img src="${phone.img}" width="90"></td>
                        <th>${phone.phone}</th>
                        <td>${phone.brand}</td>
                        <td>${phone.price}đ</td>
                        <td>${phone.description}</td>
                        <td> 
                            <button>
                                <a  href="${phone.linkDetail}" target="_blank">
                                Chi tiết
                                </a>
                            </button>
                        </td>
                    </tr>`
    
    price2.innerHTML += html; 
    };
