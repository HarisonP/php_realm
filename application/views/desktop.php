<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>r</title>

	<link rel="stylesheet" type="text/css" href=<?php echo '"'.$this->config->item('base_url').'application/resources/css/style.css'.'"' ?>>
	<link rel="stylesheet" type="text/css" href=<?php echo '"'.$base_url.'application/resources/css/events.css'.'"' ?>>
	<link rel="stylesheet" type="text/css" href=<?php echo '"'.$base_url.'application/resources/css/window.css'.'"' ?>>	

	<link rel="stylesheet" type="text/css" href=<?= '"'.$base_url.'\application\resources\lib\styles\kendo.common.min.css'.'"' ?>>
	<link rel="stylesheet" type="text/css" href=<?= '"'.$base_url.'\application\resources\lib\styles\kendo.default.min.css'.'"' ?>>

	<script src=<?= '"'.$base_url.'\application\resources\lib\js\jquery.min.js'.'"' ?>></script>
	<script src=<?= '"'.$base_url.'\application\resources\lib\js\kendo.all.min.js'.'"' ?>></script>
	<script src=<?= '"'.$base_url.'\application\resources\lib\js\kendo.web.min.js'.'"' ?>></script>
	<script src=<?= '"'.$base_url.'\application\resources\js\dragPlugin.js'.'"' ?>></script>
	<script src=<?= '"'.$base_url.'\application\resources\js\desktop.js'.'"' ?>></script>

</head>

<body >
	<div id="desktop" class="k-content non_selectable">
    	<?= $this->load->view("partials/events"); ?>
    	<?= $this->load->view("partials/create_event"); ?>
    	<?= $this->load->view('file_uploader'); ?>
		<div id="desktop">
		
			<div id="selection_box"></div>
			<?php
			
				foreach ($positions as $icon) {
					if(!strcasecmp($icon->name, 'uploader')){
						echo '<div style="top:'.$icon->top.'px;  left:'.$icon->left.'px;" class="draggable"><a href="javascript:;" id='.$icon->name.' class="icon uploader file_uploader" style="top:'.$icon->top.'px; left:'.$icon->left.'px;"></a><p>'. $icon->name.'</p></div>'; 
						// echo '<a href="javascript:;" id='.$icon->name.' class="icon draggable file_uploader" style="top:'.$icon->top.'px; left:'.$icon->left.'px;"></a>'; 
					}
					else{
						$type=explode ('.',$icon->name);
						$iconType='';
						switch ($type[1]) {
							case 'pdf':
									$iconType='pdf';
								break;
							case 'rar':
									$iconType='rar';
								break;

							case 'zip':
								$iconType='rar';
							break;

							case 'png':
								$iconType='picture';
							break;

							case 'jpg':
								$iconType='picture';
							break;

							case 'gif':
								$iconType='picture';
							break;

							case 'bmp':
								$iconType='picture';
							break;

							case 'xls':
								$iconType='excel';
							break;


							default:
								$iconType='unknown';
								break;
						}	
						echo '<div style="top:'.$icon->top.'px;  left:'.$icon->left.'px;" class="draggable"><a href='. $this->config->item('base_url').  '/application/resources/images/'.$icon->name.' " id='.$icon->name.' 
							class="icon '.$iconType.'" ></a><p>'. $icon->name.'</p></div>'; 
		
					}				
				}


			?>	
			
			<div id="startMenu" style='display: none'>
				<!-- <button id="fullscrnBtn" class="menubtn">Toggle Fullscreen</button>
				<button id="marketBtn" class="menubtn">Market</button>
				<button id="fileSysBtn" class="menubtn">File System</button> -->
				<a href="javascript:;" id="uploader1">
					<button id="logoutBtn" class="menubtn">Upload File</button>
				</a>
				<!-- <a href="http://www.noviizbori2013.com" target="_blank">
					<img src="http://noviizbori2013.com/images/resignation-button-bg.png" alt="Поискай оставка!" style="margin-left:10px;margin-top:50px" width="180" height="45" />
				</a> -->
			</div>
			<div id="toolbar">
				<div id="startBtn">
					Start
				</div>

				<div class="seprtr"></div>

				<div id="iconHolder">
					<ul id="innerHolder">

					</ul>
				</div>

				<div id="taskbar">
					<div class="seprtr"></div>

					<div id="datetime">
						00:01 | 11.7.2013
					</div>
				<div>
			</div>
		</div>


		<script>
			

		</script>

	</body>


</html>