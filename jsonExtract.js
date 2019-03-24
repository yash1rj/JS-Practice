var mobJson=' {"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"Sangeetha Mobile","location":"Bangalore","stock":17} }';

let mobInfo = JSON.parse(mobJson);

console.log(mobInfo.seller.name+" shipped a "+mobInfo.product.name+" "+mobInfo.product.series+" worth "+mobInfo.price+" with "+" productId: "+mobInfo.productId+".");