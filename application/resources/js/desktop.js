$(document).ready(function(){
	startBtnEvents.init();
	dragging.init();
	dragableSelect.init();
	startTime();
	specialIconsEvent.fileUploader();
	closers.init();
});	
	var specialIconsEvent = new function(){
		var self = this;
		self.fileUploader = function(){
			$('#uploader').click(function(e){
				e.preventDefault();
				$(this).addClass('selected')
			});
			$('#uploader').dblclick(function(e){
				e.preventDefault();
				$('#file_uploader').fadeIn();	
				$(this).removeClass('selected')
			});
			$('#uploader1').click(function(e){
				e.preventDefault();
				$('#file_uploader').fadeIn();
			});


		}
	}

	var closers= new function(){
		this.init = function(){
			$('#closer').click(function() {
				$('#file_uploader').fadeOut();
				
			});
		}
	}

	var startBtnEvents = new function() {
		var self = this;
		self.init = function() {
			$('#startBtn').click(function()	{
				console.log(1);
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
				$('.selected').removeClass('selected');
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

	        if($(e.target)[0].id !="desktop") {
	        	return;
	        }
	        var mxy = self.getCursorPosition(e),
	            box=document.getElementById("selection_box");
	            if(!box){
	                return;
		        }
		    $('.icon:visible').each(function() { 
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
	        console.log(1);
	        self.allCardsPosition={};
	        self.allCards=[];
	        
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
		$('#datetime').text(h + ":"+ m + ' | ' + '27' + '.' + parseInt(mounth + 1) +'.' + year);
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

    $("#panelbar").children("li").children("span.k-link").css({ "font-size":"16px", "height":"35px", "width":"90%", "display":"inline-block" })
});

$(document).ready(function() {
    var window = $("#create-event"),
        undo = $("#undo")
                .bind("click", function() {
                    window.data("kendoWindow").open();
                    undo.hide();
                });

    var onClose = function() {
        undo.show();
    }

    if (!window.data("kendoWindow")) {
        window.kendoWindow({
            width: "300px",
            height: "235px",
            appendTo: "#desktop",
            position: {
            	top: 100,
            	left: 200
            },
            title: "Start event",
            actions: [
                "Pin",
                "Minimize",
                "Maximize",
                "Close"
            ],
            close: onClose
        });
    }
    $("#create-event").parent().hide();

    $("#my-events").click(function(){
    	if(!$("#create-event").is(":visible")) {
    		$("#undo").click();
    		$("#create-event").parent().show();
    	} else {
    		$("#create-event").parent().hide();
    		$(".k-i-close").click();

    	}
    });

    $("#create_advanced").click(function(){
    	if(!$("#create_advanced div").is(":visible")) {
    		$("#create_advanced div").show();
    	} else {
    		$("#create_advanced div").hide();
    	}
    });

    $("#create-event a.buged").click(function(ev){
    	var liveNow = $("#live-now > ul");
    	var newEvent = new_event_html($("#description_option").val(),
    		$("#comment_option").val(), $("#location_option").val());
    	liveNow.append(newEvent);
    	//$("#player")[0].src = $("#stream_option").val();
    	$(".k-i-close").click();
    	$("#my-events a").addClass("disable-add");
    });

    $("#create_advanced input").click(function(ev) {
    	ev.stopPropagation();
    	return false;
    });

    $("#live-now").click(function() {
    	dispaly_stream();
    });
});

function dispaly_stream() {
    $("#twitch").append(stream_twitch());
    $("#stream-header span").width("100%");
}



function new_event_html(name, comment, location) {
	return '<li aria-expanded="true" class="k-item k-first k-last k-state-active" role="menuitem" aria-selected="true" id="panelbar_pb_active" aria-hidden="false"><span class="k-link k-state-selected k-state-focused">' + name +  
                        '<span class="event-elapsed"> Elapsed: 0 hours </span><span class="k-icon k-i-arrow-n k-panelbar-collapse"></span></span>\
                        <ul class="k-group k-panel" role="group" aria-hidden="true" style="display: block; height: auto; overflow: visible;">\
                            <li class="k-item k-state-default k-first" role="menuitem"><span class="k-link">Location: ' +
                               location +
                            '</span></li>Comments' + 
                            '<li class="k-item k-state-default k-last" role="menuitem"><span class="k-link"> ' +
                                comment +
                            '</span></li>\
                        </ul>\
                    </li>';
}

function stream_twitch() {
	return '<p id="stream-header" class="k-item k-state-disabled k-first" role="menuitem" aria-disabled="true">\
            <span class="k-link k-header" style="font-size: 16px; height: 35px; width: 90%; display: inline-block;">Stream</span>\
        </p>\
        <div>\
            <iframe id="player" type="text/html" width="760" height="478"\
              src="http://www.twitch.tv/wtfsoil"\
              frameborder="0"></iframe>\
    	</div>';
}
