const order = {
  id: 'ORD-1001',
  customer: {
    name: 'Ava Stone',
    email: 'ava@example.com',
  },
  payment: {
    status: 'paid',
  },
  shipping: {
    status: 'shipped',
    estimatedDelivery: '2026-06-18',
  },
  items: [
    { name: 'Notebook', quantity: 2 },
    { name: 'Pen Set', quantity: 1 },
  ],
};


function isPaid(order){
    if (order.payment.status === "paid"){
        return true
    }else{
        return false
    }
} // should return true when payment.status is "paid".

function hasShipped(order){
    if(order.shipping.status === "shipped"){
        return true
    }else{
        return false
    }
} // should return true when shipping.status is "shipped".

function getDeliveryMessage(order) {
    if(hasShipped(order)){
        return "Order shipped. Estimated deliver: " + order.shipping.estimatedDelivery
    }else{
        return "Order has not shipped yet"
    }
} //should return a shipping message and include estimatedDelivery when the order has shipped.

function needsAttention(order){
    if(!isPaid(order) || !hasShipped(order)){
        return true
    }else{
        return false
    }
} // should return true when the order is unpaid or has not shipped.

function createOrderSummary(order) {
    let totalItems = 0
    order.items.forEach(item =>{
        totalItems += item.quantity
    })

    return{
        "orderId" : order.id,
        "name" : order.customer.name,
        "paid" :isPaid(order),
        "shipped" : hasShipped(order),
        "items" : totalItems,
        "deliveryMessage" : getDeliveryMessage(order),
        "needsAttention" : needsAttention(order)
    }
} //should return id, customerName, paid, shipped, itemCount, deliveryMessage, and needsAttention.

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));
const pendingOrder = {
  ...order,
  payment: { status: 'unpaid' },
  shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));