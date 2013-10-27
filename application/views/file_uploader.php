<html>
<body>
	<div id='file_uploader' class="draggable">
		<form action=<?= $base_url.'save_icon_positions'; ?> method="post" enctype="multipart/form-data">
			<span id="close-uploader">
				<img  id='closer' style="float:right;" src= <?php ;echo $this->config->item('base_url').'/application/resources/images/close-icon.png ';  ?> />
			</span>
			<label for="file">Filename:</label>
			<input type="file" name="file" id="file"><br />
			<input type="submit" name="submit" value="Submit">
		</form>
	</div>
</body>
</html>