$(function(){
	var $menu = $('#menu');
	var $btn = $(".listMark");
	// alert($btn);
	$btn.click(function() {

	var H=$menu.height();
	if (H==0) {
		$menu.animate({
		"height":"300px",
	},500);

	}else{
		$menu.animate({
		"height":"0px",
	},500);
	};
	});
});

