$(document).bind("mobileinit", function () {
	// Prevents all anchor click handling
	$.mobile.linkBindingEnabled = false

	// Disabling this will prevent jQuery Mobile from handling hash changes
	$.mobile.hashListeningEnabled = false

	$.mobile.ajaxEnabled = false;
	$.mobile.pushStateEnabled = false;

	//set default page transition
	$.mobile.defaultPageTransition = "slide";
	//not working because live is not defined yet
	// Remove page from DOM when it’s being replaced 
	$('div[data-role="page"]').on('pagehide', function (event, ui) {
		console.log("wasHere");
	        $(event.currentTarget).remove();
	 	});
});
