$(function(){
    // ページ外リンク
    $(window).on('load', function() {
      var headerHightpc = 131;
      var headerHight = 0;
      var url = $(location).attr('href');
      if(url.indexOf("#") != -1){
        var anchor = url.split("#");
        var target = $('#' + anchor[anchor.length - 1]);
        if(target.length){
          var windowWidth = $(window).width();
          var windowSm = 768;
          if (windowWidth <= windowSm) {
            var pos = Math.floor(target.offset().top)-headerHight;
          } else {
            var pos = Math.floor(target.offset().top)-headerHightpc;
          }
          $("html, body").animate({scrollTop:pos}, 500);
          return false;
        }
      }
    });
  
    // ページTOPボタン
    $(window).on('scroll', function () {
      var doch = $(document).innerHeight(); //ページ全体の高さ
      var winh = $(window).innerHeight(); //ウィンドウの高さ
      var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
      //一番下までスクロールした時に実行
      if (bottom * 0.95 <= $(window).scrollTop()) {
        $('.pagetop').addClass('_pushup');
      }else{
        $('.pagetop').removeClass('_pushup');
      }
    });
    //ボタンの表示設定
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
          //---- 画面を指定pxスクロールしたら、スタイルを付与する
          $('.pagetop').addClass('_fold');
        }else{
          //---- 画面が指定pxより上なら、スタイルを除去する
          $('.pagetop').removeClass('_fold');
        }
    });
    //SP用固定ボタン
    var scrollPoint = 60;
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      $(window).scroll(function(){
          if($(this).scrollTop() > scrollPoint){
              $('.floating').fadeIn();
          }else{
              $('.floating').fadeOut();
          }
      });
    }
    //fixedheader
    var s = $('header');
    $(window).scroll(function () {
      if ( $(this).scrollTop() > 200 ) {
        s.addClass('fixed-head');
      } else {
        s.removeClass('fixed-head');
      }
    });
  });
  
  
  /* ----------------------------
    スムーススクロール
  ----------------------------- */
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener('click', (e) => {
          
          e.preventDefault();
          let href = smoothScrollTrigger[i].getAttribute('href');
          let targetElement = document.getElementById(href.replace('#', ''));
          
          const rect = targetElement[0].getBoundingClientRect().top;
          const offset = window.pageYOffset;
          const gap = 95; // 固定ヘッダー分の高さ(PC用)
          const gapsp = 60; // 固定ヘッダー分の高さ(SP用)
          const target = rect + offset - gap;
          const targetsp = rect + offset - gapsp;
          const matchMedia = window.matchMedia('(max-width:767px)');
          
          // 条件分岐
          if (matchMedia.matches) {
            window.scrollTo({
              top: targetsp,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: target,
              behavior: 'smooth',
            });
          }
      });
  }
  
  
  /* ----------------------------
    ドロワー
  ----------------------------- */
  $(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer-menu li a').on('click', function() {
        $('.drawer').drawer('close');
    });
  });