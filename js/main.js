
$(function(){
    $('.menu-link').bigSlide();
});

$('body').scrollspy({ target: '.navbar' });
// will make more elegant on actual site and knockoutify it//
//scrolling animation
$("#top-of-page-link").click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top - 50
    }, 1000);
});
$("#about-link").click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top + 790
    }, 1000);
});
$("#beta-link").click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top + 1575
    }, 1000);
});
$("#mailing-link").click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top + 2423
    }, 1000);
});
$("#schools-link").click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top + 3108
    }, 1000);
});
$("#blog-link").click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top + 3798
    }, 1000);
});




$('#listings-list-view').hide();
$('#listings-grid-view').show();

$('#list-view-button').click(function() {
    $('#listings-list-view').show();
    $('#listings-grid-view').hide();

    $('#list-view-active').show();
    $('#grid-view-inactive').show();
    $('#list-view-inactive').hide();
    $('#grid-view-active').hide();
});
$('#grid-view-button').click(function() {
    $('#listings-list-view').hide();
    $('#listings-grid-view').show();

    $('#list-view-active').hide();
    $('#grid-view-inactive').hide();
    $('#list-view-inactive').show();
    $('#grid-view-active').show();
});


var filterOpen = false;
var listingsOpen = false;
var secondarylistOpen = false;

$('#filter-results-desktop-button').click(function() {
    filterOpen=!filterOpen;


    if(filterOpen){
        if (listingsOpen){
            $('#listings-menu').collapse('hide');
            listingsOpen = false;
        }
        if (secondarylistOpen){
            $('#secondary-listings-menu').collapse('hide');
            secondarylistOpen=false;
        }
        console.log(filterOpen);
    }
});

$('#all-listings-button').click(function () {
    listingsOpen = !listingsOpen;

    if (secondarylistOpen) {
        $('#secondary-listings-menu').collapse('hide');
        listingsOpen = false;
        secondarylistOpen = false;
        $(".hide-first").hide();
    }
    if (filterOpen){
        $('#filter-menu').collapse('hide');
        filterOpen = false;
    }
});

$("#listings-menu a").click(function () {
    var id = $(this).attr('id');
    var cont = '#' + id + '-container';
    secondarylistOpen = true;
    $(".hide-first").hide();
    $(cont).show();
    $('#secondary-listings-menu').collapse('show');
});

$("#mobile-main-list a").click(function () {
    var id = $(this).attr('id');
    var cont = '#' + id + '-container';
    $(".hide-first").hide();
    $("#mobile-main-list").hide();
    $(cont).show();
    console.log("opened a menu");
});

$(".menu-bar-button").click(function () {
    $('#mobile-secondary-nav').hide();
});

$('.main-return').click(function() {
   $('.hide-first').hide();
   $('#mobile-main-list').show();
   $('#mobile-secondary-nav').show();
});


//sticky container settings
$('#individual-listings .container').stickem({
		item: '.stickem',
    		container: '.stickem-container',
    		stickClass: 'stickit',
    		endStickClass: 'stickit-end',
    		offset: 200,
//offsets product thumbnail to be below nav
    		onStick: null,
    		onUnstick: null
	});

$('.sticky-thing').stickem({
    item: '.stickem',
    container: '.stickem-container',
    stickClass: 'stickit',
    endStickClass: 'stickit-end',
    offset: 0,
    start: 0,
    onStick: null,
    onUnstick: null
});

//var windowHeight = window.innerHeight;
//console.log(windowHeight);
//
$('.max-container').stickem({
    item: '.stickem',
    container: '.stickem-container',
    stickClass: 'stickit',
    endStickClass: 'stickit-end',
    offset: windowHeight - 300,
    start: 0,
    onStick: null,
    onUnstick: null
});


$('.carousel').carousel({
    interval: 5000
})

$('.toggle').click(function() {
    console.log('clicked');
    $(this).toggleClass('toggle-off');
});

$('.btn-checkout').click(function() {
    console.log('clicked');
    $(this).toggleClass('blue-checkout');
});
$('.checkbox-button').click(function() {
    console.log('clicked');
    $(this).toggleClass('checkbox-blue');
});

$(document).ready(function(){
    $('#questions-textarea').autosize();
    $('#location-textarea').autosize();
    $('.rollbar-panel').rollbar({
        sliderSize: '20%',
        sliderOpacity: 1
    });


});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll<495){
        $("#homepage .side-panel").hide();
        //if ($('.menu-link').bigSlide()._state === 'open'){
        //    $('.menu-link').bigSlide().close();
        }

    else{
        $("#homepage .side-panel").show();
    }
    if (scroll < 1574){
        $('#about-link').addClass("active");
        //console.log(scroll);
    }
    else{
        $('#about-link').removeClass("active");
    }
    if (scroll >= 1575 && scroll < 2422){
        $('#beta-link').addClass("active");
        //console.log(scroll);
    }
    else{
        $('#beta-link').removeClass("active");
    }
    if (scroll >= 2423 && scroll < 3107){
        $('#mailing-link').addClass("active");
        //console.log(scroll);
    }
    else{
        $('#mailing-link').removeClass("active");
    }
    if (scroll >= 3108 && scroll < 3797){
        $('#schools-link').addClass("active");
        //console.log(scroll);
    }
    else{
        $('#schools-link').removeClass("active");
    }
    if (scroll >= 3798){
        $('#blog-link').addClass("active");
        //console.log(scroll);
    }
    else{
        $('#blog-link').removeClass("active");
    }
});