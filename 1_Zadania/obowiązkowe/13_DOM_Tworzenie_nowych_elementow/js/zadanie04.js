document.addEventListener("DOMContentLoaded", function(){

    var a = document.querySelector("a");
    var ul = document.querySelector("ul");
    var counter = ul.childElementCount;
        
    a.addEventListener('click', click);
    function click(){
        for(var i=0;i<counter;i++){
            if(ul.childElementCount > 0){
                ul.children[0].remove();
            }
        }
    }
});