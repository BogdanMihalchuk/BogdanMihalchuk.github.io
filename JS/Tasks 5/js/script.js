$(window).load(function() {

	// slider

	$('.flexslider').flexslider({
		animation: "slide"
	});

	$('.basic').fancySelect();


//checkbox js

	$(".niceCheck").mousedown(
		/* при клике на чекбоксе меняем его вид и значение */
		function() {
			changeCheck($(this));
		});
	$(".niceCheck").each(
		/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
		function() {
			changeCheckStart($(this));
		});
function changeCheck(el)
/* 
    функция смены вида и значения чекбокса
    el - span контейнер дял обычного чекбокса
    input - чекбокс
*/
{
	var el = el,
		input = el.find("input").eq(0);
	if (!input.attr("checked")) {
		el.css("background-position", "0 -17px");
		input.attr("checked", true)
	} else {
		el.css("background-position", "0 0");
		input.attr("checked", false)
	}
	return true;
}

function changeCheckStart(el)

{
	var el = el,
		input = el.find("input").eq(0);
	if (input.attr("checked")) {
		el.css("background-position", "0 -17px");
	}
	return true;
};


// drop down menu

 var $subitem = $('.menu__item--1');
var $item = $('.menu__item');


$item.on('click', function(e){
e.preventDefault();
});

	$item.hover(
		function(e) {
			var  $submenu = $(this).children('ul');
			console.log($submenu)

			e.preventDefault();
			$submenu.slideDown("slow");
		},
		function(e) {
			var  $submenu = $(this).children('ul');
			e.preventDefault();
			$submenu.slideUp("slow");
		}
	);

	$subitem.hover(
		function(e) {
			var  $submenu = $(this).children('ul');
			e.preventDefault();
			$submenu.slideDown("slow");
		},
		function(e) {
			var  $submenu = $(this).children('ul');
			e.preventDefault();
			$submenu.slideUp("slow");
			
		}
	);


});