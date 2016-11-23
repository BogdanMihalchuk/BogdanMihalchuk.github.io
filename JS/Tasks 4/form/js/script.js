$(function() {
	var $globelTitle;
	var $input = $('.text');

	$input.css({
		cursor: 'pointer'
	});

	$input.hover(
		function() {

			var $title = $(this).attr("title");
			var $hover = $(this).parent().append('<span class="hint" >' + $title + '</span>');
			$(this).removeAttr('title');
			$globelTitle = $title;
			$('.button_hint').remove();
		},


		function() {
			$(this).attr('title', $globelTitle);
			$('.hint').remove();
		}
	);
	var $button = $('.button');


	$button.on('click', function() {

	$('.button_hint').remove();
		var $titleEq0 = $input.eq(0).attr("title");
		$input.eq(0).parent().append('<span class=" button_hint" >' + $titleEq0 + '</span>');
		var $titleEq1 = $input.eq(1).attr("title");
		$input.eq(1).parent().append('<span class="button_hint" >' + $titleEq1 + '</span>');
		var $titleEq2 = $input.eq(2).attr("title");
		$input.eq(2).parent().append('<span class="button_hint" >' + $titleEq2 + '</span>');
	});



});