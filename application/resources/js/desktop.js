$(document).ready(function(){
	startBtnEvents.init();
	dragging.init();

});	

	var startBtnEvents = new function() {
		var self = this;
		self.init = function() {
			$('#startBtn').click(function()	{
				$('#startMenu').fadeToggle();
			});
			self.close();
		}
		self.close = function() {
			$("#desktop").click(function(){
				if( event.target.id !='startMenu' && event.target.id != 'startBtn' && $(event.target).parent().attr('id') != 'startMenu') {
					$('#startMenu').fadeOut();
				}
			});
	
		}
	}

	var dragging = new function() {
		var self=this;
		self.init = function() {
			$(function() {
				$( ".draggable" ).draggable();
			});
		}

	}

$(document).ready(function() {
    $("#panelbar").kendoPanelBar({
        expandMode: "single"
    });

    $("#panelbar").children("li").children("span.k-link").css({ "font-size":"14px", "height":"50px", "width":"100%", "display":"inline-block" })
});