const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll('.price')
 let totalPrice = 0;

 prices.forEach(price =>{
   totalPrice += Number(price.textContent)
 })
let newRow = document.createElement('tr');
let newCell = document.createElement('td');
newCell.innerHTML = totalPrice;
newRow.appendChild(newCell)
let table = document.querySelector('table');
table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

