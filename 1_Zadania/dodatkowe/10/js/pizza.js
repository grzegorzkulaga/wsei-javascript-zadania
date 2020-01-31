var input = document.querySelectorAll("input");
var button = document.querySelector("button");
var priceValue = document.getElementById("price");
var page_info = document.querySelector("div.page-info");

for(let i = 1 ; i < input.length-1; i++){
    input[i].addEventListener("click", clickMeInput);
}
var price = 0;
input[0].addEventListener("click",function() {
    for(let i=1;i<input.length-1;i++){
        if(input[i].checked == false){
            input[i].checked = true;
            console.log(parseFloat(input[i].dataset.price));
            price = price + parseFloat(input[i].dataset.price);
        }
    }
    price = Math.round(price*100)/100;
    priceValue.innerHTML = price + "0zł";
    console.log(price);
});

input[input.length-1].addEventListener("click",function() {
    for(let i=0;i<input.length-1;i++){
        input[i].checked = false;
    }
    price = 0;
    priceValue.innerHTML = price + "zł";
    console.log(price);
});

button.addEventListener("click",function() {
    console.log(price);
    if(price==0 || price==7 || price==12 || price==5){
        page_info.innerHTML = "Do zapłaty: " + price + "zł";
    }
    else{
        page_info.innerHTML = "Do zapłaty: " + price + "0zł";
    }
    for(let i=0;i<input.length;i++){
        input[i].checked = false;
    }
    price = 0;
    priceValue.innerHTML = price + "zł";
});

function clickMeInput(){
    if(this.checked == true){
        this.checked = true;
        price = price + parseFloat(this.dataset.price);
    }
    else{
        this.checked = false;
        price = price - parseFloat(this.dataset.price);
    }
    price = Math.round(price*100)/100;
    if(price==0 || price == 5  || price==7 || price==12){
        priceValue.innerHTML = price + "zł";
    }
    else{
        priceValue.innerHTML = price + "0zł";
    }
    console.log(price);
};