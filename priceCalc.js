function calculateDiscount(price, discountPercent){
    return price * (discountPercent / 100);
} //should return the discount amount.

function calculateTax(priceAfterDiscount, taxPercent){
    return priceAfterDiscount * (taxPercent / 100)
} //should return the tax amount.
//should subtract the discount, add tax, and return the final price.
function calculateFinalPrice(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent)
    const afterDiscount = price - discount
    const tax = calculateTax(afterDiscount, taxPercent)

    const total = afterDiscount + tax

    return total
} 
// should return an object with price, discount, tax, and finalPrice.
function createPriceSummary(price, discountPercent, taxPercent){
    
    const discount = calculateDiscount(price, discountPercent);
    const priceDiscount = price - discount
    const tax = calculateTax(priceDiscount, taxPercent)
    const final = calculateFinalPrice(price, discountPercent, taxPercent)

    return{
        "price" : price,
        "discount" : discount,
        "tax" : tax,
        "finalPrice" : final
    };
    
    
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10))