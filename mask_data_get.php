<?php
	
	// header("Access-Control-Allow-Origin:*");
	$url = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
    // $url = "maskmap.json";
	$data = file_get_contents($url);


	// file_put_contents('maskmap.json', $data);

	echo $data





?>