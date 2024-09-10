let products = [
    {
        name: "kefir",
        type: "milk",
        price: 1200
    },
    {
        name: "apple",
        type: "fruit",
        price: 20000
    },
    {
        name: "Pivo",
        type: "alcohol",
        price: 10000
    },
    {
        name: "Vino",
        type: "alcohol",
        price: 35000
    },
    {
        name: "Yougurt",
        type: "milk",
        price: 8000
    },
    {
        name: "Banana",
        type: "fruit",
        price: 20000
    },
    {
        name: "Smetana",
        type: "milk",
        price: 15000
    },
    {
        name: "Konyak Sergey",
        type: "alcohol",
        price: 20000
    },
    {
        name: "Tvorog",
        type: "milk",
        price: 12000
    },
]

let categories = [
    {
        type: "milk",
        amount: 0,
        products: [],
        price: 0
    },
    {
        type: "alcohol",
        amount: 0,
        products: [],
        price: 0
    },
    {
        type: "fruit",
        amount: 0,
        products: [],
        price: 0
    },
]

for (let product of products) {
    for (let category of categories) {
        if (product.type === category.type) {
            category.products.push(product.name);
            category.amount += product.price;
        }
    }
}

console.log(categories);
