<?php
	include "conn.php";
	$message_name=$_POST['message_name'];
	$message_email=$_POST['message_email'];
	$message_content=$_POST['message_content'];
	$sql="insert into homepage(id,message_name,message_email,message_content) values(null,'$message_name','$message_email','$message_content')";
				$query=mysqli_query($link,$sql);
				if($query){
					echo "success";
				}
				else {
					echo "error";
				}

?>