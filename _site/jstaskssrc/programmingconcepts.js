<script>
//Task 1
let subTotal = 27.50; 
let tipPercentage = 15;

let withTipTotal = subTotal + (tipPercentage/100) * subTotal;

console.log(`Your pre-tip total is £${subTotal}. Your total bill, with tip, is £${withTipTotal.toFixed(2)}. The tip percentage is ${tipPercentage}%, which amounts to £${(withTipTotal - subTotal).toFixed(2)} in tips.`);

// Task 2
function calculateBillWithTip(tipPercentage, subTotal){
  let withTipTotal = subTotal + (tipPercentage/100) * subTotal;
  return withTipTotal.toFixed(2);
}
console.log(calculateBillWithTip(15, 27.50));
</script>