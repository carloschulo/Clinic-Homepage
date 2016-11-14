// import JQuery from '../bower_components/jquery/dist/jquery.js';
//var JQuery = require('../bower_components/jquery/dist/jquery.js');
//var $ = require('../bower_components/jquery/dist/jquery.js');

$('#about').on('click', function(e){
  e.preventDefault();
  $('html,body').animate({
   scrollTop: $('.about-section').offset().top},'slow');  
});


$('#team').on('click', function(e){
  e.preventDefault();
  $('html,body').animate({
   scrollTop: $('.team-section').offset().top},'slow');  
});

$('#contact').on('click', function(e){
  e.preventDefault();
  $('html,body').animate({
   scrollTop: $('.team-section').offset().top},'slow');  
});