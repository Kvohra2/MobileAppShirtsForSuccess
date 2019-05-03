"use strict";

var takePhotoButton
var photoStatus
var photoImage
var imageFilename
var options
var amount
var brand
var type
var color
var totalRaised
var totalDonated
var totalFunded

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    //StatusBar.overlaysWebView(false); // force ios to show status bar
    showLogin();

    takePhotoButton = document.getElementById('donateButtonPic')
    photoStatus = document.getElementById('photoStatusId')
    photoImage = document.getElementById('photoImageId')

    options = {
        quality: 40,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        correctOrientation: true,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 300,
        targetHeight: 400
    }
}

function takePhoto() {
    navigator.camera.getPicture(photoSuccess, photoError, options)
    totalRaised = document.getElementById('totalRaised')
    totalDonated = document.getElementById('totalDonated')
    totalFunded = document.getElementById('totalFunded')
    totalRaised.innerHTML = "1";
    totalFunded.innerHTML = "$0.25";
    totalDonated.innerHTML = "1";
}

function enterData() {
    amount = document.getElementById('amountTag')
    brand = document.getElementById('brandTag')
    type = document.getElementById('typeTag')
    color = document.getElementById('colorTag')
    amount.innerHTML = "$0.25";
    brand.innerHTML = "Michael Kors";
    type.innerHTML = "Polo";
    color.innerHTML = "Baby Blue";
}

function photoSuccess(imageURI) {
    //photoStatus.innerHTML = "Success!";
    photoImage.src = imageURI
    enterData();
}

function photoError(errorMessage) {
    photoStatus.innerHTML = "Failed: " + errorMessage;
}

function showLogin() {
	var tabDirectory;

	//Getting all fo the tab directory elements and making them disappear
	tabDirectory = document.getElementById('tabDirectory');
		//tabDirectory.style.display = "none";

	showTab(event, 'Login');

	if(tabDirectory.style.display = "initial"){
		tabDirectory.style.display = "none";
	}
	
 }
     
function showTab(event, tabName) {
    // Declare all variables
    var i, tabContentElems, tabLinkElems;

    //Make the tab directory visible again.
    if(tabDirectory.style.display = "none"){
    	tabDirectory.style.display = "initial";
    }

    // Get all elements with class="tabContent" and hide them
    tabContentElems = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContentElems.length; i++) {
        tabContentElems[i].style.display = "none";
    }

    // Get all elements with class="tabLink" and remove class "active"
    tabLinkElems = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinkElems.length; i++) {
        tabLinkElems[i].className = 
        	tabLinkElems[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link
    document.getElementById(tabName).style.display = "block";
    // Why the +=?? this adds the active class.
    event.currentTarget.className += " active";
}