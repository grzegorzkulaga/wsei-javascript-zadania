document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    // task 0
    var title = document.querySelector('.title');

    function getDataAnimation(element){
        var value = element.dataset.animation;
        return value;
    }
    var result = getDataAnimation(title);
    console.log(result);

    //task 1
    var home = document.querySelector('#home');
    var home2 = document.querySelector('home');
    console.log(home, home2);

    var direction = document.querySelector('li');
    console.log(direction);

    var block = document.querySelector('.block');
    console.log(block);

    //task 2
    const liInNav = document.querySelector('nav').querySelector('li');
    console.log(liInNav.length);

    const pInDiv = document.querySelectorAll('div p');
    console.log(pInDiv.length);

    const divsInArticle = document.querySelectorAll('article div');
    console.log(divsInArticle.length);

    //task 3
    const articleTag = document.querySelectorAll('article.first');
    const h1 = articleTag.querySelectorAll('h1').length;
    console.log(h1);
});
