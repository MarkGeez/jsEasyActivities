const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];


function calculateSubtotal(items) {
    let subtotal = 0

    items.forEach(item =>{
        subtotal += item.price * item.quantity
    });

    return subtotal;
}

function calculateDiscount(subtotal, discountPercent) {

   const discount = subtotal * (discountPercent / 100)
   return discount
}

function calculateTax(amountAfterDiscount, taxPercent) {
    const tax = amountAfterDiscount * ( taxPercent / 100)
    return tax
}

function createCartSummary(items, discountPercent, taxPercent){
    const subtotal =  calculateSubtotal(items)
    const discount = calculateDiscount(subtotal, discountPercent)
    const amountAfterDiscount = subtotal-discount
    const tax = calculateTax(amountAfterDiscount, taxPercent)
    const total = amountAfterDiscount + tax

    return {
        subtotal: subtotal,
        discount: discount,
        tax : tax,
        total: total ,
    }
}

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));