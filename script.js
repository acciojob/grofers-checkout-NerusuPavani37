const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll('.price')
 let totalPrice = 0;
for(let i=0;i<prices.length;i++){
  console.log(prices[i].textContent);
  
  totalPrice +=Number(prices[i].textContent);
}
console.log(totalPrice);
  
};

getSumBtn.addEventListener("click", getSum);

