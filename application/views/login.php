<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<link rel="stylesheet" type="text/css" href=''>

</head>
<body>

<div id="container">

	<div id="body">
		<div>
		<form id='login_form' method='POST' action=<?php echo '"'.$this->config->item('base_url').'desktop'.'"' ?>>
			<label>Username</label>
			<input id='username' type='text'/></br>
			<label>Password</label>
			<input type='password'/></br>
			<input type='submit'/>
		</form>
		</div>
	</div>

</div>

</body>
</html>