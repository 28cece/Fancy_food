const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Taco Heart",
        price: 10,
        colors: [
            {
                code: "black",
                img: "./img/tacoheart.jpg",
            },
            {
                code: "darkblue",
                img: "./img/",
            },
        ],
    },
    {
        id: 2,
        title: "Fancy Cake",
        price: 10,
        colors: [
            {
                code: "lightgray",
                img: "./img/Fancy_food_1.webp",
            },
            {
                code: "green",
                img: "./img/",
            },
        ],
    },
    {
        id: 3,
        title: "Fancy Waffle",
        price: 10,
        colors: [
            {
                code: "lightgray",
                img: "./img/waffle.webp",
            },
            {
                code: "green",
                img: "./img/",
            },
        ],
    },
    {
        id: 4,
        title: "Pancake Kabobs",
        price: 10,
        colors: [
            {
                code: "lightgray",
                img: "./img/pancakw.jpg",
            },
            {
                code: "green",
                img: "./img/",
            },
        ],
    },
    {
        id: 5,
        title: "Fancy Burger",
        price: 10,
        colors: [
            {
                code: "lightgray",
                img: "./img/burger.jpg",
            },
            {
                code: "green",
                img: "./img/",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen prouct
        choosenProduct = products[index];

        //change texsts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});