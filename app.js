"use strict";

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