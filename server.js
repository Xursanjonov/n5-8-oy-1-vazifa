const DATA = {
    users: [
        {
            id: 1,
            role: 'user',
            fullName: 'John Doe',
            username: 'johndoe',
            password: '12345678',
            address: 'address 1',
            phone: 'phone 1',
            email: 'email 1',
            image: 'image 1',
        },
        {
            id: 2,
            fullName: 'Jane Doe',
            username: 'janedoe',
            password: '12345678',
            role: 'user',
            image: 'image 2',
            address: 'address 2',
            phone: 'phone 2',
            email: 'email 2',
        }
    ],
    products: [
        {
            id: 1,
            title: 'Samsung S24 Ultra', //unique
            price: 1200,
            oldPrice: 1320,
            count: 5,
            category: 'Samsung',
            images: ['https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg', 'https://m.media-amazon.com/images/I/71E-ptCgHcL._SX679_.jpg', 'https://m.media-amazon.com/images/I/71JLhofuYJL._SX679_.jpg'],
            desc: 'Fruits',
        },
        {
            id: 2,
            title: 'Samsung', //unique
            price: 120,
            oldPrice: 180,
            count: 8,
            category: 'phone',
            images: ['image 1', 'image 2'],
            desc: 'Fruits',
        },
    ],
    categories: [
        {
            id: 1,
            name: 'Fruits',
            image: 'image 1'
        },
        {
            id: 2,
            name: 'Vegetables',
            image: 'image 2'
        }
    ]
}

module.exports = DATA