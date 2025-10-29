/* 
Name: Easton Martin
Description: This file holds the code and functions needed for the social media post generator project.
*/

// Use this function to get an image source out of the the image upload box.
function getImageFromUpload(){
    let image = document.querySelector("#imageUpload").files[0];
    return URL.createObjectURL(image);
}

// code to show the user name and update live
let usernameInput = document.querySelector("#username");
let previewName = document.querySelector(".profile-name");
function showUsername(){
    let username = usernameInput.value;
    previewName.textContent = username;
}
usernameInput.oninput = showUsername;

// code to show the caption and update live
let captionInput = document.querySelector("#postText");
let previewCaption = document.querySelector(".post-text");
function showCaption(){
    let caption = captionInput.value;
    previewCaption.textContent = caption;
}
captionInput.oninput = showCaption;

// code to update the picture selected
let imageInput = document.querySelector("#imageUpload");
let previewImage = document.querySelector("#previewImage");
function showImage(){
    let image = getImageFromUpload();
    previewImage.src = image;
}
imageInput.onchange = showImage;

// code to change the borders on the selected picture
let cropInput = document.querySelector("#imageStyle");
let cropPreview = document.querySelector("#previewImage");
function showCrop(){
    let crop = cropInput.value;
    let classes = ["standard", "full", "rounded", "circle"];
    for (let i = 0; i < classes.length; i++){
        cropPreview.classList.remove(classes[i]);
    }
    cropPreview.classList.add(crop);
}
cropInput.onchange = showCrop;
