import {Product} from "./productbean.js";

const p1 = new Product(505, "Honor 9i", 0, 18000);
const p2 = new Product(506, "Mi A1", 5, 15000);
const p3 = new Product(507, "Lenovo K6 Note", 0, 9920);
const p4 = new Product(508, "Norse Mythology", 12, 300);
const p5 = new Product(509, "Origin", 6, 409);

let prodArr = [p1, p2, p3, p4, p5];

function inventoryDetails() {
    var totalPrice = 0;
    var lowStockProducts = [];
    var productsInStocks = [];
    let prices = document.getElementById("prices");
    let lowStockArr = document.getElementById("lowStockArr");
    let productInStockArr = document.getElementById("productInStockArr");

    prices.innerHTML = "";
    lowStockArr.innerHTML = "";
    productInStockArr.innerHTML = "";

    for(var i=0; i < prodArr.length; i++) {
        if(prodArr[i].productQuantity < 5) {
            lowStockProducts.push(prodArr[i]);
        }
        else {
            productsInStocks.push(prodArr[i]);
        }

        totalPrice = prodArr[i].productQuantity * prodArr[i].productPrice;

        // console.log(`The total price of ${prodArr[i].productName} is ${totalPrice}.`);

        prices.innerHTML += `The total price of ${prodArr[i].productName} is ${totalPrice}.<br>`;
        prices.style.backgroundColor = "#0fd800";
        prices.innerHTML += "<hr>";
    }

    // console.log(`Low Stock Products Array : ${JSON.stringify(lowStockProducts)}`);

    lowStockArr.innerHTML += `<b>Low Stock Products Array :</b><br> ${JSON.stringify(lowStockProducts)}<br>`;
    lowStockArr.style.backgroundColor = "#fd8000";
    lowStockArr.innerHTML += "<hr>";

    // console.log(`Products In Stock Array : ${JSON.stringify(productsInStocks)}`);

    productInStockArr.innerHTML += `<b>Products In Stock Array :</b><br> ${JSON.stringify(productsInStocks)}<br>`;
    productInStockArr.style.backgroundColor = "#0008df";
    productInStockArr.innerHTML += "<hr>";
}

inventoryDetails();