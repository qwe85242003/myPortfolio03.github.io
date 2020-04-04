//20191205_ad 定時播放廣告(變化圖片)

//需要修改部分!!!!!!!
// 圖片陣列 adImgArray 
// 文字陣列 adTextArray 
// 圖片id名稱 adimgid 
// 文字id名稱 adtextid 
// 圖片資料路徑 注意adimgSrc可能須修改


$(function(){
	setInterval(showAD,1000);
	});

	var ad_index=0; //目前陣列位置
	var adimgSrc,adtext;
	var adImgArray = new Array("cake01.jpg","cake02.jpg","cake03.jpg","cake04.jpg");
	var adTextArray = new Array("cake01","cake02","cake03","cake04");


	function showAD(){
		ad_index ++ ;
		if (ad_index>3){
			ad_index = 0;
		}
		adimgSrc ="css/images/" + adImgArray[ad_index];
		adtext = adTextArray[ad_index];

		$("#adimgid").attr("src",adimgSrc);
		$("#adtextid").text(adtext);

}