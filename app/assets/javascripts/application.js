// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require jquery
//= require jquery.raty.js
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
/*global jQuery $*/

$(window).on('load',function(){


  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() {
    $('.visual-logo').addClass('appear');
      $(function($) {
        var $nav   = $('#navArea');
        var $btn   = $('.btn-trigger');
        var $mask  = $('#mask');
        var open   = 'open'; // class

        $(function(){
          $('.btn-trigger').on('click', function() {
            $(this).toggleClass('active');
            return false;
          });
        });
        // menu open close
        $btn.on( 'click', function() {
          if ( ! $nav.hasClass( open ) ) {
            $nav.addClass( open );
          } else {
            $nav.removeClass( open );
          }
        });
      } )(jQuery);

       ("#login-button").click(function(event){
          event.preventDefault();

         ('form').fadeOut(500);
         ('.wrapper').addClass('form-success');
       });
      //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる





});


$('.home-btn').on('click', function() {

    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() {
    $('.visual-logo').addClass('appear');
      $(function($) {
        var $nav   = $('#navArea');
        var $btn   = $('.btn-trigger');
        var $mask  = $('#mask');
        var open   = 'open'; // class

        $(function(){
          $('.btn-trigger').on('click', function() {
            $(this).toggleClass('active');
            return false;
          });
        });
        // menu open close
        $btn.on( 'click', function() {
          if ( ! $nav.hasClass( open ) ) {
            $nav.addClass( open );
          } else {
            $nav.removeClass( open );
          }
        });
      } )(jQuery);

       ("#login-button").click(function(event){
          event.preventDefault();

         ('form').fadeOut(500);
         ('.wrapper').addClass('form-success');
       });

      //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる





});
