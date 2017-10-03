$(document).ready(function(){
	$(function(){
	    $("[data-toggle=popover]").popover({
	        html : true,
	        placement: 'bottom',
	       
	        content: function() {
	          var content = $(this).attr("data-popover-content");
	          return $(content).children(".popover-body").html();
	        },
	        
	    });
	});

});


