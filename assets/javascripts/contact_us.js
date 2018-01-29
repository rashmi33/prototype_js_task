var JS = JS || {};

JS.Contact = function(){
	this.initialize();
}

JS.Contact.prototype = {
	initialize: function() {
		this.addHoveronFooterText();
		this.openModalPopupOnContact();
	},

	addHoveronFooterText: function(){
	  $('#footer p').mouseover(function(){
	    $('#footer p').css('background-color', 'yellow');
	  });
	  $('p').mouseout(function(){
	    $('#footer p').css('background-color', 'black');
	  });
	},

	openModalPopupOnContact: function(){
    var form = document.getElementById('contact-modal');
		var btn = document.getElementById('contact-button');
		var span = document.getElementsByClassName('close')[0];
	  btn.onclick = function() {
	    form.style.display = 'block';
	  }

		span.onclick = function() {
	    form.style.display = 'none';
	  }

	  window.onclick = function(event) {
	    if (event.target == form) {
	        form.style.display = 'none';
	    } 
	  }
  }
}
