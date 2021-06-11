$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
	    menu: '#myMenu',
        navigation: true,
		autoScrolling:true,
		scrollHorizontally: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});