function scrollDetailAnime() {
  // スクロールして要素が見えたら画像を小さくして少し上に移動しながら表示
  $('.detail_img').each(function(){
    let elemPos = $(this).offset().top + 30;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).removeClass('scroll_off2');
      $(this).addClass('scroll_on2');
      $(this).children('div').children('img').removeClass('scroll_img_off');
      $(this).children('div').children('img').addClass('scroll_img_small');
    }else{
      $(this).removeClass('scroll_on2');
      $(this).addClass('scroll_off2');
      $(this).children('div').children('img').removeClass('scroll_img_small');
      $(this).children('div').children('img').addClass('scroll_img_off');
    }
  });
}

$(window).scroll(function (){
  scrollDetailAnime();
});