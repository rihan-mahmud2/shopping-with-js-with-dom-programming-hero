const cartArray = [];
let totalPrice = 0;
function display(arr) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
  
    const productNumber = document.getElementById("product-number");
    productNumber.innerText = arr.length;
    const pdPrice = arr[i].pdPrice;
    const price = parseFloat(pdPrice)
    totalPrice += price
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <tr>
        <th>${i + 1}</th>
        <td>${arr[i].pdName}</td>
        <td>${arr[i].pdPrice}</td>
        
      </tr>
      `;
    tableBody.appendChild(tr);
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
        <th>Total Price</th>
        <td></td>
        <td>${totalPrice}</td>
        `;
  tableBody.appendChild(tr);
}

function buyNow(element) {
  const pdName = element.parentNode.parentNode.children[0].innerText;
  const pdPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  // console.log(pdPrice);

  const cartList = {
    pdName: pdName,
    pdPrice: pdPrice,
  };
  console.log(cartList);

  cartArray.push(cartList);
  display(cartArray);
}
