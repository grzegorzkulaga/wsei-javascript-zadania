document.addEventListener("DOMContentLoaded", function (){
		document.getElementById("button1").addEventListener("click", function() {
			(this.nextElementSibling.getElementsByClassName("counter")[0].innerHTML)++;
        });
        document.getElementById("button2").addEventListener("click", function() {
			(this.nextElementSibling.getElementsByClassName("counter")[0].innerHTML)++;
        });
        document.getElementById("button3").addEventListener("click", function() {
			(this.nextElementSibling.getElementsByClassName("counter")[0].innerHTML)++;
        });
});