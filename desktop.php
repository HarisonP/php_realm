<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<link rel="stylesheet" type="text/css" href=<?= '"'.$base_url.'application/resources/css/style.css'.'"' ?>>
	<link rel="stylesheet" type="text/css" href=<?= '"'.$base_url.'\application\resources\lib\styles\kendo.common.min.css'.'"' ?>>
	<link rel="stylesheet" type="text/css" href=<?= '"'.$base_url.'\application\resources\lib\styles\kendo.default.min.css'.'"' ?>>
	<script src=<?= '"'.$base_url.'\application\resources\lib\js\jquery.min.js'.'"' ?>></script>
	<script src=<?= '"'.$base_url.'\application\resources\lib\js\kendo.web.min.js'.'"' ?>></script>

</head>
<body>

<div id="desktop">
  <?= $this->load->view("streamers") ?>
</div>

</body>
</html>