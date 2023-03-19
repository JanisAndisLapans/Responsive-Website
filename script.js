$(document).ready(function() {
  //Pievieno linkus aside elementam uz projektiem
  $( ".project" ).each(function( index ) {
    let shortcut = $('<li><a href="#' + $(this).attr("id") + '">' + $(this).children().eq(0).text() + '</a></li>)');
    $('#article-list').append(shortcut);
  });
  //Sākumā izvēlas pirmo elementu
  $("#article-list li:first-child").addClass("selected-article")

  $(window).scroll(function () { 
    //Uztver, kad ekrāns ir "norulēts" zem nav elementa, lai tas paliktu virspusē
    if ($(window).scrollTop() > 215) {
      $('body').addClass('past-header');
    }
    if ($(window).scrollTop() < 216) {
      $('body').removeClass('past-header');
    }
    //Uztver, kurš projekts (.project) ir ekrāna centrā, un tātad jāizvēlas (.selected-article) aside elementā  
    let scrollCenter = $(window).scrollTop()+$(window).height()/2;
    $('.project').each(function(index) {
      let center = $(this).position().top + $(this).height()/4;
      if(center<=scrollCenter){
        let articleList = $('#article-list>*');
        articleList.removeClass("selected-article");
        articleList.eq(index).addClass("selected-article");
      }
    });
  });
});
