
document.getElementById('moon').addEventListener('click', function(){
    document.getElementById('bd').classList.toggle('dark');
})

function display1(){
    document.getElementById('div1').style.display = 'flex';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('coo').style.backgroundColor = 'rgb(230, 228, 228)';
    document.getElementById('cooo').style.background = 'none';
    document.getElementById('coooo').style.background = 'none';
}
function display2(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'flex';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('cooo').style.background= 'rgb(230, 228, 228)';
    document.getElementById('coo').style.background = 'none';
    document.getElementById('coooo').style.background = 'none';
}
function display3(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'flex';
    document.getElementById('coooo').style.background = 'rgb(230, 228, 228)';
    document.getElementById('cooo').style.background = 'none';
    document.getElementById('coo').style.background = 'none';
}

const par = new URLSearchParams(window.location.search);
  const x = par.get('name');
  const y = par.get('price');
  const z = par.get('imgsrc');
  document.getElementById('product-name').innerHTML = x;
  document.getElementById('product-price').innerHTML = y + '$';
  document.getElementById('product-img').src = z;
 let a = document.getElementById('quant');

let cart = [];
let totalPrice = 0;
let total = 0;
function addToCart() {
    let name = x;
    let price = parseInt(y);
    let size = document.getElementById('sel').value;
    let quantity = a.value;
    cart.push({ name, price, size, quantity, total});
    total = price * quantity;
    totalPrice += total;
    updateCart();
    alert('Product is add in the cart');
}
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.style.fontSize = '20px';
        li.style.fontWeight = '600';
        li.style.border = '1px solid';
        li.style.padding = '15px';
        li.style.marginBottom = '5px';
        li.style.borderRadius = '10px';
        li.style.boxShadow = '2px 2px 9px 1px';
        li.style.fontStyle = 'italic';
        li.innerHTML = `Product Name: <span style = "color: red; font-size: 22px; font-weight: bold;">${item.name}</span> <br> Product Price: <span style = "color: red; font-size: 22px; font-weight: bold;">${item.price}$</span> <br>
          Product Size: <span style = "color: red; font-size: 22px; font-weight: bold;">${item.size}</span> <br> Quantity: <span style = "color: red; font-size: 22px; font-weight: bold;">${item.quantity}</span> <br> => Total = <span style = "color: red; font-size: 22px; font-weight: bold;">${item.quantity * item.price}$</span> `;
        cartItems.appendChild(li);
    });
    
    document.getElementById('total-price').innerHTML = totalPrice ;
}



