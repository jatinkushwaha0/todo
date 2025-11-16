const input = document.querySelector('input');
const sub = document.querySelector('.submit');
const li = document.querySelector('.li');
const ol = document.querySelector('.ol');
sub.addEventListener('click', function () {
    if(input.value.trim()  === ""){ }
    else {
  let value = input.value;
    let insert = `<li class="li">${value}</li>`
    ol.innerHTML+=(insert);
    input.value="";
    }

});