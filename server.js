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
            image: "https://thumbs.dreamstime.com/b/laptop-computer-user-icon-vector-isolated-white-person-work-online-pictogram-business-worker-analyst-student-coder-customer-316853739.jpg",
            age: 14
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
            image: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2081",
            age: 32
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
            image: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
            age: 11
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
            image: "https://img.freepik.com/premium-photo/cute-children-baby-boy-smiling-reading-book-white-background-generative-by-ai_39704-6017.jpg",
            age: 17
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
            image: "https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw",
            age: 50
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
            image: "https://miro.medium.com/v2/resize:fit:640/1*U8H1ne3vkauWzQzX5CdQUQ.jpeg",
            age: 9
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
            image: "https://wallpapercave.com/wp/wp5080768.jpg",
            age: 20
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
            image: "https://images.pexels.com/photos/1071785/pexels-photo-1071785.jpeg?cs=srgb&dl=pexels-creationsbyfaik-1071785.jpg&fm=jpg",
            age: 39
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
            image: "https://play-lh.googleusercontent.com/tryRowcXJHdoAT0SIO-WBxEdudjvZmTicjuVHJuadKAJ76KgKiq22hMqDXB9sCq3pw=w240-h480-rw",
            age: 22
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BAHlIuDPK6lkExHi1DWN6cdzB2OJkmSSMNxEhQXpLnHQ3fslHw7AqUJsZEDvu85xhWw&usqp=CAU",
            age: 20
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
            url: ["https://m.media-amazon.com/images/I/61CHqS31PiL._AC_SX522_.jpg", "https://m.media-amazon.com/images/I/71bSZAYcsbL._AC_SX522_.jpg", "https://m.media-amazon.com/images/I/810RmaVJvtL._AC_SX522_.jpg"],
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
            url: ["https://m.media-amazon.com/images/I/71Ir4cW5GNL.__AC_SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/61-NAS2Y-3L._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/61No0-SXL8L._AC_SX679_.jpg"],
            desc: "Fruits"
        },
        {
            id: 9,
            title: "HP Spectre x360",
            price: 1100,
            oldPrice: 1250,
            count: 2,
            category: "Computers",
            url: ["https://m.media-amazon.com/images/I/61wdZ89-JWL.__AC_SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/613hlvL2lHL._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/5171HN86xqL._AC_SX466_.jpg"],
            desc: "Fruits"
        },
        {
            id: 10,
            title: "Microsoft Surface Pro",
            price: 1000,
            oldPrice: 1150,
            count: 5,
            category: "Computers",
            url: ["https://m.media-amazon.com/images/I/515nMh4oT9S._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/618+M+0QsdL._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/51TyBSK8qJL._AC_SX466_.jpg"],
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