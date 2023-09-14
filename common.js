// ロード画面
$(window).on('load', function(){
  $('html,body').animate({ scrollTop: 0 }, '1');
  setTimeout(function(){
    $('.load').parent('.wrapper').addClass('load_off');
  },1000);
});

// ハンバーガーメニュー
$('.header_button').on('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.menu').parent('.wrapper').addClass('menu_off');
    $('.menu').parent('.wrapper').removeClass('menu_on');
  } else {
    $(this).addClass('active');
    $('.menu').parent('.wrapper').addClass('menu_on');
    $('.menu').parent('.wrapper').removeClass('menu_off');
  }
});

// メニューホバー時
$('.link').on('mouseenter', function(){
  $(this).removeClass('line_off');
  $(this).addClass('line_on');
});
$('.link').on('animationend', function(){
  $(this).removeClass('line_on');
  $(this).addClass('line_off');
});

function scrollCommonAnime() {
  // スクロールして要素が見えたら横線を表示 
  $('.scroll_line_horizontal').each(function(){
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('scroll_line_on2');
    }else{
      $(this).removeClass('scroll_line_on2');
    }
  });

  // スクロールして要素が見えたら表示
  $('.scroll_element').each(function(){
    let elemPos = $(this).offset().top + 30;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).removeClass('scroll_off1');
      $(this).addClass('scroll_on1');
    }else{
      $(this).removeClass('scroll_on1');
      $(this).addClass('scroll_off1');
    }
  });

  // スクロールして要素が見えたら少し上に移動しながら表示
  $('.scroll_element2').each(function(){
    let elemPos = $(this).offset().top + 30;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).removeClass('scroll_off2');
      $(this).addClass('scroll_on2');
    }else{
      $(this).removeClass('scroll_on2');
      $(this).addClass('scroll_off2');
    }
  });

  // スクロールして要素が見えたら画像を大きくする
  $('.footer_onlineshop').each(function(){
    let elemPos = $(this).offset().top + 30;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).children('a').children('div').children('img').removeClass('scroll_img_off');
      $(this).children('a').children('div').children('img').addClass('scroll_img_big');
    }else{
      $(this).children('a').children('div').children('img').removeClass('scroll_img_big');
      $(this).children('a').children('div').children('img').addClass('scroll_img_off');
    }
  });
}

$(window).scroll(function (){
  scrollCommonAnime();
});