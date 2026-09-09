const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

function calculateTotal(expenses){
  let total = 0;
  
  expenses.forEach(element => {
    total += element.amount
  });

  return total
}

function calculateCategoryTotal(expenses, category) {
  let total = 0;

  expenses.forEach(item => {
    if(item.category === category){
      total += item.amount
    }
  })

  return total
}

//should return the full expense object with the largest amount.
function findLargestExpense(expenses){

    let largest = expenses[0]

    expenses.forEach(item => {
      if(item.amount > largest.amount){
        largest = item
      }
    })

    return largest
    
}


function createExpenseSummary(expenses){
  return {
    total : calculateTotal(expenses),
    foodTotal : calculateCategoryTotal(expenses, 'food'),
    transportTotal : calculateCategoryTotal(expenses, 'transport'),
    largestExpense : findLargestExpense(expenses)
  };


}




console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));