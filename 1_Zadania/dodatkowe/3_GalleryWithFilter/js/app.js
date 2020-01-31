document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.body;
    var galleryDiv = document.getElementById("gallery");
    var galleryElements = galleryDiv.children;
    console.log(galleryElements);

    var showButton = document.getElementById("showButton");
    var hideButton = document.getElementById("hideButton");
    var tagInput = document.getElementById("tagInput");

    showButton.addEventListener("click", function (event) {
        var filterTag = tagInput.value.toLowerCase();
        tagInput.value = "";

        var i;
        for (i = 0; i < galleryElements.length; i++) {
            var pictureTag = galleryElements[i].dataset.tag;
            if (pictureTag.indexOf(filterTag) >= 0)
                galleryElements[i].classList.remove("invisible");
            else
                galleryElements[i].classList.add("invisible");
        }
    });
    
    hideButton.addEventListener("click", function (event) {
        var filterTag = tagInput.value.toLowerCase();
        tagInput.value = "";

        var i;
        for (i = 0; i < galleryElements.length; i++) {
            var pictureTag = galleryElements[i].dataset.tag;
            if (pictureTag.indexOf(filterTag) >= 0)
                galleryElements[i].classList.add("invisible");
            else
                galleryElements[i].classList.remove("invisible");
        }
    });
}); 