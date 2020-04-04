//20191205_ad 定時播放廣告(變化圖片)

//需要修改部分!!!!!!!
// 圖片陣列 adImgArray 
// 文字陣列 adTextArray 
// 圖片id名稱 adimgid 
// 文字id名稱 adtextid 
// 圖片資料路徑 注意adimgSrc可能須修改







$( document ).on( "pagecreate", "#newproject02", function() {
$( document ).on( "swipeleft swiperight", "#newproject02", function( e ) {
        // 檢查頁面上是否有已開啟的panel
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
    if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
         if ( e.type === "swipeleft" ) {
           imgprev();
        } else if ( e.type === "swiperight" ) {
           imgnext();
          }
        }
         });
		});	


	var swipe_index=0; //目前陣列位置
	var swipeimgSrc,swipetext;
	var swipeImgArray = new Array("cake01.jpg","cake02.jpg","cake03.jpg","cake04.jpg");
	var swipeTextArray = new Array("swipecake01","swipecake02","swipecake03","swipecake04");


	function imgprev(){
		swipe_index ++ ;
		if (swipe_index>3){
			swipe_index = 0;
		}
		swipeimgSrc ="css/images/" + swipeImgArray[swipe_index];
		swipetext = swipeTextArray[swipe_index];

		$("#swipeimgid").attr("src",swipeimgSrc);
		$("#swipetextid").text(swipetext);
		}
	function imgnext(){
		swipe_index -- ;
		if (swipe_index<0){
			swipe_index = 3;
		}
		swipeimgSrc ="css/images/" + swipeImgArray[swipe_index];
		swipetext = swipeTextArray[swipe_index];

		$("#swipeimgid").attr("src",swipeimgSrc);
		$("#swipetextid").text(swipetext);	
		}