const DATA = {
    users: [
        {
            id: 1,
            role: "user",
            fullName: "John Doe",
            username: "johndoe",
            password: "12345678",
            address: "address 1",
            phone: "phone 1",
            email: "email 1",
            image: "image 1"
        },
        {
            id: 2,
            role: "user",
            fullName: "Jane Doe",
            username: "janedoe",
            password: "12345678",
            address: "address 2",
            phone: "phone 2",
            email: "email 2",
            image: "image 2"
        },
        {
            id: 3,
            role: "user",
            fullName: "Alice Johnson",
            username: "alicej",
            password: "password123",
            address: "address 3",
            phone: "phone 3",
            email: "email 3",
            image: "image 3"
        },
        {
            id: 4,
            role: "user",
            fullName: "Bob Smith",
            username: "bobsmith",
            password: "password123",
            address: "address 4",
            phone: "phone 4",
            email: "email 4",
            image: "image 4"
        },
        {
            id: 5,
            role: "user",
            fullName: "Carol White",
            username: "carolw",
            password: "password123",
            address: "address 5",
            phone: "phone 5",
            email: "email 5",
            image: "image 5"
        },
        {
            id: 6,
            role: "user",
            fullName: "Dave Brown",
            username: "daveb",
            password: "password123",
            address: "address 6",
            phone: "phone 6",
            email: "email 6",
            image: "image 6"
        },
        {
            id: 7,
            role: "user",
            fullName: "Eve Davis",
            username: "eved",
            password: "password123",
            address: "address 7",
            phone: "phone 7",
            email: "email 7",
            image: "image 7"
        },
        {
            id: 8,
            role: "user",
            fullName: "Frank Miller",
            username: "frankm",
            password: "password123",
            address: "address 8",
            phone: "phone 8",
            email: "email 8",
            image: "image 8"
        },
        {
            id: 9,
            role: "user",
            fullName: "Grace Lee",
            username: "gracel",
            password: "password123",
            address: "address 9",
            phone: "phone 9",
            email: "email 9",
            image: "image 9"
        },
        {
            id: 10,
            role: "user",
            fullName: "Henry Clark",
            username: "henryc",
            password: "password123",
            address: "address 10",
            phone: "phone 10",
            email: "email 10",
            image: "image 10"
        }
    ],
    products: [
        {
            id: 1,
            title: "Samsung S24 Ultra",
            price: 1200,
            oldPrice: 1320,
            count: 5,
            category: "Samsung",
            url: ["https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg", "https://m.media-amazon.com/images/I/71E-ptCgHcL._SX679_.jpg", "https://m.media-amazon.com/images/I/71JLhofuYJL._SX679_.jpg"],
            desc: "Fruits"
        },
        {
            id: 2,
            title: "Phones",
            price: 250,
            oldPrice: 274,
            count: 1,
            category: "phone",
            url: ["https://blog.unguess.io/hubfs/smartphone%20update-1.png", "https://i.ytimg.com/vi/GkFl3c-Zvx0/maxresdefault.jpg"],
            desc: "Fruits"
        },
        {
            id: 3,
            title: "iPhone 13",
            price: 555,
            oldPrice: 631,
            count: 7,
            category: "Apple",
            url: ["https://m.media-amazon.com/images/I/71Gu0e-vdNL.__AC_SX300_SY300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/617TKRByBpL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/81ANqRSTvmL._AC_SX679_.jpg"],
            desc: "Fruits"
        },
        {
            id: 4,
            title: "MacBook Pro",
            price: 999,
            oldPrice: 1230,
            count: 3,
            category: "Apple",
            url: ["https://m.media-amazon.com/images/I/61CHqS31PiL._AC_SX522_.jpg","https://m.media-amazon.com/images/I/71bSZAYcsbL._AC_SX522_.jpg", "https://m.media-amazon.com/images/I/810RmaVJvtL._AC_SX522_.jpg"],
            desc: "Fruits"
        },
        {
            id: 5,
            title: "Samsung Galaxy Tab S9",
            price: 400,
            oldPrice: 450,
            count: 10,
            category: "Samsung",
            url: ["https://m.media-amazon.com/images/I/61d46oYQgdL.__AC_SX300_SY300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/61NTjkCP3vL._AC_SX466_.jpg"],
            desc: "Fruits"
        },
        {
            id: 6,
            title: "Sony PlayStation 5",
            price: 500,
            oldPrice: 550,
            count: 6,
            category: "Gaming",
            url: ["https://m.media-amazon.com/images/I/21pybROD6BL._SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/51v1iiwtHkL._SX522_.jpg"],
            desc: "Fruits"
        },
        {
            id: 7,
            title: "Nintendo Switch",
            price: 300,
            oldPrice: 350,
            count: 15,
            category: "Gaming",
            url: ["https://m.media-amazon.com/images/I/41S2ZmCRO9L._SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/61Vy4+0XqJL._SX522_.jpg"],
            desc: "Fruits"
        },
        {
            id: 8,
            title: "Dell XPS 13",
            price: 1200,
            oldPrice: 1300,
            count: 4,
            category: "Computers",
            url: ["https://m.media-amazon.com/images/I/71Ir4cW5GNL.__AC_SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/61-NAS2Y-3L._AC_SX679_.jpg","https://m.media-amazon.com/images/I/61No0-SXL8L._AC_SX679_.jpg"],
            desc: "Fruits"
        },
        {
            id: 9,
            title: "HP Spectre x360",
            price: 1100,
            oldPrice: 1250,
            count: 2,
            category: "Computers",
            url: ["https://m.media-amazon.com/images/I/61wdZ89-JWL.__AC_SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/613hlvL2lHL._AC_SX466_.jpg","https://m.media-amazon.com/images/I/5171HN86xqL._AC_SX466_.jpg"],
            desc: "Fruits"
        },
        {
            id: 10,
            title: "Microsoft Surface Pro",
            price: 1000,
            oldPrice: 1150,
            count: 5,
            category: "Computers",
            url: ["https://m.media-amazon.com/images/I/515nMh4oT9S._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/618+M+0QsdL._AC_SX466_.jpg","https://m.media-amazon.com/images/I/51TyBSK8qJL._AC_SX466_.jpg"],
            desc: "Fruits"
        }
    ],
    categories: [
        {
            id: 1,
            name: "Samsung",
            url: "https://1000logos.net/wp-content/uploads/2017/06/Font-Samsung-Logo.jpg"
        },
        {
            id: 2,
            name: "Apple",
            url: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
        },
        {
            id: 3,
            name: "Gaming",
            url: "https://static.vecteezy.com/system/resources/previews/002/144/780/non_2x/gaming-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg"
        },
        {
            id: 4,
            name: "Computers",
            url: "https://cdn.shopify.com/s/files/1/1815/3725/files/computer_1024x1024.png?v=1535890325"
        }
    ]
}

module.exports = DATA