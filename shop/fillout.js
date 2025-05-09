let buy1 = document.getElementById("1");
let buy2 = document.getElementById("2");
let form = null;
let productName = null;
buy1.addEventListener('click' , function(){
  form = document.createElement('div');
  form.classList.add('purchase');
  productName = document.createElement('p');
  productName.innerHTML = 'product1';
  form.appennd(productName);
  document.body.append(form);
});