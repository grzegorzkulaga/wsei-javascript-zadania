document.addEventListener('DOMContentLoaded', function(){
    var element = document.querySelector('.first').children[0].children[2];
    console.log(element);

    var element2 = document.querySelector('#second').parentNode.children[3];
    console.log(element2);

    var dataex = document.querySelector('[data-ex="third"]').parentElement.parentElement;
    var lastChild = dataex.children[dataex.children.length - 1];
    var firstChild = lastChild.children[0];
    var answer = firstChild.children[Math.floor(firstChild.children.length / 2)];
    console.log(answer);
});