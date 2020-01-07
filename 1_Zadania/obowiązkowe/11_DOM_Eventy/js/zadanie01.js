/*
var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
*/
/* 1
- Skrypt w head zostanie wywołany w momencie kiedy DOM jeszcze nie jest dostępny.
- Skrypt na dole kodu strony zostanie pobrany po załadowaniu strony.
*/

// 2
document.addEventListener("DOMContentLoaded",function(){
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});
// Stworzenie DOMContentLoaded poprawiło sytuacje, ponieważ kod wykonuje się dopiero gdy dokument zostanie pomyślnie załadowany.

// 3
// Nie ma różnicy - skrypt zostanie wykonany po załadowaniu się kodu HTML.