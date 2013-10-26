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
			$(desktop).click(function(){
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