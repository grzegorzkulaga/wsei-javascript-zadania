document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("addBtn"),
    table = document.getElementById("orders");
    
    button.addEventListener('click', click);
    
    var order="", quantity="", item="", td="", tr="";
    
    function click(){
        order = document.getElementById("orderId");
        item = document.getElementById("item");
        quantity = document.getElementById("quantity");
        
        tr = document.createElement("tr");
        td = document.createElement("td");
        td.innerHTML = order.value;
        
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = item.value;
        
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = quantity.value;
        
        tr.appendChild(td);
        table.appendChild(tr);
    }    
});