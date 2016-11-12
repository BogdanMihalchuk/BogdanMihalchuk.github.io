$(function() {
	var $globtitle;
	var $input = $('.text');

	$input.css({
		cursor: 'pointer'
	});

	$input.hover(
		function() {

			var $title = $(this).attr("title");
			var $hover = $(this).parent().append('<span class="hint" >' + $title + '</span>');
			$(this).removeAttr('title');
			$globtitle = $title;
		},


		function() {
			$(this).attr('title', $globtitle);
			$('.hint').remove();
		}
	);
})