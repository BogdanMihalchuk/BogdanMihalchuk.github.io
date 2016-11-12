$(function () {
var $globtitle;
var $input =  $('.text');

$input.css({
    cursor: 'pointer'
});

$input.hover(
  function() {

var $title = $(this).attr("title");
	var $hover = $(this).parent().append('<span class="hint" >'+ $title +'</span>');
$(this).removeAttr('title');
$globtitle = $title;

console.log($title);
  }, 


  function() {
  	console.log( 'globtitle=', $globtitle);
 $(this).attr('title', $globtitle);
 $('.hint').remove(); 



  }
);


})