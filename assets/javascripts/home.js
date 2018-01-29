var JS = JS || {};

JS.Home = function(){
	this.initialize();
}

JS.Home.prototype = {
	initialize: function() {
		this.changeTextColorOnHover();
		this.openModalPopup();
		this.getDataFromModalPopupForm();
	},

	changeTextColorOnHover: function(){
		document.getElementById("work-p").onmouseover = function() { mouseOver() };
		document.getElementById("work-p").onmouseout = function() { mouseOut() };
		function mouseOver() {
      document.getElementById("work-p").style.color = "red";
		}
		function mouseOut() {
      document.getElementById("work-p").style.color = "white";
		}
	},

  openModalPopup: function(){
    var form2 = document.getElementById('myModal');
		var btn2 = document.getElementById("signup2");
		var btn3 = document.getElementById("signup3");
		var span = document.getElementsByClassName("close")[0];
	  btn2.onclick = function() {
	    form2.style.display = "block";
	  }

	  btn3.onclick = function() {
	    form2.style.display = "block";
	  }

		span.onclick = function() {
	    form2.style.display = "none";
	  }

	  window.onclick = function(event) {
	    if (event.target == form2) {
	        form2.style.display = "none";
	    } 
	  }
  },

  getDataFromModalPopupForm: function(){
  	$('#modalForm').submit(function() {
  	var username = document.getElementById('username').value;
  	var display = document.getElementById('username1');
    display.value= username;
    return false;
    });
	  var form1 = document.getElementById('myFormModal');
	  var btn1 = document.getElementById("signup1");
	  var span1 = document.getElementsByClassName("formclose")[0];
	  btn1.onclick = function() {
	    form1.style.display = "block";
	  }
	  span1.onclick = function() {
	    form1.style.display = "none";
	  }
  }
}