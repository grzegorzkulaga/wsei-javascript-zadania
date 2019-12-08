document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //task 0
    function getDatasInfo(elements){
        var newArray = [];
        for(var i=0; i<elements.length; i++){
            newArray.push(elements[i].dataset)
        }
        return newArray;
    }
    console.log(getDatasInfo(links));

    //task 1
    console.log(homeElement);
    
    //console.log(childElements);
    for(var i=0; i<childElements.length; i++){
        console.log(childElements[i]);
    }

    console.log(banner);

    //console.log(blocks);
    for(var i=0; i<blocks.length; i++){
        console.log(blocks[i].innerHTML);
    }
    //console.log(links);
    for(var i=0; i<links.length; i++){
        console.log(links[i]);
    }

    //task 2
    for(var i=0; i<blocks.length; i++){
        console.log(i + blocks[i].innerHTML);
        console.log(i + blocks[i].outerHTML);
    }

    for(var i=0; i<blocks.length; i++){
        blocks[i].innerHTML = ' Nowa wartość diva o klasie blocks ';
    }

    for(var i=0; i<blocks.length; i++){
        console.log(i + blocks[i].innerHTML);
    }
    //innerHTML wyświetla DOM wewnątrz elementu, a outerHTML wraz z elementem.

    //task 3
    var mainFooter = document.querySelector('#mainFooter');
    console.log(mainFooter);

    function getId(element){
        var id = element.getAttribute('id');
        console.log(id);
        return id;
    }
    getId(mainFooter);

    //task 4
    function getTags(elements){
        var newArray = [];
        for(var i=0; i<elements.length; i++){
            newArray.push(elements[i].tagName);
        }
        console.log(newArray);
        return newArray;
    }
    getTags(childElements);

    //task 5
    function getClassInfo(element){
        console.log(element.classList);
        return element.classList;
    }
    getClassInfo(banner);

    //task 6
    var liElements = document.querySelectorAll('nav li');
    console.log(liElements);

    function setDataDirection(elements){
        for(let i = 0; i < elements.length; i++){
            if(elements[i].dataset.direction === undefined){
                elements[i].dataset.direction = 'top';
            }
            console.log(elements[i].dataset.direction);
        }
    }
    setDataDirection(liElements);
    
});
