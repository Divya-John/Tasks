function calculateTotal(billAmount,taxPercentage=20){
  const taxamount=billAmount*(taxPercentage/100)
  const tax = billAmount + taxamount;
  return tax
}
console.log(calculateTotal(5))