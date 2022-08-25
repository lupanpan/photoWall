window.onload = function () {
    /*define a photo list*/
    const photoJson = {
        "column1": [
            {"photoName": "beach.jpg", "photoText": "beach"},
            {"photoName": "dog.jpg", "photoText": "dog"},
            {"photoName": "love.jpg", "photoText": "love"},
            {"photoName": "flower-basket.jpg", "photoText": "flower-basket"},
            {"photoName": "sea.jpg", "photoText": "sea"}
        ],
        "column2": [
            {"photoName": "love.jpg", "photoText": "love"},
            {"photoName": "beach2.jpg", "photoText": "beach2"},
            {"photoName": "village.jpg", "photoText": "village"},
            {"photoName": "dog2.jpg", "photoText": "dog2"},
            {"photoName": "lake.jpg", "photoText": "lake"}
        ],
        "column3": [
            {"photoName": "scooter.jpg", "photoText": "scooter"},
            {"photoName": "italy.jpg", "photoText": "italy"},
            {"photoName": "snow.jpg", "photoText": "snow"},

            {"photoName": "shilouette.jpg", "photoText": "shilouette"},
            {"photoName": "muenster.jpg", "photoText": "muenster"}
        ],
        "column4": [
            {"photoName": "woman.jpg", "photoText": "woman"},
            {"photoName": "lake.jpg", "photoText": "lake"},
            {"photoName": "house.jpg", "photoText": "house"},
            {"photoName": "woman2.jpg", "photoText": "woman2"},
            {"photoName": "athen.jpg", "photoText": "athen"}

        ]
    }
    /*show photo*/
    showPhoto(photoJson);

    /*define a function to show photo*/
    function showPhoto() {
        /*define a photo list html*/
        let photoListHtml = "";

        /*loop the photo json to get photo*/
        for (let key in photoJson) {
            photoListHtml += '<div class="photo-wall-column">';

            /*get photo column*/
            for (let photoOjb of photoJson[key]) {
                photoListHtml += '<div class="photo-item">';
                photoListHtml += '<img src="images/' + photoOjb.photoName + '">';
                photoListHtml += '<div class="photo-text-container">';
                // photoListHtml += '<span>' + photoOjb.photoText + '</span>';
                photoListHtml += '<div class="photo-text">';
                photoListHtml += '<h3>' + photoOjb.photoText + '</h3>'
                photoListHtml+='<span>This is description of the photo</span>'
                photoListHtml += '</div>';
                photoListHtml += '</div>';
                photoListHtml += '</div>';
            }

            photoListHtml += '</div>';
        }
        /*Insert photo list into HTML*/
        document.getElementById("photoWall").innerHTML = photoListHtml;
    }
}



