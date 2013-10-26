<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<link rel="stylesheet" type="text/css" href=<?php echo '"'.$this->config->item('base_url').'application/resources/css/style.css'.'"' ?>>
	<!-- // <script src="http://code.jquery.com/jquery-2.0.1.min.js"></script> -->
	<script src=<?php echo'"'.$this->config->item('base_url').'application/resources/js/jquery.js"' ?>></script>
	<script src=<?php echo'"'.$this->config->item('base_url').'application/resources/js/dragPlugin.js"' ?>></script>
	
	<script src=<?php echo'"'.$this->config->item('base_url').'application/resources/js/desktop.js"' ?>></script>

</head>
<body>
		<input type="hidden" id="username" value='<?php echo $_SESSION['username']; ?>' ></input>
		<div id="desktop">
			<div class='icon draggable'> </div>
			<div id="startMenu" style='display: none'>
				<button id="fullscrnBtn" class="menubtn">Toggle Fullscreen</button>
				<button id="marketBtn" class="menubtn">Market</button>
				<button id="fileSysBtn" class="menubtn">File System</button>
				<a href="logout.php">
					<button id="logoutBtn" class="menubtn">Logout</button>
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