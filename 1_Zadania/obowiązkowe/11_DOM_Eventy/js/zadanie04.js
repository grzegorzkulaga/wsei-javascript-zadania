document.addEventListener("DOMContentLoaded",function(){
    function counter(button){
        document.getElementById(button).addEventListener("click",function(){
            (document.getElementsByClassName("counter")[0].innerHTML)++;
        });
    }
    counter("button1");
    counter("button2");
    counter("button3");
});