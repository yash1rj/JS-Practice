let list = document.querySelector(".output ul");
let totalBox = document.querySelector(".output p");

let total = 0;

list.innerHTML = "";
totalBox.textContent = "";

let products = ['shirt:1000','pant:1300','jeans:1500','jacket:2000','socks:200','shoes:800'];

for (let i=0; i<products.length; i++) {
	let subArr = products[i].split(":");
	let pName = subArr[0];
	let pPrice = Number(subArr[1]);
	
	total += pPrice;
	itemText = pName + " -Rs." + pPrice;
	
	let lstItem = document.createElement("li");
	lstItem.textContent = itemText;
	list.appendChild(lstItem);
}

totalBox.textContent = "Total: Rs." + total.toFixed(2);