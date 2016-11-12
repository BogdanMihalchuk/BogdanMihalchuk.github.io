$(function () {

var $tabsItem =  $('.tabs__item');
var $tabsText = $('.tabs__text');

$tabsItem.css({
    cursor: 'pointer'
});



$tabsItem.eq(0).on('click', function (){
$tabsItem.removeClass('active');
$(this).addClass('active');
$tabsText.eq(0).removeClass('text__none');
$tabsText.eq(1).addClass('text__none');
$tabsText.eq(2).addClass('text__none');   
});

$tabsItem.eq(1).on('click', function (){
 $tabsItem.removeClass('active');
$(this).addClass('active');
$tabsText.eq(1).removeClass('text__none');
$tabsText.eq(0).addClass('text__none');
$tabsText.eq(2).addClass('text__none');   
});

$tabsItem.eq(2).on('click', function (){
 $tabsItem.removeClass('active');
$(this).addClass('active');
$tabsText.eq(2).removeClass('text__none');
$tabsText.eq(1).addClass('text__none');
$tabsText.eq(0).addClass('text__none');   
});
})