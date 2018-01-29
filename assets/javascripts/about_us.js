var JS = JS || {};

JS.About = function(){
	this.initialize();
}

JS.About.prototype = {
	initialize: function() {
		this.addHoveronFooterText();
	},

	addHoveronFooterText: function(){
	  $('#footer p').mouseover(function(){
	    $('#footer p').css('background-color', 'yellow');
	  });
	  $('p').mouseout(function(){
	    $('#footer p').css('background-color', 'black');
	  });
	}
}