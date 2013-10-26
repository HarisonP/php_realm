$(document).ready(function(){
	startBtnEvents.init();
	dragging.init();
	dragableSelect.init();
	startTime();
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
			$('#desktop').click(function(e){
				if( e.target.id !='startMenu' && e.target.id != 'startBtn' && $(e.target).parent().attr('id') != 'startMenu') {
					$('#startMenu').fadeOut();
				}
			});
			$('#desktop').mousedown(function (){				
				$('div .selected').removeClass('selected');
			});
		}
	}

	var dragging = new function() {
		var self=this;
		self.dragedElement;
		self.init = function() {
			$(function() {
				$( ".draggable" ).draggable();
			});
		}
		self.savePositions = function (){
			$(document).mouseup(function(){
				
			});
		}
		// self.iconOnrightPosition = new function(e) {
		// 	$(document).mouseup(function(e){
				
		// 		if(! $(e.target).hasClass('ui-draggable'))
		// 			return;
				
		// 		var currentDragedIcon = $(e.target);
		// 		var sizesOfCurentDragedIcon = currentDragedIcon[0].getBoundingClientRect()
		// 		$('.icon').each(function(){
		// 			var thisSizes = this.getBoundingClientRect()
		// 			if(dragableSelect.intersectRect(sizesOfCurentDragedIcon, thisSizes) && currentDragedIcon[0] != this )	
		// 			{
		// 				console.log(thisSizes.right);
		// 				currentDragedIcon[0].style.left = (thisSizes.right + 50) + 'px';
		// 				currentDragedIcon[0].style.top = (thisSizes.bottom +50)  + 'px';

		// 			}
		// 		});
				

		// 		// console.log(currentDragedIcon[0].getBoundingClientRect());
		// 	});
		// }
	}

	var dragableSelect = new function() {
		var self=this;
		self.allIcons=[];
		var topOffset=0;
		var leftOffset=0;

	    this.getCursorPosition = function (e){
	        e = e || window.event;
	        
	        if (e) {
	            var dE = document.documentElement || {};
	            var dB = document.body || {};
	            if ((e.clientX || e.clientX == 0) && ((dB.scrollLeft || dB.scrollLeft == 0) || (dE.clientLeft || dE.clientLeft == 0))) 
	                return [e.clientX + (dE.scrollLeft || dB.scrollLeft || 0) - (dE.clientLeft || 0), e.clientY + (dE.scrollTop || dB.scrollTop || 0) - (dE.clientTop || 0)];
	        }
	        return null;
	        
	    }

	    this.mousedown = function (e) {
	        if($(e.target).hasClass('draggable')) {
	        	return;
	        }
	        var mxy = self.getCursorPosition(e),
	            box=document.getElementById("selection_box");
	            if(!box){
	                return;
		        }
		    $('div .icon:visible').each(function() { 
		    	self.allIcons.push(this);
		    });
		    self.allIcons=$(self.allIcons);
	        box.orig_x = mxy[0];
	        box.orig_y = mxy[1];
	        
	        box.style.left = (mxy[0]-2 - leftOffset) + "px";
	        box.style.top = (mxy[1] - 2 - topOffset) + "px";
	        box.style.display = "block";

	        $(document).on('mousemove',self.mousemove);
	        $(document).on('mouseup',self.mouseup);
	        //    document.onmousemove = mousemove;
	        //    document.onmouseup = mouseup;
	        
	    }

	    this.mousemove = function (e) {
	        var mxy = self.getCursorPosition(e),
	            box = document.getElementById("selection_box");
	           
	             if(!box){
	                return
	            }

	        var right=mxy[0] > box.orig_x,
	            left = !right,
	            up = mxy[1] < box.orig_y,
	            down = !up;
	            
	        if(up && right){
	            box.style.top = (mxy[1]- 2 - topOffset) + "px";
	        }else if(up && left){
	            box.style.left = (mxy[0] - leftOffset) + "px";
	            box.style.top = (mxy[1] - 2 - topOffset) + "px";
	        }else if(down && left){
	            box.style.left = (mxy[0] - leftOffset) + "px";
	            box.style.top = (mxy[1] - 2 - topOffset) - "px";
	        }

	        box.style.width = (Math.abs(mxy[0] - box.orig_x)) + "px";
	        box.style.height = (Math.abs(mxy[1] - box.orig_y)) + "px";


			self.allIcons.each(function() {
				if(self.intersectRect(this.getBoundingClientRect(), box.getBoundingClientRect()) && !$(this).hasClass('selected') ){
				  $(this).addClass('selected');
				}
				else if(!self.intersectRect(this.getBoundingClientRect(), box.getBoundingClientRect()) && $(this).hasClass('selected') ){
				  $(this).addClass('selected');
				}
			});
	        
	    }

	    this.mouseup = function (e) {
	           var box = document.getElementById("selection_box");
	             if(!box){
	                return
	            } 
	        box.style.display = "none";
	        box.style.width = "0";
	        box.style.height = "0";
	        
	        self.allCardsPosition={};
	        self.allCards=[];
	        $('body').removeClass('non_selectable');
	        
	        $(document).off('mousemove', self.mousemove);
	        $(document).off('mouseup', self.mouseup);
	    //    document.onmousemove = function () {};
	    //    document.onmouseup = function () {};
	    }
	    
	    this.init=function(){
	        $(document).ready(function() {  
	            $(document).on('mousedown', self.mousedown);
	        });
	    }
	    //document.onmousedown = mousedown;
	    this.intersectRect = function(r1, r2) {
	        
	        return !(r2.left > r1.right || 
	                 r2.right < r1.left || 
	                 r2.top > r1.bottom ||
	                 r2.bottom < r1.top);
	    }
	    
	}

function startTime()
	{
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var year = today.getFullYear();
		var mounth = today.getMonth();
		var day = today.getDay();
		// add a zero in front of numbers<10
		m=checkTime(m);
		s=checkTime(s);
		$('#datetime').text(h + ":"+ m + ' | ' + day + '.' + mounth +'.' + year);
		t=setTimeout(function(){startTime()},500);
	}

		function checkTime(i)
		{
		if (i<10){
			i="0" + i;
		}
			return i;
	}

$(document).ready(function() {
    $("#panelbar").kendoPanelBar({
        expandMode: "single"
    });

    $("#panelbar").children("li").children("span.k-link").css({ "font-size":"14px", "height":"50px", "width":"100%", "display":"inline-block" })
});
