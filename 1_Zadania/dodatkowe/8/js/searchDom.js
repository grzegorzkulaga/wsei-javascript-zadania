var menu = document.getElementById("menu");
function getDataInfo(table){
    let tabLi = [];
    for(let i =0;i<table.children.length;i++){
        tabLi.push(table.children[i].dataset.info);
    }
    return tabLi;
}
console.log(getDataInfo(menu));

var main_contener = document.getElementById("main-contener");
function getElementClass(classList){
    let tabClass = [];
    for(let i =0;i<classList.children.length;i++){
        tabClass.push(classList.children[i].className);
    }
    return tabClass;
}
console.log(getElementClass(main_contener));


var pink_color = document.getElementsByClassName("pink-color");
function getElementText(pink){
        let pinkColor = pink;
        return pinkColor[0].innerHTML;
}
console.log(getElementText(pink_color));

var images = document.getElementsByClassName("images");
function getElementAlt(imagesALT){
    let tabImages = [];
    for(let i =0;i<imagesALT.length;i++){
        tabImages.push(imagesALT[i].alt);
    }
    return tabImages;
    
}
console.log(getElementAlt(images));

var my_link = document.getElementsByClassName("my-link");
function getElementHref(My_Link){
    let tabMy_link = [];
    for(let i =0;i<My_Link.length;i++){
        tabMy_link.push(My_Link[i].href);
    }
    return tabMy_link;
    
}
console.log(getElementHref(my_link));